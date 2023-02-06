
var dayBlocks = $('.time-block');

var lockEl = $('.saveBtn');

 var now = dayjs().format('dddd, MMM D, YYYY')

//  dayjs().format('MMM D'); 
$('#currentDay').text(now);

function dayTimer() {
  //var timeRightNow =  dayjs("2020-24").hour()
  var timeRightNow = dayjs().hour()
  // console.log(timeRightNow);
  dayBlocks.each(function () {
    var blockedDay = $(this).attr('id').split('-')[1]
    //console.log(this)

    if (parseInt(blockedDay) === timeRightNow) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    }

    else if (blockedDay < timeRightNow) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');
    }

    else {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    }

    
  });
};
dayTimer();

function save() {
  var clickedEl = $(this);
  var description = clickedEl.siblings('.description').val();
  var time = clickedEl.parent().attr('id');
  console.log(description, time);
  // var hourlySchedule =[];
  // var alreadySavedItiems = localStorage.getItem('Hourly-Schedule');
  // if(alreadySavedItiems){
  //   (hourlySchedule) = JSON.parse(alreadySavedItiems);
  // }

  // hourlySchedule[clickedEl.parent().attr('id')] = daySchedule;
  localStorage.setItem(time, description);
  
}

$('#hour-9 .description').val(localStorage.getItem('hour-9'))

$('#hour-10 .description').val(localStorage.getItem('hour-10'))

$('#hour-11 .description').val(localStorage.getItem('hour-11'))

$('#hour-12 .description').val(localStorage.getItem('hour-12'))

$('#hour-13 .description').val(localStorage.getItem('hour-13'))

$('#hour-14 .description').val(localStorage.getItem('hour-14'))

$('#hour-15 .description').val(localStorage.getItem('hour-15'))
lockEl.on('click', save);
  
 