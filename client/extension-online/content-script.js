chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  chrome.browserAction.setBadgeText({
    text: "ON"
  });
});

$("#logout").on("click", (e)=>{
  e.preventDefault()
  const options = {
    'interactive': true,
    'url': 'https://accounts.google.com/logout'
  }
  chrome.identity.launchWebAuthFlow(options, function() {});
    chrome.browserAction.setBadgeText({
      text: "OFF"
    });
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
          // const tags = $('#tags option:selected').text();
          const note = $("#note").val().trim();
          const date = Date.now();
          const userArticle = {email, title, url, note, date};
        $.ajax({
          url: "https://rembr-app.herokuapp.com/rembrTab", 
          // url: "http://localhost:3000/rembrTab",
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

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  console.log("Got message from background page: " + msg);
});
