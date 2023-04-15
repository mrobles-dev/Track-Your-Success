// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var span = document.getElementById("span");
// window.load = displayClock();

// function displayClock(){
//   var display = new Date().toDateString()
//   span.innerHTML= display 
//   setTimeout(displayClock, 1000);
// }
var now = dayjs();

$('#span').text(now.format("dddd , MMMM , D , h:mm:ss"));
// const dataEl= document.querySelector("date");
// dateEl.innerHTML += `<span id="${formattedDate}</span>`;


//  dateEl.append(formattedDate);

//  const todayDate = dayjs().calendar("dddd , MMMM , D , h:mm:ss");
// // var span = dayjs().format("dddd , MMMM , D , h:mm:ss");
// $(span).text(todayDate);


// const saveBtn = document.querySelector("saveBtn");
// const textarea = document.querySelector("hour-11");
//  textarea.innerHTML = localStorage.getItem('value')


  // input.addEventListener("keyup", display);
  // function display(){
  //   localStorage.setItem('value', input.value);
  //   textarea.innerHTML = localStorage.getItem('value')
  // }


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
  
