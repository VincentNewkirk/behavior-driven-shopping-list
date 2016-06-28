var appList = new ShoppingList();
var divContent = document.getElementById('content');

function add_to_shopping_list(event){
  var itemName = document.getElementById('title').value;
  var itemDesc = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(itemName, itemDesc);
  event.preventDefault();

  appList.addItem(new_shopping_list_item);
  divContent.innerHTML = appList.render();
}
document.getElementById('add_shopping_list_item_button').addEventListener('click', add_to_shopping_list);

function changeCheckedStatus(idx, checkbox){
    if( checkbox.checked ){
      appList.items[idx].check();
  } else {
    appList.items[idx].uncheck();
  }
}

