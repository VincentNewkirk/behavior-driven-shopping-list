// var expect = chai.expect;
// var should = chai.should();

describe('ShoppingListItem', function() {
  var testItem;

  beforeEach( function(){
    testItem = new ShoppingListItem('Curry', 'Dinner for tomorrow night');
  });

  it('Should be a class constructor', function(){
    expect(ShoppingListItem).to.exist;
    testItem.should.be.an.instanceOf(ShoppingListItem);
  });

  //PROPERTIES
  it('Should have a name property', function(){
    expect(testItem).to.have.property('name');
  });
  it('Should have a description property', function(){
    expect(testItem).to.have.property('description');
  });
  it('Should have an is_done property', function(){
    expect(testItem).to.have.property('is_done');
  });
  it('Should accept 2 arguments; name and description', function(){
    testItem.name.should.equal('Curry');
    testItem.description.should.equal('Dinner for tomorrow night');
  });

  //METHODS
  describe('"check"', function () {
  it('Should have a method named "check"', function(){
    testItem.should.have.property('check');
    testItem.check.should.be.a('function');
  });
  it('Should set "is_done" property to true', function(){
    testItem.is_done.should.be.false;
    testItem.check();
    testItem.is_done.should.be.true;
  });

  });
  describe('"uncheck"', function () {
    it('Should be a method on ShoppingListItem', function(){
      testItem.should.have.property('uncheck');
    });
    it('Should set "is_done" property to false', function(){
      testItem.check();
      testItem.is_done.should.be.true;
      testItem.uncheck();
      testItem.is_done.should.be.false;
    });

  });
  describe('"render"', function () {
  it('Should have a method named "render"', function(){
    testItem.should.have.property('render');
    expect(testItem.render()).to.be.a('string');
  });
  it('Should return an HTML string wrapped in tags.',function(){
    testItem.render().should.equal(`<li class="completed_false"><span>Curry</span>&nbsp;<span>Dinner for tomorrow night</span></li>`);
  });

  });

});

//Shopping List
describe('ShoppingList', function() {
  var testItemList;
  var beer;
  var chips;

  beforeEach( function(){
    testItemList = new ShoppingList();
    beer = new ShoppingListItem('Beer', 'Party');
    chips = new ShoppingListItem('Lays', 'Snack');
  });

  it('Should be a class constructor', function() {
    ShoppingList.should.exist;
    expect(testItemList).to.be.an.instanceOf(ShoppingList);
  });

  //PROPERTIES
  it('Should have a property name "items"', function() {
    testItemList.should.have.property('items');
  });
  it('"items" should be an empty array', function() {
    expect(testItemList.items).to.be.empty;
  });

  //METHODS
  describe('"addItem"', function () {
    it('Should have a method named "addItem"',function(){
      testItemList.should.have.property('addItem');
      testItemList.addItem.should.be.a('function');
    });
    it('Should add a ShoppingList object to the items array. It should NOT be able to addItem if it is not a ShoppingList object', function(){
      var beer = new ShoppingListItem('Beer', 'Party');
      var chips = new ShoppingListItem('Lays', 'Snack');
      testItemList.addItem(beer);
      testItemList.addItem(chips);

      testItemList.items[0].should.be.an('object');
      testItemList.items[0].name.should.equal('Beer');
      testItemList.items.should.not.contain('Bottle');
      expect(testItemList.addItem.bind(testItemList, 'Bottle')).to.throw('Error');
      testItemList.items.length.should.equal(2);
      testItemList.items[1].name.should.equal('Lays');
      });
  });

  describe('"removeItem"', function () {
    it('Should have a method "removeItem"', function(){
      testItemList.should.have.property('removeItem');
      testItemList.removeItem.should.be.a('function');
    });
    // it('"removeItem" should accept a single ShoppingListItem argument',function(){
    // });
    it('Should remove Object passed in from the items array', function () {
      testItemList.addItem(beer);
      testItemList.addItem(chips);
      testItemList.removeItem(beer);

      testItemList.items[0].name.should.equal('Lays');
      testItemList.items.should.not.contain(beer);
    });

    it('If no argument is passed it should remove last item in the array. If array is empty, it should do nothing' , function(){
      testItemList.addItem(beer);
      testItemList.addItem(chips);
      testItemList.removeItem();

      testItemList.items.should.not.contain(chips);

      testItemList.removeItem();
      testItemList.items.should.be.empty;

      testItemList.removeItem();
      testItemList.items.should.be.empty;
    });

    it('Should throw and error if argument passed in is not a ShoppingListItem', function () {
      expect(testItemList.removeItem.bind(testItemList,'Bottle')).to.throw('Error');
    });
    it('Should throw an error if argument passed in is not in items array', function () {
      expect(testItemList.removeItem.bind(testItemList, chips)).to.throw('Error');
    });
  });
  describe('render', function(){
    it('ShoppingList should have a method named "render"', function () {
      testItemList.should.have.property('render');
      testItemList.render.should.be.a('function');
    });
    it('Should concatenate the string from calling render() on each ShoppingListItem in the items array and return it as a string', function () {
      testItemList.addItem(beer);
      testItemList.addItem(chips);

      expect(testItemList.render()).to.equal(`<ul><li class="completed_false"><span>Beer</span>&nbsp;<span>Party</span></li><li class="completed_false"><span>Lays</span><span>Snack</span></li></ul>`);
    });
  });
});