var menu_list_array = [
    "Veg Margherita Pizza",
    "Chicken Tandoori Pizza", 
    "Veggie Supreme Pizza",
    "Paneer Tikka Pizza",
    "Veggie Deluxe Pizza",
    "Veg Extravaganza Pizza",
];
var i;

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>";
    menu_list_array.sort();
    for(i=0; i<menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>';
    }
    htmldata = htmldata + '</ol>';
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    menu_list_array.sort();
    htmldata = "<section class='cards'>";
    for(i=0; i<menu_list_array.length; i++) {
        htmldata = htmldata + "<div class='card'>" + '<img src="images\img_pizza.png">' + menu_list_array[i]
    }
}

function add_topping(){
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}