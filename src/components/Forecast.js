import React from 'react';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {ListItem} from 'material-ui/List';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
class Forecast extends React.Component {
    render() {
        const iconButtonElement = (
            <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
                <MoreVertIcon color={grey400}/>
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem onTouchTap={this.props.deleteBtn}>Delete</MenuItem>
            </IconMenu>
        );
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
                        nestedItems[key].push(<ListItem key={keyJ} primaryText={itemJ.substring(0, itemJ.length - 3)} secondaryText={Math.round(nestedObjs[item][itemJ].main.temp) + "°C"}/>);
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
                        primaryText={item}
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
                        <Card>
                            <CardHeader className="forecast-card"/>
                            <div className="forecast-list">
                                <List>
                                    {items}
                                </List>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        )
    }
}

export default Forecast;
