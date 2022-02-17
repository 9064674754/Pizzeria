menu_list_array = ["Peppy Paneer","Mexican Green Wave","Deluxe Veggie","Non Veg Supreme","Chicken Dominator","PEPPER BARBECUE & ONION"];
function getmenu(){
menu_list_array.sort();
var htmldata;
htmldata="<ol class='menulist'>";

for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>';
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div id="card">'+'<img src="pizzaimg.png" style="width: 100px; height:80px; margin-left:300px;"/>'+menu_list_array[i]+'</div>';
}

htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
document.getElementById("pot").innerHTML = "Refresh";
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    document.getElementById("eategg").innerHTML="Submitted Succesfully."
    setTimeout(function() {
        document.getElementById("eategg").innerHTML=""
    }, 1000);
    
}
function egging(){
    document.getElementsByClassName("block2").style = 'display:none';
    
}
