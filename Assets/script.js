// .ready makes sure code doesn't run until the document has fully loaded
$(document).ready(function () {

    // Saves user text and hour id to localstorage
    $(".saveBtn").click(function () {
        //Targets the text input in time block
        var userText = $(this).siblings(".description").val();
        //takes the hour number from the ID 
        var hour = $(this).parent().attr('id');
        localStorage.setItem(hour, userText);

      // Shows and removed user input stored div
        setTimeout(function () {
            $('#show-hide').addClass('storage-alert');
            }, 3000);

            $('#show-hide').removeClass('storage-alert');

    });


    // changes the colour of the block based on the current time
    function blockColour() {

        //Stores current hour from moment j to variable
        var currentTime = moment().format("H");
      
        $(".row").each(function () {

            //turns string from ID into an Integer
            var rowTime = parseInt($(this).attr("id"));

            //loop to compare the rowtime to the present time
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


   
   // Makes user input display after page is refreshed 
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));

    //Displays date from Moment JS
    var displaytDate = moment().format("dddd Do MMMM YYYY");
    $("#currentDay").text(displaytDate);

    //Display time from Moment JS
    function displayTime() {
        var rightNow = moment().format('H:mm:ss a');
        $("#currenttime").text(rightNow);

    }
    
    //Refreshes time function every second
    setInterval(displayTime, 1000);
    
    blockColour();
 

});




