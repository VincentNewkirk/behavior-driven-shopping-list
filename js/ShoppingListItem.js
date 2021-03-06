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

  this.render = function(index) {
    return `<li class="completed_${this.is_done}">
    <span>${this.name}</span>
    <span>${this.description}</span>
    </li><input type="checkbox" class="myCheckbox" onchange="changeCheckedStatus(${index}, this)">
    <button type="button" id="clearButton" onclick="removeItemButtonClicked(${index})">X</button>`;
  };
};