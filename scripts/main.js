$(document).ready(function () {

});

function renderHolidays(holidays){
	if(holidays){
		var holidays_string = ['<tr><th>Name</th><th>Date</th></tr>'],
			table = $(".holidays table");

		table.empty();

		$.each(holidays, function(key, day) {
			holidays_string.push('<tr><td>' + day[0].name + '</td><td>' + day[0].date + '</td></tr>');
			$('table').find('td.day.calendar-day-' + day[0].date).css('background-color', 'orange');
		});

		table.append(holidays_string);
	}
}

function callHolidays(code, year){
	var root = 'https://holidayapi.com/v1/holidays?key=cda7ba44-7d08-41ac-bf62-3abd8548f1f4';

	$.ajax({url: root + '&country=' + code + '&year=' + year,
            method: 'GET',
            success: function(result){
            	renderHolidays(result.holidays);
            },
            error: function(error){
            	alert('Something went wrong!');
            	//error handler
            },
            statusCode: {
			    401: function() {
			      	alert('Unauthorized request');
			      	//Erro handler
			    },
			    402: function() {
			      	alert('Payment required');
			      	//Erro handler
			    },
			    403: function() {
			      	alert('Forbidden');
			      	//Erro handler
			    },
			    401: function() {
			      	alert('Rate limit exceeded');
			      	//Erro handler
			    },
			    500: function() {
			      	alert('Something went wrong in the server');
			      	//Erro handler
			    }
			}
    });
}

function renderCalendar(date, number, content){
	var calendar = $('.cal1');

	if (content.length){
		calendar.clndr().options.constraints.startDate = moment(date, 'YYYY-MM-DD');
		calendar.clndr().options.constraints.endDate = moment(date, 'YYYY-MM-DD').add(number, 'days');
		calendar.clndr().render();
	} else {
		calendar.clndr({
			constraints: {
		        startDate: moment(date, 'YYYY-MM-DD'),
		        endDate: moment(date, 'YYYY-MM-DD').add(number, 'days')
		    }
		});	
	}
}

$('#submit_button').click(function() {
		var start_date,
		number_days,
		country_code,
		calendar;
		
		start_date = $('#start_date').val();
		number_days = $('#number_days').val();
		country_code = $('#country_code').val();
		calendar_content = $('.clndr');

	  	renderCalendar(start_date, number_days, calendar_content);

	  	if (country_code){
	  		var values = start_date.split('-');
	  		var year = values[0];

	  		callHolidays(country_code, year);
	  	}
});