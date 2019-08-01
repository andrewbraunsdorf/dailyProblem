let array = [
  { name: "Cliff", age: 32 },
  { name: "John", age: 25 },
  { name: "Andy", age: 32 },
  { name: "Mary", age: 21 },
  { name: "Sally", age: 25 }
];
let key = "age";
let value = 25;

function returnIndex(array, key, value) {
  // var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] == value) {
      console.log(array[i]);
      break;
      //when multiple key matches
      // console.log(array[i]);
      // output.push(i);
    }
  }
  //console.log(output);
}

returnIndex(array, key, value);
