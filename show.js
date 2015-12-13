//doesnt have to wait like hide.js since the page will be loaded already.

showPercents();

function showPercents() {
	var div = document.getElementById('makePicksContainer');
	var spans = div.getElementsByTagName('span');
	for(var i=0;i<spans.length;i++){
		if(spans[i].innerText.indexOf('%') > -1){
			spans[i].style.display = 'inline-block';
		}
	}
}