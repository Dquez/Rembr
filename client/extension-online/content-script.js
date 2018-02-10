chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  // Use the token.
});

$("#logout").on("click", (e)=>{
  chrome.identity.getAuthToken({'interactive': true}, function(token) {
    chrome.identity.removeCachedAuthToken({"token" : token}, (function(){}));
  })
})

$("#getTabs").on("click", (e)=>{
  e.preventDefault();
  chrome.tabs.query({"currentWindow" : true}, function(tabs){
    console.log(tabs);
    let tabsDiv = $("#tabsDiv");
    if(tabsDiv.children().length < 1) {
      tabsDiv.addClass("form-group");
      tabsDiv.append(`<label class='control-label col-sm-2' for='tabs'>Tabs</label>
                        <div class='col-sm-10'>
                          <select id='tabs' name='tabs' class='form-control'>
                        ${tabs.map((tab, i)=> {
                          if (i === 0) {
                            return `<option default selected disabled value='Placeholder'>Select one of the tabs from the list</option>`
                          }
                          return `<option data-id=${tab.id} data-url=${tab.url} value=${tab.title}>${tab.title}</option>`
                        })}
                          </select>
                        </div>`
                        );
         
    }
    else {
      tabsDiv.empty();
    }
    // console.log($('#tabs option:selected').text());
  })
})

$("#submit-article").on("click", (e)=>{
  e.preventDefault();

    chrome.identity.getProfileUserInfo(function (userInfo){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

          let url = null;
          // If statement to determine whether or not the user selected one of the tabs from the list of tabs.
          if ($('#tabs option:selected').text() !== "Select one of the tabs from the list") {
            url = $('#tabs option:selected').data("url");
          }
          const email = userInfo.email;
          const title = $("#title").val().trim(); 
          // if they selected a tab from the list, it will be chosen, else the current tab is chosen. 
          url = url || tabs[0].url; 
          const tags = $('#tags option:selected').text();
          const note = $("#note").val().trim();
          const date = Date.now();
          const userArticle = {email, title, url, tags, note, date};
        $.ajax({
          url: "https://rembr-app.herokuapp.com/rembrTab", 
          type: "POST",
          data:  userArticle,
          success: function(data) {
            console.log(data);
            if(url !== tabs[0].url) {
              chrome.tabs.remove($('#tabs option:selected').data("id"), function (){
                alert(`Successfully removed ${$('#tabs option:selected').text()}`)
              })
            }
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
// dgjUPFpS-KWU9WsaQ-yK0CjEgrA4KxsvGa42a-qPP1WsqUe74VXuy66aWLLf4Sad

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
