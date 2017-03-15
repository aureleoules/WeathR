import React from 'react';
class ForecastHeader extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row forecast-header-div">
                    <div className="col-md-6 center-block">
                        <div className="forecast-header-top">
                                <i className={this.props.icon + " forecast-header-icon"}></i>
                                <span className="forecast-header-degree">{this.props.temp + '°C'} </span>
                            <p className="forecast-header-desc">{this.props.tempdesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ForecastHeader;
