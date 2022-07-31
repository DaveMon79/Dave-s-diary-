
$(document).ready(function () {

    $(".saveBtn").click(function () {
        var userText = $(this).siblings(".description").val();
        var hour = $(this).parent().attr('id');
        localStorage.setItem(hour, userText);

      
        setTimeout(function () {
            $('#show-hide').addClass('storage-alert');
            }, 3000);
            
            $('#show-hide').removeClass('storage-alert');

    });


    function timeTracker() {

        var currentTime = moment().format("H");
      
        $(".row").each(function () {
            var rowTime = parseInt($(this).attr("id"));

            if (rowTime < currentTime) {
                 $(this).addClass("past");
            }
            else if (rowTime == currentTime) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }

        });
    }


   
    
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12.description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));


    var displaytDate = moment().format("dddd Do MMMM YYYY");
    $("#currentDay").text(displaytDate);

    function displayTime() {
        var rightNow = moment().format('H:mm:ss a');
        $("#currenttime").text(rightNow);

    }

    setInterval(displayTime, 1000) + timeTracker();

 

});




