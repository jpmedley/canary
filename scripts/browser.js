var getUserAgent = function() {
  var agentDetails = navigator.userAgent;
  agentDetails = agentDetails.replace(")", ")\n");
  return agentDetails;
};

var getUserAgents = function() {
  return getUserAgent().split("\n");
}; 
  

//document.getElementById("infoList").value = getUserAgent();

var infobox = document.getElementById("infobox");
var agents = getUserAgents();
var agentCount = agents.length;
for (var i=0; i < agentCount; i++) {
  var newTag = document.createElement("p");
  var newPara = document.createTextNode(agents[i]);
  newTag.appendChild(newPara);
  infobox.appendChild(newTag);
}

var getHTTPHeader = function() {
  var req = new XMLHttpRequest();
  req.open('GET', document.location, false);
  req.send();
  return req.getAllResponseHeaders();
}

document.getElementById("infoList").value = getHTTPHeader();
  
