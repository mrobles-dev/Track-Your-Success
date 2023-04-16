setInterval(() => {
    var currentTime = dayjs().format('MMM DD, hh:mm:ss a')
    $('#span').text(currentTime)   
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

$('#clear').on("click",function(){
  localStorage.clear();
  $('.description').val(" ");
});