// var page = require('webpage').create(); 
// page.onAlert = function(msg) { 
//    console.log(msg); 
// } 
// page.open('http://www.google.co.jp/search?q=+frozencast.com+archives+apple', function(status) { 
//    var element = page.evaluate(function() { 
//       return document.querySelector("h3.r a"); 
//    }); 
//    page.sendEvent('click', 220, 220, 'left'); 
//    console.log('element is ' + element);
// }); 



// var page = require('webpage').create(); 
// page.onAlert = function(msg) { 
//    console.log(msg); 
// } 
// page.open('https://t.co/mhCTu1mWpB', function(status) { 
//    var element = page.evaluate(function() { 
//       return document.querySelector("h6 a"); 
//    }); 
//    page.sendEvent('click', element.offsetLeft, element.offsetTop, 'left');
//    console.log('element is ' + element);
// }); 


page.open('https://t.co/mhCTu1mWpB', function () {

function ScrollForAjax () {

    scrollintervals = 50;
    scrollmaxtime = 1000;

    if(typeof(scrolltime)=="undefined"){
        scrolltime = 0;
    }

    scrolldocheight1 = $(iframeselector).contents().find("body").height();

    $("body").scrollTop(scrolldocheight1);
    setTimeout(function(){

        scrolldocheight2 = $("body").height();

        if(scrolltime===scrollmaxtime || scrolltime>scrollmaxtime){
            scrolltime = 0;
            $("body").scrollTop(0);
            ScrapeCurrentPage(iframeselector);
        }

        else if(scrolldocheight2>scrolldocheight1){
            scrolltime = 0;
            ScrollForAjax (iframeselector);
        }

        else if(scrolldocheight1>=scrolldocheight2){
            ScrollForAjax (iframeselector);
        }

    },scrollintervals);

    scrolltime += scrollintervals;
}