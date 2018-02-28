// Challenge 1
var numOfSandwiches = 4*2
console.log('numOfSanswiches', numOfSandwiches); //Should print the number 8

// Challenge 2
var name = "Barry"
var string = "Hello, " + name + " how are you doing today?";
console.log('string' + string);

// Challenge 3

var dna = "GCAT";
var rna = dna.replace(/T/, "U");

console.log("RNA", rna);

// Challenge 4

 var animal = "ALLigator"
//  var animal = "bear"
// var animal = "rhino"

if(animal.toLowerCase() === "alligator"){
  // console.log("small");
}else {console.log("wide");}

// 

var yarn = "Text here"
var domString = "<h4>" + yarn + "</h4>"
var myDiv = document.getElementById('yarn-holder');
myDiv.innerHTML = domString;

// Challenge 4

var str = "IBMWLOVEbmcatsbmw";
var newStr = str.replace(/[BMWbmw]/gi, "").toLowerCase();
var cats = "<h1>" + newStr + "</h1>"
var kittenDiv = document.getElementById('cat-holder');
kittenDiv.innerHTML = cats;
