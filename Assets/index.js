$(document).ready(function() {
    var apiKey = '39b0a9078bc3441996350bb20ac1bd36'
    var myListItems = document.getElementsByClassName('menu-item')
    var newElement = document.createElement('p')
    var forecast = document.getElementById('forecast')
    // for (let i = 0; i < myListItems.length; i++) {
    //     myListItems[i].textContent = 'I am a list thingy'
    // }
    $('.current-forecast').click(function() {
        var zip = document.getElementById('zipCode').value
        var url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&APPID=${apiKey}`
        var city = ''
        var weather = ''
        var temp = ''
        $.ajax({
            url: url,
            type: 'GET'
        }).then(function(response) {
            console.log(response, 'response')
            city = response.city.name
            weather = response.list[0].weather[0].main
            temp = response.list[0].main.temp
            temp = Math.floor(((9/5)* (temp - 273) + 32))
            $('#forecast').empty();
            $('#forecast').append(`<h2 id='city'>${city}</h2>`)
            $('#forecast').append(`<h3 id='weather'>${weather}</h3>`)
            $('#forecast').append(`<h1 id='temp'>${temp}&#8457</h1>`)
            $('#forecast').css('display', 'block')
        }).catch(function(err) {
            console.log(err)
        })
    })
})
function buttonFunction() {
    alert('alert')
}

