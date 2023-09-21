
var secondsToWaitAfterPageLoaded = 1;
var couponValue = 500;


window.onload = function () { 
             doWork(); 
		};



function doWork(){
	    console.clear();
		
		var catContainers = document.getElementsByClassName('sport-category-container'); // all sport categories array		

		for (var i = 0; i < catContainers.length; i++) {
			var header = catContainers[i].getElementsByClassName('sport-category-header')[0] // get header	

              if (!header){
				  continue;
			  }			
			  
			var title = header.getElementsByClassName('sport-category-label')[0].innerText;
			
			var sportItems = catContainers[i].getElementsByClassName('category-container collapsed');			
			var eventsCount = sportItems.length;
			
			console.log(title + ' - ' + eventsCount); 
		}
		
		setTimeout(timeOutWork(catContainers), secondsToWaitAfterPageLoaded*1000);
}

function timeOutWork(catContainers){
	
	debugger;
	
	var randomIndex = random(0, catContainers.length);
	var randomContainer = catContainers[randomIndex];
	debugger;
	var catContainers = randomContainer.getElementsByClassName('category-container');
	
	var randomHeaderIndex = random(0, catContainers.length);
	
	var collapseButton = catContainers[randomHeaderIndex].getElementsByClassName('icon-collapse');
	
	//var collapseButton = randomHeader.getElementsByClassName('icon-collapse');
	
	debugger;
	
	if (collapseButton){
		collapseButton.click()
	}	
}

function random(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}