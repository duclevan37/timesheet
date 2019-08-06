

function open_nav(evt, cityName) {
  var i, content, item;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  item = document.getElementsByClassName("item");
  for (i = 0; i < item.length; i++) {
    item[i].className = item[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
 
}


function openNav() {
  
    
      document.getElementById("sideNav").style.transform = "translate(0)";
      document.getElementById("closebtn").style.display="inline";
      document.getElementById("openbtn").style.display="none ";
      document.getElementById("manageProject").style.opacity="0.5";

 
  }
  
  function closeNav() {
    if(window.matchMedia("(max-width:1180px)").matches)
      { document.getElementById("sideNav").style.transform = "translate(-300px)";
      document.getElementById("closebtn").style.display="none";

      document.getElementById("openbtn").style.display="inline";  
      document.getElementById("manageProject").style.opacity="1";
      }
  }
  function search() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('search_item'); 
    let y=document.getElementsByTagName("th");
    
    for (i = 0; i < x.length; i++){
      x[i].style.display="none"; 
    }
    for (i = 0; i < x.length; i++) {  
      for(j=0;j<y.length;j++)
      { y[j]=y[j].innerHTML.toLowerCase()
        if(!x[i].innerHTML.toLowerCase().indexOf(input) && x[i]!=y[j]){
          x[i].style.display="table-cell";  
        }
      }
    } 
}
function open_label(evt, name) {
  var i, content, item;
  content = document.getElementsByClassName("labels");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  item = document.getElementsByClassName("general_1");
  for (i = 0; i < item.length; i++) {
    item[i].className = item[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("openbtn").style.display="inline";
    document.getElementById("sideNav").style.transform = "translate(-300px)";
    document.getElementById("nav_right").style.display="inline-block";

  } else {
    document.getElementById("sideNav").style.transform = "translate(0)";
    document.getElementById("openbtn").style.display="none";
    document.getElementById("closebtn").style.display="none";
    document.getElementById("manageProject").style.opacity="1";
    document.getElementById("nav_right").style.display="none";

  }
}

var x = window.matchMedia("(max-width: 1180px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
