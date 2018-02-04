// chrome.runtime.sendMessage({"status": "isLoggedIn"}, function(response) {
//   console.log("Background page responded: " + response);
// });


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//   console.log(tabs);
//   // chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
// });
// chrome.identity.getRedirectURL(string path)

// chrome.identity.launchWebAuthFlow({url: "http://localhost:3001/login", 'interactive': true}, function (callback) {
//     console.log(callback);
//   })
  
chrome.identity.getAuthToken({'interactive': true}, function(token) {
  if(!token){
  //   chrome.identity.launchWebAuthFlow({url: "http://localhost:3001/login", 'interactive': true}, function (callback) {
  //   console.log(callback);
  // })
  } 
});

chrome.identity.getProfileUserInfo(function (userInfo){
  if (!userInfo) {
    // chrome.identity.getAuthToken({ 'interactive': true}, function(token) {
    //   if(!token){


      chrome.identity.getAuthToken({'interactive': true}, function(token) {
        if(!token){
        //   chrome.identity.launchWebAuthFlow({url: "http://localhost:3001/login", 'interactive': true}, function (callback) {
        //   console.log(callback);
        // })
        } 
      });



      //   chrome.identity.launchWebAuthFlow({url: "http://localhost:3001/login", 'interactive': true}, function (callback) {
      //   // console.log(callback);
      //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ 
      //     location.replace(tabs[0].url);
      //   });
      // })
    //   } 
    // });
  }
})

$("#submit-article").on("click", (e)=>{
  e.preventDefault();

  chrome.identity.getProfileUserInfo(function (userInfo){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      const email = userInfo.email;
      const title = $("#title").val().trim();  
      const url = tabs[0].url;  
      const tags = $('#tags option:selected').text();
      const note = $("#note").val().trim();
      const date = Date.now();
      const userArticle = {email, title, url, tags, note, date};
    $.ajax({
      url: "http://localhost:3001/login", 
      type: "POST",
      data:  userArticle,
      success: function(data) {
        console.log(data);
        console.log("SUCCESS");  
      },
      fail: function(error){
        console.log(error);
      }
  }); 
  })
    });
});




//CLIENT ID 610105421590-cmlmi74luvqehuok9pbd8bfmeacf3qn5.apps.googleusercontent.com
// CLIENT SECRET skOyVGy8lsAhaXDQXfIlRi6t


// function postArticle(data){
//   var dir = 'http://localhost:3000/login';
//   var request = new XMLHttpRequest();

//   var dataURL = `title=${data.title}&tags=${data.tags}&note=${data.note}`;
//   console.log(dataURL);
//   request.open("POST", dir, true);
//   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   request.setRequestHeader("Content-length", dataURL.length);
//   request.setRequestHeader("Connection", "close");

//   request.onload = function() {
//     if (request.status === 200) {
//       console.log("STATUS 200");
//         // code if everything went fine
//         // request.responseText for printing echoes
//     } else {
//         // code if otherwise
//         console.log("Something went wrong!");
//     }
//   };

//   // sending data here
//   request.send(dataURL);
// }
// postArticle(userArticle);

// chrome.runtime.sendMessage({
//   method: 'POST',
//   action: 'xhttp',
//   url: 'http://localhost:3001/login',
//   data: userArticle
// }, function(reponseText) {
//   alert(responseText);
// }); 



chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  console.log("Got message from background page: " + msg);
});
