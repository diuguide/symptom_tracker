$(document).ready(() => {
  const modal = document.getElementById("dayModal");
  const span = document.getElementById("class");
  const dayGrid = document.querySelector(".day-grid");
  const symptomGrid = document.querySelector(".symptom-grid");
  const ratingArea = document.querySelector(".rating-area");
  const dateGrid = document.querySelector(".date-grid");
  const checkIn = document.getElementById("checkIn");
  const daySquares = [];
  const symptomSquares = [];
  const symptomArray = [
    "Cough",
    "Mental Health",
    "Headache",
    "Muscle Ache",
    "Energy Level",
    "Mood",
    "Appetite",
  ];

  function showDates() {
    for (let i = 0; i < 7; i++) {
      const dateSquare = document.createElement("div");
      dateSquare.classList.add("date");
      // @ts-ignore
      dateSquare.innerHTML = moment().add(i, "days").format("MM DD YY");
      dateGrid.appendChild(dateSquare);
    }
  }

  // function createMonthGrid() {
  //   for (let i = 0; i < 12; i++) {
  //     const monthSquare = document.createElement("div");
  //     monthSquare.innerHTML = monthArray[i];
  //     monthSquare.classList.add("month");
  //     monthSquare.setAttribute("id", monthArray[i]);
  //     monthGrid.appendChild(monthSquare);
  //     monthSquares.push(monthSquare);
  //   }
  // }
  function createDayGrid() {
    fetch("/api/symptoms")
      .then((res) => {
        return res.json();
      })
      .then((results) => {
        console.log(results);
        for (let i = 1; i < 8; i++) {
          const daySquare = document.createElement("div");
          daySquare.classList.add("day");
          daySquare.setAttribute("id", "day_" + i);
          dayGrid.appendChild(daySquare);
          daySquares.push(daySquare);
        }
      });
  }
  function dayClick() {
    modal.style.display = "block";
    for (let i = 0; i < 10; i++) {
      const rateSquares = document.createElement("div");
      rateSquares.classList.add("rate");
      rateSquares.setAttribute("id", i.toString());
      rateSquares.innerHTML = i.toString();
      ratingArea.appendChild(rateSquares);
    }
  }
  function dailyCheckIn() {
    // add event listener to daily check-in link
    // then display form in modal
    checkIn.addEventListener("click", () => dayClick());
  }
  function createSymptomGrid() {
    for (let i = 0; i < 7; i++) {
      const symptomSquare = document.createElement("div");
      symptomSquare.classList.add("symptom");
      symptomSquare.setAttribute("id", "symptom_" + i);
      symptomSquare.innerHTML = symptomArray[i];
      symptomGrid.appendChild(symptomSquare);
      symptomSquares.push(symptomSquare);
    }
  }
  function dayModal() {
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
  dayModal();
  dailyCheckIn();
  showDates();
  createSymptomGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
});
