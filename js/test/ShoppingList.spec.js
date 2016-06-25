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
  it('Should have a method named "check"', function(){
    testItem.should.have.property('check');
    testItem.check.should.be.a('function');
  });
  it('Check should set "is_done" property to true', function(){
    testItem.is_done.should.be.false;
    testItem.check();
    testItem.is_done.should.be.true;
  });
  it('Should have a method named "uncheck"', function(){
    testItem.should.have.property('uncheck');
  });
  it('Uncheck should set "is_done" property to false', function(){
    testItem.check();
    testItem.is_done.should.be.true;
    testItem.uncheck();
    testItem.is_done.should.be.false;
  });
  it('Should have a method named "render"', function(){
    testItem.should.have.property('render');
    expect(testItem.render()).to.be.a('string');
  });
  it('Should return an HTML string wrapped in tags.',function(){
    testItem.render().should.equal('<li class="completed_false"><span>Curry</span><span>Dinner for tomorrow night</span></li>');
  });

});