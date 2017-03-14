import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import WeatherApp from './WeatherApp';
import ForecastApp from './ForecastApp';
import '../css/weather-icons.min.css';
class App extends React.Component {
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
            <MuiThemeProvider>
                <div>
                    <BrowserRouter>
                        <div>
                            <Navbar navbarItems={navbarItems} drawerTitle="WeathR"/>
                            <Match exactly pattern="/" component={WeatherApp}/>
                            <Match pattern="/forecast/:city" component={ForecastApp}/>
                        </div>
                    </BrowserRouter>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
