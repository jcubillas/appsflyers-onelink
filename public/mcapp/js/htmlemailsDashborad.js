function GetHtmlEmails(accessToken) {
  // este metodo devuelve todos los emails html paste
  var postData = JSON.stringify({ "accessToken": accessToken })
  $.ajax({
    "url": "/sfmc/GetContentBuilderEmails",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": postData,
  }).done(function (response) {
    // para acceder al codigo html tenes que hacer object.views.html.content         
    console.log(response);
  });
}


function updateEmail(accessToken, emailId, EmailObject) {
  var postData = JSON.stringify({
    "accessToken": accessToken,
    "id": emailId,
    "email": EmailObject
  })
  // Nota: Lo probe pasando el objeto completo  que te devuelve el metodo getemails o get email by id y editando el html.
  // por ahi se pueden pasar menos valores, pero habria que probar.

  $.ajax({
    "url": "/sfmc/UpdateEmail",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": postData
  }).done(function (response) {
    console.log(response);
  });
}

function GetHtmlEmailByID(accessToken, emailId) {
  var postData = JSON.stringify({
    "accessToken": accessToken,
    "id": emailId
  })

  $.ajax({
    "url": "/sfmc/GetEmailByID",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": postData,
  }).done(function (response) {
    console.log(response);
  });
}

function GetAllContentBuilderAssets(accessToken) {
  var postData = JSON.stringify({ "accessToken": accessToken })

  $.ajax({
    "url": "/sfmc/GetAllContentBuilderAssets",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": postData,
  }).done(function (response) {
    console.log(response);
  });
}


function getLinks(rawHTML) {
  var rawHTML = '<!DOCTYPE html><html><head> <title></title> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge">  <meta name="viewport" content="width=device-width,initial-scale=1"> <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> <link rel="stylesheet" href="/mcapp/css/salesforce-lightning-design-system/assets/styles/salesforce-lightning-design-system.min.css"> <link href="/mcapp/css/create-style.css" rel="stylesheet" type="text/css"> <script type="text/javascript" src="/mcapp/js/jquery.min.js"></script> <style>::-webkit-input-placeholder{/* Chrome/Opera/Safari */ font-size: 13px; font-family: museo_sans300;}::-moz-placeholder{/* Firefox 19+ */ font-size: 13px; font-family: museo_sans300;}:-ms-input-placeholder{/* IE 10+ */ font-size: 13px; font-family: museo_sans300;}:-moz-placeholder{/* Firefox 18- */ font-size: 13px; font-family: museo_sans300;}#rules{margin-left: 30px;}#btn-addParameter{margin-left: 60px;}.rules-container>.af-button:before{content: ""; position: absolute; top: 50%; left: -1px; transform: translate(-100%, -50%); width: 22px; border: none; border-top: 2px solid #e8e8e8; z-index: 0;}.af-core.input-item .input-container .input-inner input, .af-core.input-item .input-container .input-inner textarea{/* font-family: museo_sans300; */ font-weight: 300; font-size: 13px; height: 36px; border-radius: 5px; border: 1px solid #7e848c; line-height: 1.14; color: #3f4a56; padding: 0 10px; font-family: museo_sans300;}.Select-value-label, #btn-addLink, #cancel, .af-button-text{font-family: museo_sans300; font-size: 13px;}.slds-form-element__label{font-family: museo_sans300; font-size: 15px;}.slds-form-element{width: 80%; padding-left: 6%; padding-top: 1%;}.hide{display: none !important;}.show{display: block !important;}.slds-box{background-color:pink;}.c3 svg, .datepicker-days, .dc-chart .tick text, .navbar-search .search-query, .panel-default .panel-heading, body, button, input, select, textarea{background-color: #fff; font-family: museo_sans300 !important; font-weight: 400; font-style: normal; color: #707070;}</style></head><body> <div> <a href="www.google.com"> google </a> <a href="www.facebook.com"> facebook </a> </div></body></html>';
  var doc = document.createElement("html");
  doc.innerHTML = rawHTML;
  var links = doc.getElementsByTagName("a")
  console.log(links);
  var urls = [];

  for (var i = 0; i < links.length; i++) {
    urls.push(links[i].getAttribute("href"));
  }
  console.log(urls);
}


function replaceUrlTOkens(token){
  $('#htmlemailsLink')[0].href = '/htmlemails/home?rt=' + token + '&eid=' + $('#eid').val();
  $('#DashboardLink')[0].href = '/Dashboard/home?rt=' + token + '&eid=' + $('#eid').val();    
}

