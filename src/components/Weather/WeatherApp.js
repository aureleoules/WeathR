import React from 'react';
import Header from './Header';
import Weather from './Weather';
import ReactDOM from 'react-dom';
class WeatherApp extends React.Component {
    scrollWeather = () => {
        const node = ReactDOM.findDOMNode(this.weather);
        node.scrollIntoView({behavior: "smooth"});
    }
    render() {
        return (
            <div>
                <Header startBtn={() => {
                    this.scrollWeather()
                }}/>
                <Weather ref={(input) => {
                    this.weather = input
                }}/>
            </div>
        )
    }
}

export default WeatherApp;
