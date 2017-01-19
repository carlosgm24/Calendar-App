$(document).ready(function () {

});

function renderCalendar(date, number){
	var calendar = $('.cal1');

	calendar.clndr({
		constraints: {
	        startDate: moment(date, "YYYY-MM-DD"),
	        endDate: moment(date, "YYYY-MM-DD").add(number, "days")
	    }
	});
}

$("#submit_button").click(function() {
		var start_date,
		number_days,
		country_code;
		
		start_date = $("#start_date").val();
		number_days = $("#number_days").val();
		country_code = $("#country_code").val();
	  	
	  	renderCalendar(start_date, number_days);
});