function replaceLinks(rawHTML) {
  var rawHTML = '<!DOCTYPE html><html><head> <title></title> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge">  <meta name="viewport" content="width=device-width,initial-scale=1"> <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> <link rel="stylesheet" href="/mcapp/css/salesforce-lightning-design-system/assets/styles/salesforce-lightning-design-system.min.css"> <link href="/mcapp/css/create-style.css" rel="stylesheet" type="text/css"> <script type="text/javascript" src="/mcapp/js/jquery.min.js"></script> <style>::-webkit-input-placeholder{/* Chrome/Opera/Safari */ font-size: 13px; font-family: museo_sans300;}::-moz-placeholder{/* Firefox 19+ */ font-size: 13px; font-family: museo_sans300;}:-ms-input-placeholder{/* IE 10+ */ font-size: 13px; font-family: museo_sans300;}:-moz-placeholder{/* Firefox 18- */ font-size: 13px; font-family: museo_sans300;}#rules{margin-left: 30px;}#btn-addParameter{margin-left: 60px;}.rules-container>.af-button:before{content: ""; position: absolute; top: 50%; left: -1px; transform: translate(-100%, -50%); width: 22px; border: none; border-top: 2px solid #e8e8e8; z-index: 0;}.af-core.input-item .input-container .input-inner input, .af-core.input-item .input-container .input-inner textarea{/* font-family: museo_sans300; */ font-weight: 300; font-size: 13px; height: 36px; border-radius: 5px; border: 1px solid #7e848c; line-height: 1.14; color: #3f4a56; padding: 0 10px; font-family: museo_sans300;}.Select-value-label, #btn-addLink, #cancel, .af-button-text{font-family: museo_sans300; font-size: 13px;}.slds-form-element__label{font-family: museo_sans300; font-size: 15px;}.slds-form-element{width: 80%; padding-left: 6%; padding-top: 1%;}.hide{display: none !important;}.show{display: block !important;}.slds-box{background-color:pink;}.c3 svg, .datepicker-days, .dc-chart .tick text, .navbar-search .search-query, .panel-default .panel-heading, body, button, input, select, textarea{background-color: #fff; font-family: museo_sans300 !important; font-weight: 400; font-style: normal; color: #707070;}</style></head><body> <div> <a href="www.google.com"> google </a> <a href="www.facebook.com"> facebook </a> </div></body></html>';
  var doc = document.createElement("html");
  doc.innerHTML = rawHTML;
  var links = doc.getElementsByTagName("a")
  console.log(links);
  var urls = [];

  for (var i = 0; i < links.length; i++) {
    urls.push(links[i].getAttribute("href"));
  }
  console.log(urls);
}

/* eslint-disable no-undef */
function getUrlParameters() {
  const url = new URL(window.location.href);
  const urlParams = {
    refresh_token: url.searchParams.get('rt'),
    enterpriseId: url.searchParams.get('eid'),
  };
  return urlParams;
}


