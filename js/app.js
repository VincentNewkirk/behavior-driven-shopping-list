window.onload = function(){
  var appList = new ShoppingList();
  var divContent = document.getElementById('content')

  function add_to_shopping_list(event){
    var itemName = document.getElementById('title').value;
    var itemDesc = document.getElementById('description').value;
    var new_shopping_list_item = new ShoppingListItem(itemName, itemDesc);
    appList.addItem(new_shopping_list_item);
    divContent.innerHTML = appList.render();
    event.preventDefault();
  }
document.getElementById('add_shopping_list_item_button').addEventListener('click', add_to_shopping_list);
};
