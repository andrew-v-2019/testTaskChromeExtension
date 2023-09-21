
var secondsToWaitAfterPageLoaded = 1;
var couponValue = 500;

window.onload = function () { 
             doWork(); 
		};



function doWork(){
	    console.clear();
		var contentHolder = document.getElementsByClassName('live__events-block-c0d3b3');
		var itemHolder = contentHolder[0].getElementsByClassName('live__sport-name-e953fd');
		var eventBlocks = contentHolder[0].getElementsByClassName('live__events-bc4f20');

		for (var i = 0; i < itemHolder.length; i++) {
			var title = itemHolder[i].innerText;
			
			var eventsCount = eventBlocks[i].getElementsByClassName('bui-event-row-9eed4e').length;
			
			console.log(title + ' - ' + eventsCount); 
		}
		
		setTimeout(timeOutWork, secondsToWaitAfterPageLoaded*1000);
}

function timeOutWork(){
	var removeTicketButton = document.getElementsByClassName('betslip__bar-btn_remove-all-da531b')[0];
	removeTicketButton.click();
	
	var koefs = document.getElementsByClassName('bui-outcome__value-8ef10c');
	var idx = random(0, koefs.length);
	koefs[idx].click();
	
	var input = document.getElementsByClassName('betslip__input-8b11e8')[0];
	input.value = couponValue;
}

function random(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}