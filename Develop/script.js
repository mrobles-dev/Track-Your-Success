// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var span = $("#span");

// function displayClock(){
  //   var display = new Date().toDateString()
  //   span.innerHTML= display 
  //   setTimeout(displayClock, 1000);
  // }
  
  
  setInterval(() => {
    var currentTime = dayjs().format('MMM DD, hh:mm:ss a')
    $('#span').text(currentTime)
    // window.load = currentTime();
    
  }, 1000);
  


$(".saveBtn").on('click', function(){
var value = $(this).siblings(".description").val()
console.log(value);
var time = $(this).parent().attr('id')
console.log(time.split('-')[1])
localStorage.setItem(time, value)
}); 

function hourlyUp(){
  var currentHour = dayjs().hour()
  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split("-")[1]);
    console.log(currentHour);
    console.log(blockHour);
    if (currentHour > blockHour ) {
    $(this).addClass('past');
  } else if(currentHour === blockHour){
      $(this).removeClass('past');
      $(this).addClass('present');
  }else {
  $(this).removeClass('past');
   $(this).removeClass('present');
   $(this).addClass('future');
  }
  });

}
hourlyUp();

for(let i = 9; i <=21; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}


  // function display(){
  //   localStorage.setItem(time, input.value);
  // }

//   input.addEventListener("keyup", display);
//     textarea.innerHTML = localStorage.getItem('value')
//   }


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
  
