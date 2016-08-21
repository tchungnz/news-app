(function(exports) {

function describe(title,callback) {
  console.log(title);
  callback();
}

function it(title,callback) {
  // if (typeof beforeEach() === 'function') {
  //   beforeEach();
  // }
  console.log('   ' + title);
  callback();
}

function expect(object) {
  return object;
}

var yodaQuoteForPassing = ["Powerful you have become, the force I sense in you.", "Truly wonderful the mind of a child is.", "May the Force be with you."];
var yodaQuoteForFailing = ["Patience you must have my young padawan.", "Much to learn you still have."];
var findPassMessage = "   Passed it has. " + yodaQuoteForPassing[Math.floor(Math.random()*yodaQuoteForPassing.length)];
var findFailMessage = "   Failed it has. " +yodaQuoteForFailing[Math.floor(Math.random()*yodaQuoteForFailing.length)];

Object.prototype.passMessage = function() {
  console.log("%c"+findPassMessage +"'", 'color: #63D13E');
};

Object.prototype.failMessage = function() {
  console.log("%c"+findFailMessage +"'", 'color: #ff1a1a');
};

Object.prototype.toBeTrue = function() {
  if (this.valueOf() === true) {
    return this.passMessage();
  } else {
    return this.failMessage();
  }
};

Object.prototype.toBeFalse = function() {
  if (this.valueOf() === false) {
    return this.passMessage();
  } else {
    return this.failMessage();
  }
};

Object.prototype.toEqual = function(object2) {

      //For the first loop, we only check for types
      for (propName in this) {
          //Check for inherited methods and properties - like .equals itself
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
          //Return false if the return value is different
          if (this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
              return this.failMessage();
          }
          //Check instance type
          else if (typeof this[propName] != typeof object2[propName]) {
              //Different types => not equal
              return this.failMessage();
          }
      }
      //Now a deeper check using other objects property names
      for(propName in object2) {
          //We must check instances anyway, there may be a property that only exists in object2
              //I wonder, if remembering the checked values from the first loop would be faster or not
          if (this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            return this.failMessage();
          }
          else if (typeof this[propName] != typeof object2[propName]) {
            return this.failMessage();
          }
          //If the property is inherited, do not check any more (it must be equa if both objects inherit it)
          if(!this.hasOwnProperty(propName))
            continue;

          //Now the detail check and recursion

          //This returns the script back to the array comparing
          /**REQUIRES Array.equals**/
          if (this[propName] instanceof Array && object2[propName] instanceof Array) {
                     // recurse into the nested arrays
             if (!this[propName].equals(object2[propName]))
              return console.log(failMessage);
          }
          else if (this[propName] instanceof Object && object2[propName] instanceof Object) {
                     // recurse into another objects
                     //console.log("Recursing to compare ", this[propName],"with",object2[propName], " both named \""+propName+"\"");
             if (!this[propName].equals(object2[propName]))
              return this.failMessage();
          }
          //Normal value comparison for strings and numbers
          else if(this[propName] != object2[propName]) {
              return this.failMessage();
          }
      }
      return this.passMessage();
  };

exports.Object = Object;
exports.describe = describe;
exports.it = it;
exports.expect = expect;


})(this);