function buildDashboard(links, from, page) {
  let table = '<div class="slds-lookup" data-select="multi" data-scope="single" data-typeahead="true">';
  table += '<table class="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered slds-table_fixed-layout" role="grid" >';

  table += '<tr>';

  table += '<td class="header-dashboard" role="gridcell" scope="col" colspan="2"><b>OneLink Name</b></td>';
  table += '<td class="header-dashboard" role="gridcell" scope="col" colspan="2"><b>Campaign</b></td>';
  table += '<td class="header-dashboard" role="gridcell" scope="col" colspan="3"><b>Full URL</b></td>';
  table += '<td class="header-dashboard" role="gridcell" scope="col" style="text-align:center;"><b># of Contents</b></td>';
  table += '<td class="header-dashboard" role="gridcell" scope="col" ><b>Created</b></td>';
  table += '<td class="header-dashboard" role="gridcell" scope="col" ><b>Modified</b></td>';
  table += '<td class="header-dashboard" role="gridcell" scope="col" ></td>';
  table += '</tr>';

  if (links !== undefined) {
    links.sort((a, b) => ((new Date(a.Modified) < new Date(b.Modified)) ? 1 : ((new Date(b.Modified) < new Date(a.Modified)) ? -1 : 0)));
    if (from == "init" || page == 1) {
      links = links.splice(0, 15);
      $("#currentDashboard").val(15);
    }
    else {
      var currentDashboard = $("#currentDashboard").val();
      links = links.splice(currentDashboard, 15);
      $("#currentDashboard").val(currentDashboard + 15);
    }

    for (let index = 0; index < links.length; index++) {
      const element = links[index];
      var Campaign = getCampaign(element);

      table += '<tr>';

      table += `<td role="gridcell" colspan="2"><div class="slds-truncate" >${element.LinkName}</div></td>`;
      table += `<td role="gridcell" colspan="2"><div class="slds-truncate" >${Campaign}</div></td>`;
      table += `<td role="gridcell" colspan="3"><div class="slds-truncate" title="${element.FullURL}">${element.FullURL}</div></td>`;
      table += `<td role="gridcell"><div class="slds-truncate" style="text-align:center;">${element.ContentsCount}</div></td>`;
      table += `<td role="gridcell"><div class="slds-truncate" >${element.Created}</div></td>`;
      table += `<td role="gridcell"><div class="slds-truncate" >${element.Modified}</div></td>`;
      table += '<td>';
      table += `<div id="onelink-trigger${element.LinkID}" class="slds-dropdown-trigger slds-dropdown-trigger_click" style="padding-left:50%;">`;
      table += '<button class="slds-button slds-button_icon slds-button_icon-border-filled" >';
      table += '<svg class="slds-button__icon" aria-hidden="true">';
      table += '<use xlink:href="/mcapp/images/symbols.svg#down">';
      table += '</use>';
      table += '</svg>';
      table += '</button>';
      table += '<div class="slds-dropdown slds-dropdown_left" style="margin-top: -1px!important">';
      table += '<ul class="slds-dropdown__list" role="menu" >';
      table += '<li class="slds-dropdown__item" role="presentation">';
      table += `<a href="/dashboard/edit/?lid=${element.LinkID}&eid={0}&rt={1}" class="edit" id="edit${index}" role="menuitem" tabindex="0">`;
      table += '<span class="slds-truncate" title="Edit">Edit</span>';
      table += '</a></li>';
      table += '<li class="slds-dropdown__item" role="presentation">';
      table += `<a href="#" onclick="Duplicate(${element})" class="Duplicate" id="Duplicate${index}" role="menuitem" tabindex="0">`;
      table += '<span class="slds-truncate" title="Duplicate">Duplicate</span>';
      table += '</a></li>';
      table += '</ul>';
      table += '</div>';
      table += '</div>';
      table += '</div>';
      table += '</td>';
      table += '</tr>';
    }
  }
  table += '</table>';
  table += '</div>';

  $('#dashboard-table').empty();
  $('#dashboard-table').html(table);

  ready();

  for (let index = 0; index < links.length; index++) {
    const element = links[index];
    document.getElementById(`Duplicate${index}`).addEventListener("click", function (e) {
      e.preventDefault();
      Duplicate(element);
    });
  }
}

function buildPaginator(allLinks) {
  const params = {
    refresh_token: $('#rt').val(),
    enterpriseId: $('#eid').val()
  };
  var totalPages = Math.ceil(allLinks.length / 15);
  if (totalPages == 0) {
    totalPages++;
  }

  $('#pagination-demo').empty();

  $('#pagination-demo').removeData("twbs-pagination");

  $('#pagination-demo').unbind("page")

  $('#pagination-demo').twbsPagination({
    totalPages: totalPages,
    visiblePages: 5,
    onPageClick: function (event, page) {
      loadHtmlEmails(params, "paginator", page);
    }
  });
}

function loadHtmlEmails(urlParams, from, page) {
 
/*
  var inp = $('#lookup').val();
  if(from == "filtered"){
      urlParams = {
          refresh_token: $('#rt').val(),
          enterpriseId: $('#eid').val()
      };
  }*/
  var postData = JSON.stringify({ "accessToken": $("#rt").val() })
  console.log(postData);
  $.ajax({
    "url": "/sfmc/GetContentBuilderEmails",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": postData,
  }).done(function (response) {
    // para acceder al codigo html tenes que hacer object.views.html.content         
    console.log(response);
  });

}

function ready() {
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
        $('#' + elementid).removeClass('slds-is-open');
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



  $('.edit').on('click', function (e) {
    e.preventDefault();

    const href = $(this).attr('href');
    let link = href.replace('{0}', $('#eid').val());
    link = link.replace('{1}', $('#rt').val());
    window.location.href = link;
  });
}

$(document).ready(() => {
  const urlParams = getUrlParameters();
  $('#rt').val(urlParams.refresh_token);
  $('#eid').val(urlParams.enterpriseId);

  replaceUrlTOkens( $('#rt').val());
  loadHtmlEmails(urlParams, "init", 1);

  ready();
});
