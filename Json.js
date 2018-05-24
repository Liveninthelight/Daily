var apiURL = "https://en.wikipedia.org/w/api.php?callback=?";

$(document).ready(function() {
  $('#searchSubmit').click(function() {
    $("#display-result").empty(); // clear prior search results 
    $.getJSON(apiURL, {
        action: 'query',
        format: 'json',
        inprop: "url",
        formatversion: 2,
        generator: 'search',
        gsrsearch: $("input").val(),
        gsrwhat: "text",
        prop: 'extracts|info',
        exsentences: 3,
        exintro: "",
        explaintext: "",        
        exlimit: 20,
      })
      .success(function(response) {
        console.log(response);
        response.query.pages.forEach(function(resp) {
          $('#display-result').append(
            "<a href='" + resp.fullurl + "' target= '_blank'><div id='result' class='results'><h3>" + resp.title + "</h3><p = class='extract'>" + resp.extract + "</p></div>");
        })
      });
  }); // search
  
  $('#randomPage').click(function() {
    
  }); /
  
 $('#randomSearch').click(function() {
    $("#display-result").empty(); // clear prior search results 
    $("input").val("");
    $.getJSON(apiURL, {
        action: 'query',
        format: 'json',
        inprop: "url",
        formatversion: 2,
        generator: 'random',
        grnlimit: 10,
        grnnamespace: 0,
        prop: 'extracts|info',
        exintro: "",
        
      })
      .success(function(response) {
        console.log(response);        
        response.query.pages.forEach(function(resp) {
            $('#display-result').append(
              "<div id='result' class='results'><h3><a href='" + resp.fullurl + "' target= '_blank'>" + resp.title + "</p></div>");       
        })
      });
    });
*/
  
  $("#input").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#searchSubmit").click();
    }
  });
});


function processResult(apiResult) {
  console.log(apiResult);
  for (var i = 0; i < apiResult.query.search.length; i++) {
    $('#display-result').append(
      
      "<div id='result' class='col-md-8 col-md-2-offset results'><p >" + apiResult.query.search[i].title + "</p><p = class='snippet'>" + apiResult.query.search[i].snippet + "</p></div>"
);
  }
};

