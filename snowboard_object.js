function Snowboard(brand, flex, pop) {
  this.brand = brand;
  this.flex = flex;
  this.pop = pop ;
}

function toString(obj) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += i + "=" + obj[i] + "\n";
    }
  }
  return result;
};

var capita = new Snowboard("Capita Stairmaster", 75, 45)
var burton = new Snowboard("Burton Custom", 85, 70)

console.log( toString(capita) )
console.log( toString(burton) )