//Easiest way I could find to show the extension icon only on the page needed. 
//Since this script gets called at page load, it shows then. 
//But if someone clicks hide % in the popup.html, this will be called again. Doesnt hurt anything but just unnecessary
chrome.runtime.sendMessage({action: "showIcon"}, function(response) {});

hidePercents();

function hidePercents() {
	//Looks to see if the makePicksContainer has loaded, if not it calls itself again, until that element as loaded.
	//Then it sets the span elemets containing % to display: none
	var div = document.getElementById('makePicksContainer');
	if (div){
		var spans = div.getElementsByTagName('span');
		for(var i=0;i<spans.length;i++){
			if(spans[i].innerText.indexOf('%') > -1){
				spans[i].style.display = 'none';
			}
		}
	}
	else{
		setTimeout(hidePercents, 0);
	}
}