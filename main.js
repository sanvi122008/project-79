menu_list_array=["chicken Tandoori pizza",
                 "Veg supreme pizza",
                 "Panner Tikka pizza",
                 "Corn cheese burst pizza",
                                           ];     

 function getmenu()  {
 var htmldata;
  htmldata ="<ol class='menulist'>"    
 menu_list_array.sort() ;
for(var i=0;i<menu_list_array.lenght;i++){
   htmldata=htmldata+ '<li>'+menu_list_array[i] + '</li>'

htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
 }
 }

function add_item(){
var htmldata;
var item-document.getElementById("add_item").Value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='card'>"
for(var i=0;i<menu_list_array.lenght;i++){
    htmldata=htmldata+'<div class="card">'+'<img src="italian-pizzeria-interior-banner-cartoon-style_">
}