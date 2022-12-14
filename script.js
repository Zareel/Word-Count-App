let textarea = document.querySelector(".textarea");
let result = document.querySelector(".result span");
let btn = document.querySelector(".btn");

let countWords = () => {
  let words = textarea.value;
  let wordsTrimmed = words.replace(/\s+/g, " ").trim();
  let splitWords = wordsTrimmed.split(" ");

  let numberOfWords = splitWords.length;
  if (splitWords[0] == "") {
    numberOfWords = 0;
  }
  result.innerHTML = numberOfWords;
};
textarea.addEventListener("input", countWords);

btn.addEventListener("click", function () {
  textarea.value = "";
  result.innerText = "0";
});
