import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Sidebar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexFlow: 'column nowrap' }}>
                <Menu inverted vertical pointing>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick} />
                    <Menu.Item name='Friends' active={activeItem === 'Friends'} onClick={this.handleItemClick} />
                    <Menu.Menu />
                </Menu>
            </div>

        )
    }
};
