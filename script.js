
var displaytDate = moment().format("dddd Do MMMM YYYY");
$("#currentDay").text(displaytDate);

var displaytime = moment().format("LTS");
$("#currenttime").text(displaytime);



$(document).ready(function () {
    $(".saveBtn").click(function () {
        var userText = $(this).siblings(".description").val();
        var hour = $(this).parent().attr('id');
        $(this).siblings(".description")
        localStorage.setItem(hour, userText);

    });

    
});





function timeTracker() {
 
    var currentTime = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = $(this).attr("id").val;
        console.log(blockTime);

        if (blockTime < currentTime) {
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass(".past");
            $(this).addClass(".present");
        }
        else if (blockTime > currentTime) 
            $(this).removeClass(".present");
            $(this).addClass(".future");
        
    }
);
}

