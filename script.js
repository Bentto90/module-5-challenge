$(document).ready(function () {
  let currentHour = dayjs().hour();
  let timeBlock = $(".time-block");
  let saveBtn = $(".saveBtn");
  let timeBlockRow = $(".row");

  // Display current date and time
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  $("#currentTime").text(dayjs().format("h:mm A"));


  // Function to change color of time blocks based on current time
  function colorChange() {
    timeBlock.each(function () {
      let hour = parseInt($(this).attr("id"));
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  // Function to save text to local storage
  function saveText() {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  }

  // Function to display text from local storage
  function displayText() {
    timeBlock.each(function () {
      let time = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(time));
    });
  }

  // Function to clear local storage
  function clearText() {
    localStorage.clear();
    location.reload();
  }

  // Function to display text from local storage on page load
  displayText();

  // Function to change color of time blocks on page load
  colorChange();

  // Event listener for save button
  saveBtn.on("click", saveText);

  // Event listener for clear button

  $("#clearBtn").on("click", clearText);

  // Event listener for time block row
  timeBlockRow.on("click", function () {
    $(this).children(".description").trigger("focus");
  }
  );


});

  
