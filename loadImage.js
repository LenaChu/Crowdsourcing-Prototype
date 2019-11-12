var searchParam = new URLSearchParams(window.location.search);
var imageValue1 = searchParam.get("image1");
var imageValue2 = searchParam.get("image2");
document.getElementById("old-large").src = imageValue1;
document.getElementById("new-large").src = imageValue2;
document.getElementById("old-small").src = imageValue1;
document.getElementById("new-small").src = imageValue2;


turkSetAssignmentID();  