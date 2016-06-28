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

    if( itemObj === undefined ) {
      if( this.items.length > 0 ){
        this.items.pop();
      }
    } else if ( itemObj instanceof ShoppingListItem === false || this.items.indexOf(itemObj) === -1){
      throw new Error('Error');
    } else if ( this.items.indexOf( itemObj ) !== -1 && itemObj instanceof ShoppingListItem ){
      this.items.splice(this.items.indexOf(itemObj), 1);
    }
  };

  this.render = function(){
    var theString = '';
    for(var i = 0; i < this.items.length; i ++ ){
      theString += this.items[i].render(i);
    }
    return '<ul>' + theString + '</ul>';
  };
};