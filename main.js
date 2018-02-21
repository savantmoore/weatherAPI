/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

  $(document).ready(function(){
        $('#target').submit(function() {
          var key = '69e91067b3e5473760352dc1ba8a9ac2';
          var city = $('input#loc').val();
          $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`, function(res) {
            .append("html_str");
            var html_str = "";
            html_str += "<h1>" + res.name + ", " + res.sys.country + "</h1>";
            html_str += "<h3>Temperature: " + res.main.temp +  " ℉</h3>";
            html_str += "<h3>Weather: " + res.weather[0].description + "</h3>";
            html_str += "<h4>High: " + res.main.temp_max + "</h4>";
            html_str += "<h4>Low: " + res.main.temp_min + "</h4>";
            $('div').html(html_str);
          }, 'json');

            return false;
        })
});
