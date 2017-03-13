import React from 'react';
import Forecast from './Forecast';
import ForecastHeader from './ForecastHeader';

class ForecastApp extends React.Component {

    componentWillMount() {
        const self = this;
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Versailles,us&units=metric&mode=json&appid=61137e48c84896f2f196f1788a7d9592`).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server!");
            }
            return response.json();
        }).then(function(data) {
            self.saveForecast(data.list);
        });
    }

    saveForecast = (data) => {
        var dates = [];
        for (let i = 0; i < data.length; i++) {
            var date = data[i].dt_txt.split(" ")[0];
            if (dates[i - 1] !== date) {
                dates.push(date);
            }
        }
        dates = dates.filter(function(item, pos) {
            return dates.indexOf(item) == pos;
        });

        //Get all the days avaible from 'data';

        var forecast = [];
        for (let i = 0; i < dates.length; i++) {
            forecast[dates[i]] = {};
            for (let j = 0; j < data.length; j++) {
                var timestamp = data[j].dt_txt.split(" ");
                var day = timestamp[0];
                var hour = timestamp[1];
                if(day === dates[i]) {
                    forecast[day][hour] = data[j]
                }
            }
        }
        //Sort everything up.
        console.log(forecast);
        //Actual world best sorting algorythm.
        //Sort multiple JSON Objs by Day then Hours:
        /*
            {
                day1: {
                    h1: Obj,
                    h2: Obj,
                    h3: Obj
                },
                day2: {
                    h1: Obj,
                    h2: Obj,
                    h3: Obj
                }
            }
        */

    }

    render() {
        return (
            <div>
                <ForecastHeader/>
                <Forecast/>
            </div>
        )
    }
}

export default ForecastApp;
