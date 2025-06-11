const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const am = document.getElementById("am");
const timehandler = () => {
  const date = new Date();
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  if (hrs > 12) {
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

setInterval(() => {
  timehandler();
}, 1000);
