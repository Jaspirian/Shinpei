var historyArray = ["young", "middle", "old"];
var familyArray = ["dad", "mom", "shun", "ayame", "mitsuki", "yui", "junpei", "itsuki", "yushio"]

window.onload = setupAvatars();

function setupAvatars() {

	for (i=0; i<historyArray.length; i++) {
		document.getElementById(historyArray[i]).addEventListener("click", expandHistory)
	}

	for (i=0; i<familyArray.length; i++) {
		document.getElementById(familyArray[i]).addEventListener("click", expandFamily)
	}
}

function expandHistory() {
	var elements = document.getElementsByClassName("historyExpand");
	for(i=0; i<elements.length; i++) {
		$(elements[i]).fadeOut();
	}

	for(i=0; i<historyArray.length; i++) {
		if(historyArray[i] != this.id) {$(document.getElementById(historyArray[i])).fadeTo(400, .3);}
		else {$(this).fadeTo(400, 1);}
	}
	
	var string = this.id;
	string = string.concat("History")
	$(document.getElementById(string)).fadeIn();
}

function expandFamily() {
	var elements = document.getElementsByClassName("familyExpand");
	for(i=0; i<elements.length; i++) {
		$(elements[i]).fadeOut();
	}

	for(i=0; i<familyArray.length; i++) {
		if(familyArray[i] != this.id) {$(document.getElementById(familyArray[i])).fadeTo(400, .3);}
		else {$(this).fadeTo(400, 1);}
	}

	var string = this.id;
	string = string.concat("Family")
	$(document.getElementById(string)).fadeIn();
}