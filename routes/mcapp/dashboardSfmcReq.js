/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
const uuidv1 = require('uuid/v4');
const sfmcHelper = require('../sfmcHelper');


function buildDashboard(data) {
    console.log(data);
    let table = '<div class="slds-lookup" data-select="multi" data-scope="single" data-typeahead="true">';
    table += '<table class="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered slds-table_fixed-layout" role="grid" >';

    table += '<thead>';
    table += '<tr class="slds-line-height_reset">';

    table += '<th scope="col" colspan="2"><b>OneLink Name</b></th>';
    table += '<th scope="col" ><b>URL</b></th>';
    table += '<th scope="col" ><b># of Contents</b></th>';
    table += '<th scope="col" ><b>Parameters</b></th>';
    table += '<th scope="col" ><b>Custom Parameters</b></th>';
    table += '<th scope="col" ><b>Full URL</b></th>';
    table += '<th scope="col" ><b>Created</b></th>';
    table += '<th scope="col" ><b>Modified</b></th>';
    table += '<th scope="col" ></th>';
    table += '</tr>';
    table += '</thead>';
    table += '<tbody>';


    if (data !== undefined) {
        data.sort((a, b) => ((new Date(a.Modified) < new Date(b.Modified)) ? 1 : ((new Date(b.Modified) < new Date(a.Modified)) ? -1 : 0)));
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            table += '<tr>';

            table += `<td role="gridcell" colspan="2"><div class="slds-truncate" >${element.LinkName}</div></td>`;
            table += `<td role="gridcell"><div class="slds-truncate" >${element.BaseURL}</div></td>`;
            table += `<td role="gridcell"><div class="slds-truncate" >${element.ContentsCount}</div></td>`;
            table += `<td role="gridcell"><div class="slds-truncate" >${element.Parameters}</div></td>`;
            table += `<td role="gridcell"><div class="slds-truncate" >${element.CustomParameters}</div></td>`;
            table += `<td role="gridcell"><div class="slds-truncate" title="${element.FullURL}">${element.FullURL}</div></td>`;
            table += `<td role="gridcell"><div class="slds-truncate" >${element.Created}</div></td>`;
            table += `<td role="gridcell"><div class="slds-truncate" >${element.Modified}</div></td>`;
            table += '<td>';
            table += `<div id="onelink-trigger${element.LinkID}" class="slds-dropdown-trigger slds-dropdown-trigger_click">`;
            table += `<button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" title="Show More" onclick="$('#onelink-trigger${element.LinkID}').addClass('slds-is-open');" onmouseover="$('#onelink-trigger${element.LinkID}').addClass('slds-is-open');">`;
            table += '<svg class="slds-button__icon" aria-hidden="true">';
            table += '<use xlink:href="/mcapp/images/symbols.svg#down">';
            table += '</use>';
            table += '</svg>';
            table += '<span class="slds-assistive-text">Show More</span>';
            table += '</button>';
            table += `<div class="slds-dropdown slds-dropdown_left" onmouseleave="$('#onelink-trigger${element.LinkID}').removeClass('slds-is-open');">`;
            table += '<ul class="slds-dropdown__list" role="menu" aria-label="Show More">';
            table += '<li class="slds-dropdown__item" role="presentation">';
            table += `<a href="/dashboard/edit/?lid=${element.LinkID}&eid={0}&rt={1}" class="edit" id="edit${index}" role="menuitem" tabindex="0">`;
            table += '<span class="slds-truncate" title="Edit">Edit</span>';
            table += '</a></li>';
            table += '</ul>';
            table += '</div>';
            table += '</div>';
            table += '</td>';
            table += '</tr>';
        }
    }
    table += '</tbody>';
    table += '</table>';
    table += '</div>';

    return table;
}

exports.loadDashboards = (req, resp) => {
    sfmcHelper.createSoapClient(req.body.refresh_token, (e, response) => {
        if (e) { return resp.status(500).end(e); }

        console.log(response);
        const requestObject = {
            RetrieveRequest: {
                ClientIDs: {
                    ClientID: req.body.enterpriseId,
                },
                ObjectType: 'DataExtensionObject[Link]',
                Properties: ['LinkID', 'LinkName', 'BaseURL', 'ContentsCount', 'Status', 'Parameters', 'CustomParameters', 'FullURL', 'Created', 'Modified'],
                Filter: sfmcHelper.simpleFilter('Flag', 'equals', 1),
            },
        };

        sfmcHelper.retrieveRequest(response.client, requestObject)
            .then((body) => {
                console.log(body);
                const dashboardResponse = {
                    data: '',
                    table: buildDashboard(body, response.refresh_token, req.body.enterpriseId),
                    refresh_token: response.refresh_token,
                    enterpriseId: req.body.enterpriseId,
                };
                console.log(dashboardResponse);
                return resp.status(200).send(dashboardResponse);
            }).catch((err) => resp.send(400, err));
    });
};

exports.getLinkByID = (req, resp) => {
    sfmcHelper.createSoapClient(req.body.refresh_token, (e, response) => {
        if (e) { return resp.status(500).end(e); }

        const requestObject = {
            RetrieveRequest: {
                ClientIDs: {
                    ClientID: req.body.enterpriseId,
                },
                ObjectType: 'DataExtensionObject[Link]',
                Properties: ['LinkID', 'LinkName', 'BaseURL', 'ContentsCount', 'Status', 'Parameters', 'CustomParameters', 'FullURL', 'Created', 'Modified'],
                Filter: sfmcHelper.simpleFilter('LinkID', 'equals', req.body.LinkID),
            },
        };

        sfmcHelper.retrieveRequest(response.client, requestObject)
            .then((body) => {
                console.log(body);
                const r1 = {
                    link: body,
                    refresh_token: response.refresh_token,
                    enterpriseId: req.body.enterpriseId,
                };
                resp.send(200, r1);
            }).catch((err) => resp.send(400, err));
    });
};

exports.UpsertLink = (req, resp) => {
    sfmcHelper.createSoapClient(req.body.refresh_token, (e, response) => {
        if (e) { return resp.status(500).end(e); }

        const Properties = [{
            Name: 'LinkName',
            Value: req.body.linkName,
        }, {
            Name: 'BaseURL',
            Value: req.body.baseUrl,
        }, {
            Name: 'ContentsCount',
            Value: req.body.contentsCount === undefined ? 0 : req.body.contentsCount,
        }, {
            Name: 'Status',
            Value: req.body.status,
        }, {
            Name: 'Flag',
            Value: 1,
        },
        {
            Name: 'Parameters',
            Value: req.body.Parameters,
        },
        {
            Name: 'CustomParameters',
            Value: req.body.CustomParameters,
        },
        {
            Name: 'FullURL',
            Value: req.body.baseUrl + req.body.Parameters + req.body.CustomParameters,
        },
        {
            Name: 'Created',
            Value: req.body.Created,
        },
        {
            Name: 'Modified',
            Value: req.body.Modified,
        },
        ];
        const UpdateRequest = sfmcHelper.UpdateRequestObject('Link', [{
            Name: 'LinkID',
            Value: req.body.LinkID === undefined ? uuidv1() : req.body.LinkID,
        }], Properties);

        console.log(UpdateRequest);
        sfmcHelper.upsertDataextensionRow(response.client, UpdateRequest)
            .then((body) => {
                if (body.StatusCode !== undefined) {
                    const r1 = {
                        refresh_token: response.refresh_token,
                        Status: body.StatusCode[0],
                    };
                    return resp.send(200, r1);
                }

                return resp.send(200, body);
            }).catch((err) => resp.send(400, err));
    });
};
