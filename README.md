# Calendar-App

This is the Prosoft recruitment test for Carlos Gamboa Monge, it was done using JS/jQuery, HTML and CSS.

Before starting:
* Run 'npm install' in the project root.
* Open the index.html file.

## Observations
* This web app isn't responsive, open in a desktop/laptop.

## Information from the email
a. A list of any requirements you could not implement.
* The holidays only appear on the first month the calendar displays, couldn't make it render on the next ones.
* The API call to the holidays was made using the Test API key, for some reason the Live API key wasn't working so the app displays dummy holidayss

b. Bugs you’ve identified but didn’t have time to fix.
* For some reason the calendar only displays the holidays on the first month is shown, later months won't have their holidays in orange.
* The start date entered MUST be in the format YYYY-MM-DD for the calendar to work properly.
* Holidays will show up even if its a blocked day, the solution is to add the exception in the css with the ':not()' selector.

c. Things you would do if you had more time to complete the task.
* Fix the holidays problem in the calendar.
* Add Bootstrap and make the app responsive + prettier.
* Figure out a solution for the Live API key problem of the Holiday API.
* Most of the time was used on research, didn't have much information to make proper decisions regarding libraries/plugins, so I went with what I though would work better. With more time I would of made more research about which technologies/plugins/libraries would of work better for this exercise.
* Would of used a task runner like Gulp or Grunt for file minifications, local web server, JSHint, etc. As well as a CSS preprocessor like Sass.