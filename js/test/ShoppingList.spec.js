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
    testItem.render().should.equal('<li class="completed_false"><span>Curry</span><span>Dinner for tomorrow night</span></li>');
  });

  });
});

//Shopping List
describe('ShoppingList', function() {
  var testItem;

  beforeEach( function(){
    testItem = new ShoppingList();
  });

  it('Should be a class constructor', function() {
    ShoppingList.should.exist;
    expect(testItem).to.be.an.instanceOf(ShoppingList);
  });

  //PROPERTIES
  it('Should have a property name "items"', function() {
    testItem.should.have.property('items');
  });
  it('"items" should be an empty array', function() {
    expect(testItem.items).to.be.empty;
  });

  //METHODS
  describe('"addItem"', function () {
    it('Should have a method named "addItem"',function(){
      testItem.should.have.property('addItem');
      testItem.addItem.should.be.a('function');
    });
    it('Should add a ShoppingList object to the items array. It should NOT be able to addItem if it is not a ShoppingList object', function(){
      var beer = new ShoppingListItem('Beer', 'Party');
      var chips = new ShoppingListItem('Lays', 'Snack');
      testItem.addItem(beer);
      testItem.addItem(chips);

      testItem.items[0].should.be.an('object');
      testItem.items[0].name.should.equal('Beer');
      testItem.items.should.not.contain('Bottle');
      expect(testItem.addItem.bind('Bottle')).to.throw('Error');
      testItem.items.length.should.equal(2);
      testItem.items[1].name.should.equal('Lays');
      });
  });
  describe('"removeItem"', function () {
    it('Should have a method "removeItem"', function(){
      testItem.should.have.property('removeItem');
      testItem.removeItem.should.be.a('function');
    });
    it('"removeItem" should accept a single ShoppingListItem argument',function(){
    });
    it('Should remove Object passed in from the items array', function (done) {
      var beers = new ShoppingListItem('Booze', 'Get buss');
      testItem.addItem(beers);
      testItem.removeItem(beers);
      testItem.items.should.not.contain('Booze', 'Get buss');
    });
    it('Invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing', function (done) {
      var beers = new ShoppingListItem('Booze', 'Get buss');
      var gyoza = new ShoppingListItem('Gyoza', 'Get full');
      testItem.addItem(beers);
      testItem.addItem(gyoza);
      testItem.removeItem(beers);
      testItem.items[0].name.should.equal('Gyoza');
      testItem.removeItem();
      expect(testItem.items).to.be.empty;
      // testItem.removeItem();
      // expect(testItem.items).to.be.empty;
    });
    it('If the argument passed is not an instance of ShoppingList object that is in the "items" array, an error should be thrown', function(){
      expect(testItem.removeItem.bind('Bottle')).to.throw('Error');
    });
  });
});