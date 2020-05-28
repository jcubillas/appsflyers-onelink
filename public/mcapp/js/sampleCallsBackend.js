function GetHtmlEmails(accessToken){
     // este metodo devuelve todos los emails html paste
      var postData = JSON.stringify({"accessToken":accessToken})
      $.ajax({
        "url": "/sfmc/GetContentBuilderEmails",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "data": postData ,
      }).done(function (response) {
          // para acceder al codigo html tenes que hacer object.views.html.content         
        console.log(response);
      });
}


function updateEmail(accessToken,emailId, EmailObject){
    var postData = JSON.stringify({"accessToken":accessToken,
                                    "id":emailId,
                                    "email":EmailObject})
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

function GetHtmlEmailByID(accessToken,emailId){
    var postData = JSON.stringify({"accessToken":accessToken,
                                    "id":emailId})
         
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

function GetAllContentBuilderAssets(accessToken){
    var postData = JSON.stringify({"accessToken":accessToken})
      
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