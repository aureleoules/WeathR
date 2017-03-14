import React from 'react';
class ForecastHeader extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row forecast-header-div">
                    <div className="col-md-6 center-block">
                        <div className="forecast-header-top">
                                <i className="wi wi-day-sunny forecast-header-icon"></i>
                                <span className="forecast-header-degree">28°</span>
                            <p className="forecast-header-desc">BROKEN CLOUDS</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ForecastHeader;
