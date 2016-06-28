var ShoppingListItem = function(name, description){
  this.name = name;
  this.description = description;
  this.is_done = false;

  this.check = function(){
    this.is_done = true;
  };

  this.uncheck = function() {
    this.is_done = false;
  };

  this.render = function() {
    return `<li class="completed_${this.is_done}"><span>${this.name}</span>&nbsp;<span>${this.description}</span></li>`;
  };
};