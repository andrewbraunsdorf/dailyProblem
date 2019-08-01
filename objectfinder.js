// let array = [
//   { name: "Cliff", age: 32 },
//   { name: "John", age: 25 },
//   { name: "Andy", age: 32 },
//   { name: "Mary", age: 21 },
//   { name: "Sally", age: 25 }
// ];
// let key = "age";
// let value = 25;

// function returnIndex(array, key, value) {
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i][key] == value) {
//       // console.log(array[i]);
//       // break;
//       //when multiple key matches
//       // console.log(array[i]);
//       output.push(i);
//     }
//   }
//   console.log(output);
// }

// returnIndex(array, key, value);

let foobar = [
  { a: "foo", b: "bar" },
  { a: "Duh", b: "sit" },
  { a: "hi", b: "foo" }
];

function find(array, value) {
  let output = [];
  // if (foobar.label === value) return foobar;
  for (var i = 0; i < array.length; i++) {
    if (Object.values(array[i]).indexOf(value) > -1) {
      output.push(i);
    }
    // var result = find(foobar[i], value);
    // if (result) {
    //   result.push(i);
    // }
  }
  console.log(output);
}

// function find(haystack, needle) {
//   if (haystack.label === needle) return haystack;
//   for (var i = 0; i < haystack.subs.length; i ++) {
//     var result = find(haystack.subs[i], needle);
//     if (result) return result;
//   }
//   return null;
// }
find(foobar, "foo");
