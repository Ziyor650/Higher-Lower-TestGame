const data = [
  { item: "City A", value: 500000 },
  { item: "City B", value: 1200000 },
  { item: "City C", value: 750000 },
  { item: "City D", value: 250000 },
];

let score = 0;
let currentPair = [];

function getRandomItems() {
  const items = data.sort(() => 0.5 - Math.random()).slice(0, 2);
  return items;
}

function updateUI(pair) {
  document.getElementById("item1-name").innerText = `Item 1: ${pair[0].item}`;
  document.getElementById("item1-value").innerText = `Value: ${pair[0].value.toLocaleString()}`;
  document.getElementById("item2-name").innerText = `Item 2: ${pair[1].item}`;
  document.getElementById("result").innerText = "";
}

function checkAnswer(isHigher) {
  const [item1, item2] = currentPair;
  const correct = isHigher ? item2.value > item1.value : item2.value < item1.value;

  if (correct) {
    score++;
    document.getElementById("result").innerText = "Correct!";
    document.getElementById("score").innerText = `Score: ${score}`;
    currentPair = getRandomItems();
    updateUI(currentPair);
  } else {
    document.getElementById("result").innerText = `Wrong! Final score: ${score}`;
    document.getElementById("higher-btn").disabled = true;
    document.getElementById("lower-btn").disabled = true;
  }
}

document.getElementById("higher-btn").addEventListener("click", () => checkAnswer(true));
document.getElementById("lower-btn").addEventListener("click", () => checkAnswer(false));

// Initialize game
currentPair = getRandomItems();
updateUI(currentPair);