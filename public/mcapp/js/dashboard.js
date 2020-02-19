/* eslint-disable no-undef */
function getUrlParameters() {
    const url = new URL(window.location.href);
    const urlParams = {
        refresh_token: url.searchParams.get('rt'),
        enterpriseId: url.searchParams.get('eid'),
    };
    return urlParams;
}

$(document).ready(() => {
    const urlParams = getUrlParameters();
    const url = '/LoadDashboards';
    $('#rt').val(urlParams.refresh_token);
    $('#eid').val(urlParams.enterpriseId);
    $.ajax({
        url,
        method: 'POST',
        async: false,
        data: urlParams,
        success: (data) => {
            $('#dashboard-table').html(data.table);
            $('#rt').val(data.refresh_token);
            $('#eid').val(data.enterpriseId);
        },
        error(jqXHR, error, errorThrown) {
            const sat = '<div class="slds-lookup" data-select="multi" data-scope="single" data-typeahead="true"><table class="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered slds-table_fixed-layout" role="grid" ><thead><tr class="slds-line-height_reset"><th scope="col" colspan="2"><b>OneLink Name</b></th><th scope="col" colspan="2"><b>Full URL</b></th><th scope="col" ><b>URL</b></th><th scope="col" ><b># of Contents</b></th><th scope="col" ><b>Parameters</b></th><th scope="col" ><b>Custom Parameters</b></th><th scope="col" ><b>Created</b></th><th scope="col" ><b>Modified</b></th><th scope="col" ></th></tr></thead><tbody><tr><td role="gridcell" colspan="2"><div class="slds-truncate" >Security Review Test</div></td><td role="gridcell"  colspan="2"><div class="slds-truncate" title="https://af-esp.onelink.me/mYu3?pid=Email-SFMC&af_channel=Salesforce Marketing Cloud&is_retargeting=true&c=security_review&af_dp=esp%3A%2F%2Fdeeplink">https://af-esp.onelink.me/mYu3?pid=Email-SFMC&af_channel=Salesforce Marketing Cloud&is_retargeting=true&c=security_review&af_dp=esp%3A%2F%2Fdeeplink</div></td><td role="gridcell"><div class="slds-truncate" >https://af-esp.onelink.me/mYu3</div></td><td role="gridcell"><div class="slds-truncate" >1</div></td><td role="gridcell"><div class="slds-truncate" >?pid=Email-SFMC&af_channel=Salesforce Marketing Cloud&is_retargeting=true&c=security_review</div></td><td role="gridcell"><div class="slds-truncate" >&af_dp=esp%3A%2F%2Fdeeplink</div></td><td role="gridcell"><div class="slds-truncate" >2/10/2020 6:27:08 PM</div></td><td role="gridcell"><div class="slds-truncate" >2/10/2020 6:49:00 PM</div></td><td><div id="onelink-trigger274acd92-fa1a-4e81-b55d-ef663a8685c1" class="slds-dropdown-trigger slds-dropdown-trigger_click"><button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" title="Show More"><svg class="slds-button__icon" aria-hidden="true"><use xlink:href="/mcapp/images/symbols.svg#down"></use></svg><span class="slds-assistive-text">Show More</span></button><div class="slds-dropdown slds-dropdown_left"><ul class="slds-dropdown__list" role="menu" aria-label="Show More"><li class="slds-dropdown__item" role="presentation"><a href="/dashboard/edit/?lid=274acd92-fa1a-4e81-b55d-ef663a8685c1&eid={0}&rt={1}" class="edit" id="edit0" role="menuitem" tabindex="0"><span class="slds-truncate" title="Edit">Edit</span></a></li></ul></div></div></td></tr><tr><td role="gridcell" colspan="2"><div class="slds-truncate" >Security Review Test</div></td><td role="gridcell"  colspan="2"><div class="slds-truncate" title="https://af-esp.onelink.me/mYu3?pid=Email-SFMC&af_channel=Salesforce Marketing Cloud&is_retargeting=true&c=security_review&af_dp=esp%3A%2F%2Fdeeplink">https://af-esp.onelink.me/mYu3?pid=Email-SFMC&af_channel=Salesforce Marketing Cloud&is_retargeting=true&c=security_review&af_dp=esp%3A%2F%2Fdeeplink</div></td><td role="gridcell"><div class="slds-truncate" >https://af-esp.onelink.me/mYu3</div></td><td role="gridcell"><div class="slds-truncate" >1</div></td><td role="gridcell"><div class="slds-truncate" >?pid=Email-SFMC&af_channel=Salesforce Marketing Cloud&is_retargeting=true&c=security_review</div></td><td role="gridcell"><div class="slds-truncate" >&af_dp=esp%3A%2F%2Fdeeplink</div></td><td role="gridcell"><div class="slds-truncate" >2/10/2020 6:27:08 PM</div></td><td role="gridcell"><div class="slds-truncate" >2/10/2020 6:49:00 PM</div></td><td><div id="onelink-trigger274acd92-fa1a-4e81-b55d-ef663a8685c1" class="slds-dropdown-trigger slds-dropdown-trigger_click"><button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" title="Show More"><svg class="slds-button__icon" aria-hidden="true"><use xlink:href="/mcapp/images/symbols.svg#down"></use></svg><span class="slds-assistive-text">Show More</span></button><div class="slds-dropdown slds-dropdown_left"><ul class="slds-dropdown__list" role="menu" aria-label="Show More"><li class="slds-dropdown__item" role="presentation"><a href="/dashboard/edit/?lid=274acd92-fa1a-4e81-b55d-ef663a8685c1&eid={0}&rt={1}" class="edit" id="edit0" role="menuitem" tabindex="0"><span class="slds-truncate" title="Edit">Edit</span></a></li></ul></div></div></td></tr><table></div>';
            $('#dashboard-table').html(sat);
            console.log(error);
            console.log(errorThrown);
            console.log(jqXHR);
        },
    });

    $('.slds-dropdown-trigger_click').hover(
        function () {
            $(this).addClass('slds-is-open');
            console.log($(this));
        },
        () => {
            console.log($(this));
            const elements = document.getElementsByClassName('slds-is-open');
            // eslint-disable-next-line no-plusplus
            for (let index = 0; index < elements.length; index++) {
                const elementid = elements[index].id;
                $(`#${elementid}`).removeClass('slds-is-open');
            }
        },
    );

    $('.slds-dropdown-trigger_click').on('click', function (e) {
        console.log($(this));
        $(this).addClass('slds-is-open');
    });
    $('.edit').hover(
        () => {
            console.log('.edit');
            // $(this).addClass('slds-is-open');
        },
        function () {
            $(this).parent().removeClass('slds-is-open');
        },
    );
    /* $('.slds-dropdown').hover(
        function () {
            $(this).addClass('slds-is-open');
        },
        function () {
            $(this).removeClass('slds-is-open');
        },
    ); */
    $('#btn-create').on('click', (e) => {
        e.preventDefault();
        console.log($('#eid').val());
        let redirectUrl = `/dashboard/create/?rt=${$('#rt').val()}`;
        redirectUrl += `&eid=${$('#eid').val()}`;
        window.location.href = redirectUrl;
    });

    $('#btn-create').on('click', (e) => {
        e.preventDefault();
    });

    $('.edit').on('click', function (e) {
        e.preventDefault();

        const href = $(this).attr('href');
        let link = href.replace('{0}', $('#eid').val());
        link = link.replace('{1}', $('#rt').val());
        window.location.href = link;
    });
});
