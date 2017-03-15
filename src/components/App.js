import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherApp from './WeatherApp';
import ForecastApp from './ForecastApp';
import '../css/weather-icons.min.css';
class App extends React.Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <BrowserRouter>
                        <div>
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
