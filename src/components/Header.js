import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Home extends React.Component {
    render() {
        const style = {
            fontWeight: 500
        };
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="home-div">
                        <img role="presentation" src="http://i.imgur.com/FfUaWKn.png" height="170"/>
                        <div className="home-text">
                            <h1 className="home-text-main">WeathR</h1>
                            <h2>The first weather station using Material Design!</h2>
                        </div>
                        <div className="home-buttons">
                            <RaisedButton labelColor="#00bcd4" label="GET STARTED" onTouchTap={this.props.startBtn} style={style}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
