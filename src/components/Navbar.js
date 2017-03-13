import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

class Navbar extends React.Component {
    state = {
        open: false
    };
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleClose = () => this.setState({open: false});

    render() {
        const self = this;
        const titleStyle ={
            fontWeight: 300
        }
        const items = this.props.navbarItems.map(function(item, key) {
            return (
                <Link key={key} to={item.linkTo} onTouchTap={() => {self.setState({open: false})}}>
                    <MenuItem className="drawer-item">{item.title}</MenuItem>
                </Link>
            );
        });
        return (
            <div>
                <AppBar className="remove-shadow fixed-navbar" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleToggle}/>
                <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <AppBar title={this.props.drawerTitle} titleStyle={titleStyle}showMenuIconButton={false}/>
                    {items}
                    <span className="drawer-bottom-text">by <a href="http://aurele.oules.com" target="_blank">@aureleoules</a></span>
                </Drawer>
            </div>
        )
    }
}

export default Navbar;
