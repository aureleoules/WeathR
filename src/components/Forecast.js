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
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-block">
                        <Card>
                            <CardHeader className="forecast-card"/>
                                <div className="forecast-list">
                                    <List>
                                        <ListItem primaryText="16°" secondaryText="DARK CLOUDS" secondaryTextLines={1}/>
                                        <ListItem primaryText="16°" secondaryText="DARK CLOUDS" secondaryTextLines={1}/>
                                        <ListItem primaryText="16°" secondaryText="DARK CLOUDS" secondaryTextLines={1}/>
                                        <ListItem primaryText="16°" secondaryText="DARK CLOUDS" secondaryTextLines={1}/>
                                        <ListItem primaryText="16°" secondaryText="DARK CLOUDS" secondaryTextLines={1}/>
                                        <ListItem primaryText="16°" secondaryText="DARK CLOUDS" secondaryTextLines={1}/>
                                        <Divider inset={true}/>
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
