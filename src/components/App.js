import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar/Navbar';
import WeatherApp from './Weather/WeatherApp';

// import About from './About';
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
                    <Router>
                        <div>
                            <Navbar navbarItems={navbarItems} drawerTitle="WeathR"/>
                            <Route exact path="/" component={WeatherApp}/>
                            {/* <Route path="/about" component={About}/> */}
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
