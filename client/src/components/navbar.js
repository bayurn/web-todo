import React, { Component } from 'react'
import { Menu, Container, Sidebar } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Container style={{ margin: 20 }}>
                <Menu inverted vertical pointing>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick} />
                    <Menu.Item name='Friends' active={activeItem === 'Friends'} onClick={this.handleItemClick} />
                    <Menu.Menu />
                </Menu>
            </Container>
        )
    }
};
