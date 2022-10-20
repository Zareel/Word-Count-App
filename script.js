let textarea = document.querySelector(".textarea");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result span");

let countWords = () => {
  let words = textarea.value;
  let wordsTrimmed = words.replace(/\s+/g, " ").trim();
  let splitWords = wordsTrimmed.split(" ");

  let numberOfWords = splitWords.length;

  result.innerHTML = numberOfWords;
};
btn.addEventListener("click", countWords);
