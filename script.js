//your JS code here. If required.
let sizeElement=document.createElement("h1");
sizeElement.innerText=`width: ${window.innerWidth} and height:${window.innerHeight}`
document.body.append(sizeElement);

// windows.onresize=function() {
// 	sizeElement.innerText=`width: ${windows.innerWidth} and height:${windows.innerHeight}`
//     documet.body.append(sizeElement);
// }

window.onresize = function() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      console.log("Window width: " + width + "px");
      console.log("Window height: " + height + "px");
