var Hacks = (function() {
	'use strict';

	function _addVideo() {
		console.log("Adding video.");
		var newVid = document.createElement("video");
		var vidSrc = document.createAttribute("src");
		vidSrc.value = "https://www.youtube.com/embed/MvKEomoiKBA?rel=0";
		newVid.setAttributeNode(vidSrc);

		//var docBody = document.getElementById("body");
		//docBody.appendChild(newVide);
		document.body.innerHTML += newVid;
	}

	return {
		addVideo: _addVideo
	};
})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Hacks;
}