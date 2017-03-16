import React from 'react';
import {List} from 'material-ui/List';
import {ListItem} from 'material-ui/List';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import weatherIcons from '../json/weatherIcons.json';
class Forecast extends React.Component {

    getForecastIcon = (codeJ) => {
        if (codeJ) {
            var prefix = 'wi wi-';
            var code = codeJ;
            var icon = weatherIcons[code].icon;

            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                icon = 'day-' + icon;
            }

            // Finally tack on the prefix.
            return icon = prefix + icon;
        }
        return null;
    }



    getDayFromDate = (date_input) => {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //week apparently starts on sunday
        var date = new Date(date_input);
        var dayId = date.getDay();
        console.log(date_input);
        console.log(dayId);
        return days[dayId];
    }

    render() {
        var items;
        var nestedObjs = {};
        var nestedItems = [];
        var average = [];
        if(this.props.details) {
            nestedObjs = Object.keys(this.props.details).map((item, key) => this.props.details[item]);
            Object.keys(nestedObjs).map((item, key) => {
                    var averageTemp = 0;
                    var averageCount = 0;
                    nestedItems.push([]);
                    Object.keys(nestedObjs[key]).map((itemJ, keyJ) => {
                        averageTemp += nestedObjs[item][itemJ].main.temp;
                        averageCount++;
                        nestedItems[key].push(
                            <ListItem
                                key={keyJ}
                                leftAvatar={<i className={this.getForecastIcon(nestedObjs[item][itemJ].weather[0].id)}></i>}
                                primaryText={itemJ.substring(0, itemJ.length - 3)}
                                secondaryText={nestedObjs[item][itemJ].weather[0].description.toUpperCase() + " • " + Math.round(nestedObjs[item][itemJ].main.temp) + "°C"}
                            />);
                    });
                    average.push(Math.round(averageTemp / averageCount));
                }
            );
            console.log(average);
            items = Object
                .keys(this.props.details)
                .map((item, key) =>
                    <ListItem
                        key={key}
                        primaryText={this.getDayFromDate(item)}
                        // secondaryText={average[key] + "°C"}
                        secondaryTextLines={1}
                        primaryTogglesNestedList={true}
                        nestedItems={nestedItems[key]}
                    />
                );
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-block">
                        <Card initiallyExpanded={true}>
                            <CardHeader className="forecast-card" title="Forecast" actAsExpander={true} showExpandableButton={true}/>
                            <CardText className="forecast-list" expandable={true}>
                                <List>
                                    {items}
                                </List>
                            </CardText>
                        </Card>

                    </div>
                </div>
            </div>
        )
    }
}

export default Forecast;
