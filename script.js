
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
    document.getElementById("sideNav").style.width = "300px";
    document.getElementById("closebtn").style.display="inline";
       document.getElementById("openbtn").style.display="none ";
       
  }
  
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
   document.getElementById("closebtn").style.display="none";

  document.getElementById("openbtn").style.display="inline";  
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