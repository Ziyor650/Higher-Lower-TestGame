const data = [
    { item: "City A", value: 500000, image: "images/city-a.jpg" },
    { item: "City B", value: 1200000, image: "images/city-b.jpg" },
    { item: "City C", value: 750000, image: "images/city-c.jpg" },
    { item: "City D", value: 250000, image: "images/city-d.jpg" },
  ];
  
  let score = 0;
  let currentPair = [];
  
  // Randomly select two items
  function getRandomItems() {
    return data.sort(() => 0.5 - Math.random()).slice(0, 2);
  }
  
  // Update the UI with current items
  function updateUI(pair) {
    document.getElementById("item1-name").innerText = `Item 1: ${pair[0].item}`;
    document.getElementById("item1-value").innerText = `Value: ${pair[0].value.toLocaleString()}`;
    document.getElementById("item1-img").src = pair[0].image;
    document.getElementById("item2-name").innerText = `Item 2: ${pair[1].item}`;
    document.getElementById("item2-img").src = pair[1].image;
    document.getElementById("result").innerText = "";
  }
  
  // Check the user's guess
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
      document.getElementById("retry-btn").style.display = "inline-block";
    }
  }
  
  // Restart the game
  function restartGame() {
    score = 0;
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("higher-btn").disabled = false;
    document.getElementById("lower-btn").disabled = false;
    document.getElementById("retry-btn").style.display = "none";
    currentPair = getRandomItems();
    updateUI(currentPair);
  }
  
  // Event listeners
  document.getElementById("higher-btn").addEventListener("click", () => checkAnswer(true));
  document.getElementById("lower-btn").addEventListener("click", () => checkAnswer(false));
  document.getElementById("retry-btn").addEventListener("click", restartGame);
  
  // Initialize game
  currentPair = getRandomItems();
  updateUI(currentPair);
