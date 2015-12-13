// Listens for hide.js to send the showIcon action. Which happens on the allowed pages since hide.js is called on page load.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {               
	if (request.action == "showIcon") {
      chrome.pageAction.show(sender.tab.id);
   }
});