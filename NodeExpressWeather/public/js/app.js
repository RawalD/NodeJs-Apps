console.log("JS loaded");


const weatherForm = document.querySelector("form");
const searchForm = document.querySelector("input");
const p1 = document.querySelector("#one")
const p2 = document.querySelector("#two")


weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = searchForm.value;
  //console.log(location)

  p1.textContent = "Loading..."
  p1.textContent = ""

  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        p1.textContent = data.error
        //console.log(data.error);
      } else {
        //console.log(data);
        p1.textContent = data.location
        p2.textContent = data.forecast
      }
    });
  });
});
