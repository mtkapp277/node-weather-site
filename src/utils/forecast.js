const request = require('postman-request')

const forecast = (longitude, latitiude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=625f0806e4c7ba09865264eaa6dbce73&query=' + latitiude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            console.log('mk: ' + error)
            callback('Unable to find location', undefined)
        } else {       
            const temp = body.current.temperature
            const feels = body.current.feelslike
            const desc = body.current.weather_descriptions[0]
            const humidity = body.current.humidity
            //console.log(desc + '. It is currently ' + temp + ' degrees out. It feels like ' + feels + ' degrees out.')
            callback(undefined, desc + '. It is currently ' + temp + ' degrees out. It feels like ' + feels + ' degrees out.' + ' The current humidity is ' + humidity + '%.')
        }
    })
}

module.exports = forecast


