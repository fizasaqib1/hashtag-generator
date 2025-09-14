let hashtags = [];
let currentIndex = 0;
let historyList = [];

function generateHashtags() {
  let n1 = document.getElementById("name1").value.trim();
  let n2 = document.getElementById("name2").value.trim();

  if (!n1 || !n2) {
    alert("Please enter both names!");
    return;
  }

  hashtags = [];

  for (let i = 1; i < n1.length; i++) {
    for (let j = 1; j < n2.length; j++) {
      hashtags.push(`#${n1.slice(0, i)}${n2.slice(j)}`);
      hashtags.push(`#${n2.slice(0, j)}${n1.slice(i)}`);
    }
  }
  hashtags = [...new Set(hashtags)];

  currentIndex = 0;
  showCurrentTag();
}

function showCurrentTag() {
  let currentTagDiv = document.getElementById("currentTag");
  if (hashtags.length > 0 && currentIndex < hashtags.length) {
    currentTagDiv.innerText = hashtags[currentIndex];
    currentTagDiv.style.display = "block";

    if (!historyList.includes(hashtags[currentIndex])) {
      historyList.push(hashtags[currentIndex]);
    }
  } else {
    currentTagDiv.innerText = "No more hashtags! Try Generate again.";
  }
}

function nextTag() {
  if (currentIndex < hashtags.length - 1) {
    currentIndex++;
    showCurrentTag();
  } else {
    alert("You've seen all mashups! Click Generate again.");
  }
}

function copyTag() {
  if (hashtags.length > 0 && currentIndex < hashtags.length) {
    navigator.clipboard.writeText(hashtags[currentIndex]).then(() => {
      alert(`Copied: ${hashtags[currentIndex]}`);
    });
  }
}

function showHistory() {
  let historyDiv = document.getElementById("history");
  if (historyList.length > 0) {
    historyDiv.style.display = "block";
    historyDiv.innerHTML = "<strong>History:</strong><br>" + historyList.join("<br>");
  } else {
    historyDiv.style.display = "block";
    historyDiv.innerHTML = "No history yet!";
  }
}