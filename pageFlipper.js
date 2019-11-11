var subpage1 = document.getElementById("subpage1");
var subpage2 = document.getElementById("subpage2");
var subpage3 = document.getElementById("subpage3");


function openSubpage2(){
    var a = document.forms["mturk_form"]["parking-binary-1"].value;
    var b = document.forms["mturk_form"]["wallet-binary-1"].value;
    var c = document.forms["mturk_form"]["walk-binary-1"].value;
    var d = document.forms["mturk_form"]["children-binary-1"].value;
    var e = document.forms["mturk_form"]["house-binary-1"].value;
    var f = document.forms["mturk_form"]["black-binary-1"].value;
    var g = document.forms["mturk_form"]["neighbor-binary-1"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "", e == null || e == "", f == null || f == "", g == null || g == "") {
        alert("Please Fill All Required Field");
        return false;
      }
    console.log(subpage2.style.dispay)
    if(subpage2.style.display === "none"){
        subpage2.style.display = "block";
        subpage1.style.display = "none"
    } else{
        subpage2.style.display === "none";
    }
}

function openSubpage3(){
    var a = document.forms["mturk_form"]["parking-binary-2"].value;
    var b = document.forms["mturk_form"]["wallet-binary-2"].value;
    var c = document.forms["mturk_form"]["walk-binary-2"].value;
    var d = document.forms["mturk_form"]["children-binary-2"].value;
    var e = document.forms["mturk_form"]["house-binary-2"].value;
    var f = document.forms["mturk_form"]["black-binary-2"].value;
    var g = document.forms["mturk_form"]["neighbor-binary-2"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "", e == null || e == "", f == null || f == "", g == null || g == "") {
        alert("Please Fill All Required Field");
        return false;
      }
    console.log(subpage3.style.dispay)
    if(subpage3.style.display === "none"){
        subpage3.style.display = "block";
        subpage2.style.display = "none"; 
    } else{
        subpage3.style.display === "none";
    }   
}

function backSubpage1(){
    console.log(subpage1.style.dispay)
    if(subpage2.style.display === "block"){
        subpage2.style.display = "none";
        subpage1.style.display = "block"
    } else{
        subpage2.style.display === "block";
    }
}

function backSubpage2(){
    console.log(subpage1.style.dispay)
    if(subpage3.style.display === "block"){
        subpage3.style.display = "none";
        subpage2.style.display = "block"
    } else{
        subpage3.style.display === "block";
    }
}