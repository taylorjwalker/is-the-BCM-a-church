const answers = [
  "no",
  "uh-uh",
  "nope",
  "nay",
  "nah",
  "no way",
  "negative",
  "veto",
  "out of the question",
  "no siree",
  "not on your life",
  "not for all the tea in China",
  "not in a million years",
  "under no circumstances",
  "not likely",
  "thumbs down",
  "fat chance",
  "go fish"
];
document.getElementById("answer").textContent = answers[
  Math.floor(Math.random() * answers.length)
].toUpperCase();
