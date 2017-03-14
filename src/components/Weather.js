import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import WeatherItem from './WeatherItem';
import weatherIcons from '../json/weatherIcons.json';
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
class Weather extends React.Component {

    state = {
        cities: [],
        meteo: {}
    }

    refreshMeteo = () => {
        var meteo = [];
        var city;
        const self = this;
        for (var i = 0; i < this.state.cities.length; i++) {
            city = this.state.cities[i];
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=61137e48c84896f2f196f1788a7d9592`).then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server!");
                }
                return response.json();
            }).then(function(data) {
                meteo[data.name] = data;
                var length = Object.keys(meteo).length;
                if (length === self.state.cities.length) {
                    self.setMeteo(meteo);
                }
            });
        }
    }
    setMeteo = (meteo) => {
        this.setState({meteo})
    }

    componentWillMount() {
        var storage = localStorage.getItem('cities');
        if (storage) {
            var cities = storage.split(',');
            // eslint-disable-next-line
            this.state.cities = cities;
        } else {
            this.setState({cities: []});
        }
        this.refreshMeteo();
    }

    addCity = () => {
        var cities = this.state.cities;
        var city = this.city.getValue();
        city = capitalizeFirstLetter(city);
        if (!city || this.state.cities.indexOf(city) > -1) {
            alert("City invalid");
        } else {
            cities.push(city);
        }
        this.city.getInputNode().value = "";
        this.city.getInputNode().placeholder = "Your city";
        this.setState({cities});
        this.saveCities();
        this.refreshMeteo();
    }
    saveCities = () => {
        localStorage.setItem("cities", this.state.cities);
    }

    removeCity = city => {
        var value = this.state.cities.indexOf(city);
        if (value !== -1) {
            this.state.cities.splice(value, 1);
        }
        this.saveCities();
        this.forceUpdate()
    }

    getTemp = (key) => {
        if (this.state.meteo[key]) {
            return this.state.meteo[key].weather[0].main + ' • ' + Math.round(this.state.meteo[key].main.temp) + '°C';
        }
        return 'Loading...';
    }

    getIcon = (key) => {
        if (this.state.meteo[key]) {
            var prefix = 'wi wi-';
            var code = this.state.meteo[key].weather[0].id;
            var icon = weatherIcons[code].icon;

            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                icon = 'day-' + icon;
            }

            // Finally tack on the prefix.
            return icon = prefix + icon;
        }
        return 'LOADING...';
    }

    render() {
        const btnStyle = {
            marginLeft: '5px'
        }
        const textStyle = {
            color: '#05a2b6'
        }
        const items = Object.keys(this.state.cities).map(key => <WeatherItem key={key} title={this.state.cities[key]} iconName={this.getIcon(this.state.cities[key])} subtitle={this.getTemp(this.state.cities[key])} ref={this.state.cities[key]} deleteBtn={() => {
            this.removeCity(this.state.cities[key])
        }}/>);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="weather-div">
                            <div className="weather-main centered">
                                <TextField hintText="Your city" inputStyle={textStyle} ref={input => {
                                    this.city = input
                                }}/>
                                <RaisedButton label="ADD" primary={true} style={btnStyle} onTouchTap={this.addCity}/>
                            </div>
                            {this.state.cities.length > 0 && <List>
                                <Subheader>Saved cities:</Subheader>
                                {items}
                                <Divider inset={true}/>
                            </List>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Weather;
