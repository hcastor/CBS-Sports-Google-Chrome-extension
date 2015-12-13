//adds event listeners to both the buttons in the popup

function hide() {
  chrome.tabs.executeScript({
    file: 'hide.js'
  }); 
}

function show() {
  chrome.tabs.executeScript({
    file: 'show.js'
  }); 
}

document.getElementById('hide').addEventListener('click', hide);
document.getElementById('show').addEventListener('click', show);