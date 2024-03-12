
$(function () {

  // Checks if there's previous local storage data; if true, puts that data in the description boxes
  function renderPreviousToDos() {
    if (localStorage.getItem("9")) {
      var previousToDo = localStorage.getItem("9");
      $("#hour-9").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("10")) {
      var previousToDo = localStorage.getItem("10");
      $("#hour-10").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("11")) {
      var previousToDo = localStorage.getItem("11");
      $("#hour-11").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("12")) {
      var previousToDo = localStorage.getItem("12");
      $("#hour-12").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("13")) {
      var previousToDo = localStorage.getItem("13");
      $("#hour-1").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("14")) {
      var previousToDo = localStorage.getItem("14");
      $("#hour-2").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("15")) {
      var previousToDo = localStorage.getItem("15");
      $("#hour-3").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("16")) {
      var previousToDo = localStorage.getItem("16");
      $("#hour-4").children(".description").text(previousToDo);
    }
    if (localStorage.getItem("17")) {
      var previousToDo = localStorage.getItem("17");
      $("#hour-5").children(".description").text(previousToDo);
    }
  }
  renderPreviousToDos();

  // Time Functionality
  function refreshTime() {
    var timerInterval = setInterval(function () {
      var today = dayjs();
      $('#currentDay').text(today.format('MMM D, YYYY'));
      $('#currentTime').text(today.format('h:mm:ss a'));
      if ((Number(currentHour) >= 0 && Number(currentHour) <= 6) || (Number(currentHour) >= 19)) {
        $(".spacer").text(" ☾ ");
      }
    }, 1000);
  }
  refreshTime();

  // Compares the hour of each time block to the current hour, assigns new classes as necessary
  var currentHour = dayjs().format('H');
  for (var n = 0; n < 9; n++) {
    var dataHour = document.body.children[1].children[n].getAttribute("data-hour");

    if (Number(dataHour) < Number(currentHour)) {
      document.body.children[1].children[n].setAttribute("class", "row time-block past");
    } else if (Number(dataHour) == Number(currentHour)) {
      document.body.children[1].children[n].setAttribute("class", "row time-block present");
    } else if (Number(dataHour) > Number(currentHour)) {
      document.body.children[1].children[n].setAttribute("class", "row time-block future");
    }

  }

  // adds an event listener on the time block, and does the following:
  // checks to see if the user hit the "save" button
  // if true, selects the 'this' hour and textarea to be saved in local storage
  var timeBlock = $(".time-block");
  timeBlock.on("click", function (event) {
    var element = event.target;

    if (element.matches("button") || element.matches("i")) {
      var toDo = this.children[1].value;
      var savedHour = this.getAttribute("data-hour");
      console.log(toDo);
      console.log(this.getAttribute("data-hour"));
      localStorage.setItem(savedHour, toDo);
    }
  })

});
