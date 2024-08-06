const advice_ID = document.getElementById("advice-id");
const advice = document.getElementById("advice-quote");
const btn_advice = document.getElementById("get-advice");

const api_url = "https://api.adviceslip.com/advice";

const adviceCaller = () => {
  fetch(api_url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      advice_ID.textContent = JSON.stringify(data.slip.id);
      advice.textContent = JSON.stringify(data.slip.advice, null, 2);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

btn_advice.addEventListener("click", adviceCaller);
