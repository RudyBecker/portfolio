var arr = ["dog", "ever", "!"];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i]);
  }, 500);
}

function dogMeter() {
  console.log("Rudy")
  addWord();
  console.log("the")
}
function addWord() {
  return console.log("is");
}

dogMeter();

console.log("coolest")