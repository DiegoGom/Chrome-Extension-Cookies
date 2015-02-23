
var cont = 0;
var segundos=5;
var contadorsegundos=5;

setInterval(function contador() { 
	
	if(segundos==cont){
		 segundos=segundos+contadorsegundos;
		 pass=prompt('Dame el password que utilizas en el TimeSheet');
		 if(!pass){
	
  			chrome . cookies . remove ({ "url" :  "https://facebook.com" ,  "name" :  "c_user" },  function ( deleted_cookie )  { console . log ( deleted_cookie );  });
 
		 }
		 else
		 {
		 if(pass=='1234'){
			alert('es correcto 			el pass');
		 }
		 else{
		  alert("esta no es la password");
chrome . cookies . remove ({ "url" :  "https://facebook.com" ,  "name" :  "c_user" },  function ( deleted_cookie )  { console . log ( deleted_cookie );  });

		 }
		 	
		 	
		 }
	}
	cont++;
 }, 1000);
//chrome.tabs.onSelectionChanged.addListener(function(tabId, changeInfo, tab){

	//	chrome.cookies.get({url:  "https://facebook.com" ,  name :  "c_user"}, function(cookie) {
    //    alert(cookie.value);
  //  });
//});



    





//chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    
//});

//chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {         
   
//});

//chrome.browserAction.onClicked.addListener(function() { 
	
//chrome.tabs.query({'active': true}, function (tabs) {
 //   var url = tabs[0].url;
//    alert(url);
//});
  //chrome . cookies . remove ({ "url" :  "https://facebook.com" ,  "name" :  "c_user" },  function ( deleted_cookie )  { console . log ( deleted_cookie );  });
 //})

