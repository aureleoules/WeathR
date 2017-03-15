import React from 'react';
import Header from './Header';
import Weather from './Weather';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
class WeatherApp extends React.Component {
    scrollWeather = () => {
        const node = ReactDOM.findDOMNode(this.weather);
        node.scrollIntoView({behavior: "smooth"});
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
                <Navbar navbarItems={navbarItems} drawerTitle="WeathR"/>
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
