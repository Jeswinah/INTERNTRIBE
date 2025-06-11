const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const am = document.getElementById("am");
const timehandler = () => {
  const date = new Date();
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  // if the time is greater than 12 then it update PM otherwise AM
  if (hrs > 12) {
    // The time is in the form of 24hours.So hrs%12 it convert into a 12 hours format
    hr.innerHTML = hrs % 12;
    am.innerHTML = "Pm";
    if (hrs <= 21) {
      hr.innerHTML = "0" + (hrs % 12);
    }
  } else {
    hr.innerHTML = hrs;
    am.innerHTML = "Am";
  }

  const s = secs < 10 ? (sec.innerHTML = "0" + secs) : (sec.innerHTML = secs);
  const m = mins < 10 ? (min.innerHTML = "0" + mins) : (min.innerHTML = mins);
};

// Every 1 sec it calls the timehandler function
setInterval(() => {
  timehandler();
}, 1000);
