function updateClock() {
  const now = new Date();
//   It converts a time to string and padStart(2,'0') it is used to add 0 if needed 7 means  07
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;

  const dateString = now.toDateString();
  document.getElementById('date').textContent = dateString;
}

// It calls the function for every 1 seconds
setInterval(updateClock, 1000);
