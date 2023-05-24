//your JS code here. If required.
let sizeElement=document.createElement("h1");
sizeElement.innerText=`width: ${window.innerWidth} and height:${window.innerHeight}`
document.body.append(sizeElement);

windows.onresize=function() {
	sizeElement.innerText=`width: ${windows.innerWidth} and height:${windows.innerHeight}`
    documet.body.append(sizeElement);
}