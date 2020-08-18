let current = document.querySelector(".jokes");
let previous = document.querySelector(".remote");
let myTV = document.querySelector(".television");
let onOff = document.querySelector("#onoff");
let loader = document.querySelector("#loader");

function onoff() {
  currentvalue = document.getElementById("onoff").value;
  if (currentvalue == "On") {
    document.getElementById("onoff").value = "Off";
    current.style.visibility = "visible";
    myTV.style.backgroundColor = "#c3dafe";
  } else {
    document.getElementById("onoff").value = "On";
    current.style.visibility = "hidden";
    myTV.style.backgroundColor = "black";
  }
}

function refresh() {
  if (Math.random() < 0.5) {
    return fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then(({ joke }) => setJoke(joke));
  } else {
    return fetch("https://api.icndb.com/jokes/random?limitTo=[funny]", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => r.value.joke)
      .then((joke) => joke.replace(/Chuck Norris/g, rand(names)))
      .then((joke) => setJoke(joke));
  }
}

function setJoke(joke) {
  current.innerHTML = joke;
}

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

refresh();
setInterval(refresh, 6000);

document.addEventListener("click", refresh);
