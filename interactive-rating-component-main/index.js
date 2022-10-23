const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const rating = document.querySelectorAll(".btn");
const rates = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});
rating.forEach((rating) => {
  rating.addEventListener("click", () => {
    console.log(rate.innerHTML);
    //rating.innerHTML = rate.innerHTML;
  });

  rateAgain.addEventListener("click", () => {
    mainContainer.style.display = "block";
    thanksContainer.classList.add("hidden");
  });
});
