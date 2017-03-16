import React from 'react';
import Forecast from './Forecast';
import ForecastHeader from './ForecastHeader';
import constant from '../constants/constants';
import Navbar from './Navbar';
import weatherIcons from '../json/weatherIcons.json';
class ForecastApp extends React.Component {

    state = {};

    componentWillMount() {
        const self = this;
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.params.city}&units=metric&mode=json&appid=${constant.API_KEY}`).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server!");
            }
            return response.json();
        }).then(function(data) {
            self.saveForecast(data.list);
        });
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.params.city}&units=metric&APPID=${constant.API_KEY}`).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server!");
            }
            return response.json();
        }).then(function(data) {
            console.log(data);
            self.saveCurrentWeather(data);
        });

    }
    saveCurrentWeather = (data) => {
        this.setState({currentWeather: data});
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
            return dates.indexOf(item) === pos;
        });

        //Get all the days avaible from 'data';

        var forecast = [];
        for (let i = 0; i < dates.length; i++) {
            forecast[dates[i]] = {};
            for (let j = 0; j < data.length; j++) {
                var timestamp = data[j].dt_txt.split(" ");
                var day = timestamp[0];
                var hour = timestamp[1];
                if (day === dates[i]) {
                    forecast[day][hour] = data[j]
                }
            }
        }

        //Sort everything up.
        console.log(forecast);
        this.setState({forecast});
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
    getForecast = () => {
        if (this.state.forecast) {
            return this.state.forecast;
        }
        return null;
    }
    getCurrentWeatherTemp = () => {
        if (this.state.currentWeather) {
            return Math.round(this.state.currentWeather.main.temp);
        }
        return null;
    }

    getCurrentWeatherDesc = () => {
        if (this.state.currentWeather) {
            return this.state.currentWeather.weather[0].description.toUpperCase();
        }
        return null;
    }

    getCurrentWeatherIcon = () => {
        if (this.state.currentWeather) {
            var prefix = 'wi wi-';
            var code = this.state.currentWeather.weather[0].id;
            var icon = weatherIcons[code].icon;

            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                icon = 'day-' + icon;
            }

            // Finally tack on the prefix.
            return icon = prefix + icon;
        }
        return null;
    }

    getCurrentWeatherName = () => {
        if (this.state.currentWeather) {
            return this.state.currentWeather.name;
        }
        return null;
    }

    render() {
        var navbarItems = [
            {
                title: "Home",
                linkTo: '/'
            }, {
                title: "About",
                linkTo: '/about'
            }
        ];
        return (
            <div>
                <Navbar navbarItems={navbarItems} navTitle={this.getCurrentWeatherName()} drawerTitle="WeathR"/>
                <ForecastHeader icon={this.getCurrentWeatherIcon()} temp={this.getCurrentWeatherTemp()} tempdesc={this.getCurrentWeatherDesc()}/>
                <Forecast details={this.getForecast()}/>
            </div>
        )
    }
}

export default ForecastApp;
