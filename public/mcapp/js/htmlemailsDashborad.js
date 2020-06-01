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