const timerLabel = document.getElementById("timer");
const datePicker = document.getElementById("date-picker");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let intervalId;
let startTime = 0;
let isRunning = false;

// Display the current time in HH:MM:SS format
function displayTime(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerLabel.textContent = `${hours}:${minutes}:${secs}`;
}

// Start the timer
async function startTimer() {
  if (!isRunning) {
    isRunning = true;
    const startDate = new Date().getTime() - startTime * 1000;
    intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      startTime = Math.floor((currentTime - startDate) / 1000);
      displayTime(startTime);
    }, 1000);
  }
}

// Stop the timer
function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
  }
}

// Reset the timer
function resetTimer() {
  stopTimer();
  startTime = 0;
  displayTime(startTime);
}

// Event listeners
// startButton.addEventListener("click", startTimer);
// stopButton.addEventListener("click", stopTimer);
// resetButton.addEventListener("click", resetTimer);

// Initial setup
// displayTime(startTime);
// let options = $.extend(		 
// 	{}, // empty object		 
// 	$.datepicker.regional["hi"], // Dynamically		 
// 	{ dateFormat: "mm/dd/yy"} // your custom options	 
// ); 
 
$(function() {
	$("#datepicker").datepicker();
  $("#datepicker").datepicker({ defaultDate: new Date() });
  $("#datepicker").val($.datepicker.formatDate('mm/dd/yy', new Date()));
  });

// // Initialize the date picker with today's date as the default value
// $("#hasDatepicker").datepicker({ defaultDate: new Date() });
      
// // Disable keyboard input for the date picker field
// $("#hasDatepicker").on("keydown", function(e) {
//   e.preventDefault();
// });


////////////////////////////////////////////////////////////////////////
const stopwatchLabel = document.getElementById("stopwatch");

// Display the current time in HH:MM:SS format
// function displayTime(seconds) {
//   const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
//   const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//   const secs = String(seconds % 60).padStart(2, "0");
//   stopwatchLabel.textContent = `${hours}:${minutes}:${secs}`;
// }

// Start the timer and return a promise
function startTimer() {
  return new Promise((resolve) => {
    if (!isRunning) {
      isRunning = true;
      const startDate = new Date().getTime() - startTime * 1000;
      intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        startTime = Math.floor((currentTime - startDate) / 1000);
        displayTime(startTime);
      }, 1000);
      resolve();
    }
  });
}

// Stop the timer and return a promise
function stopTimer() {
  return new Promise((resolve) => {
    if (isRunning) {
      isRunning = false;
      clearInterval(intervalId);
      resolve();
    }
  });
}

// Reset the timer
async function resetTimer() {
  stopTimer();
  startTime = 0;
  displayTime(startTime);
}

// Event listeners
startButton.addEventListener("click", async () => {
  await startTimer();
});

stopButton.addEventListener("click", async () => {
  await stopTimer();
});

resetButton.addEventListener("click", async () => {
  await resetTimer();
});