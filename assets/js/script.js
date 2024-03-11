// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Time Functionality
var date = document.querySelector("#currentDay");
var time = document.querySelector("#currentTime");
function refreshTime() {
  var timerInterval = setInterval(function () {
      var today = dayjs();
      $('#currentDay').text(today.format('MMM D, YYYY'));
      $('#currentTime').text(today.format('h:mm:ss a'));
      if ((Number(currentHour) >= 0 && Number(currentHour) <=6) || (Number(currentHour) >= 19)) {
        $(".spacer").text(" ☾ ");
      }
  }, 1000);
}
refreshTime();

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

renderPreviousToDos();

function renderPreviousToDos() {

  if (localStorage.getItem("9")) {
    var previousToDo = localStorage.getItem("9");
    $("#hour-9").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("10")) {
    var previousToDo = localStorage.getItem("10");
    $("#hour-10").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("11")) {
    var previousToDo = localStorage.getItem("11");
    $("#hour-11").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("12")) {
    var previousToDo = localStorage.getItem("12");
    $("#hour-12").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("13")) {
    var previousToDo = localStorage.getItem("13");
    $("#hour-1").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("14")) {
    var previousToDo = localStorage.getItem("14");
    $("#hour-2").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("15")) {
    var previousToDo = localStorage.getItem("15");
    $("#hour-3").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("16")) {
    var previousToDo = localStorage.getItem("16");
    $("#hour-4").children(".description").text(previousToDo)
  }
  if (localStorage.getItem("17")) {
    var previousToDo = localStorage.getItem("17");
    $("#hour-5").children(".description").text(previousToDo)
  }

}





// adds an event listener on the time block, and does the following:
// checks to see if the user hit the "save" button
// if true, selects the 'this' hour and textarea to be saved in local storage
var timeBlock = $(".time-block");
timeBlock.on("click", function(event) {
  var element = event.target;
  
  if (element.matches("button") || element.matches("i")) {
    var toDo = this.children[1].value;
    console.log(toDo);
    var savedHour = this.getAttribute("data-hour")
    console.log(this.getAttribute("data-hour"))
    localStorage.setItem(savedHour, toDo);
  }
})
