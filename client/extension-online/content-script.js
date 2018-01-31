
$("#submit-article").on("click", (e)=>{
  e.preventDefault();
  const title = $("#title").val().trim();
  const tags = $('#tags option:selected').text();
  const note = $("#note").val().trim();
  const userArticle = {title, tags, note}
  console.log(userArticle);
  chrome.runtime.sendMessage({"message": "article"}, function(response) {
    log("Background page responded: " + response);
  });
  chrome.runtime.sendMessage({delayedResponse: true}, function(response) {
    log("Background page responded: delayed ? " + response);
  });
});

function addButton(name, cb) {
  var a = document.createElement("button");
  a.innerText = name;
  a.onclick = cb;
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(a);
}

function log(str) {
  console.log(str);
  logDiv.innerHTML += str + "<br>";
}

// addButton("Send message with delayed response", function() {
//   chrome.runtime.sendMessage({delayedResponse: true}, function(response) {
//     log("Background page responded: " + response);
//   });
// });

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  log("Got message from background page: " + msg);
});

var logDiv = document.createElement("div");
logDiv.style.border = "1px dashed black";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(logDiv);
