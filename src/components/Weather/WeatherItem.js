import React from 'react';
import {ListItem} from 'material-ui/List';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class WeatherItem extends React.Component {
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
            <ListItem
                leftAvatar={<i className={this.props.iconName}></i>}
                primaryText={this.props.title}
                secondaryText={this.props.subtitle}
                secondaryTextLines={1}
                onTouchTap={this.props.onTouchTap}
                rightIconButton={rightIconMenu}
            />
        )
    }
}

export default WeatherItem;
