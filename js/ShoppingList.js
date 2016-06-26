var ShoppingList = function() {
  this.items = [];

  this.addItem = function( item ){
    if( item instanceof ShoppingListItem ){
      this.items.push(item);
    } else {
      throw new Error('Error');
    }
  };

  this.removeItem = function ( itemObj ){
    if( this.items.indexOf(itemObj) === -1 || itemObj instanceof ShoppingListItem === false ){
      throw new Error('Error');
    } else if( this.items.indexOf(itemObj) !== -1){
      this.items.splice(this.items.indexOf(itemObj), 1);
    } else if( itemObj === undefined ){
      this.items.pop();
    }
  };
};