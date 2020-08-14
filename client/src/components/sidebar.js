import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Home from './home'
import { Link } from 'react-router-dom'

const SideBar = () => (
    <div style={{ height: '100vh' }}>
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
                <Menu.Item as='a'>
                    <Icon name='home' />
                <Link to="/">Home</Link>
            </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='plus' />
                <Link to="/add">Add</Link>
            </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='edit' />
                Edit
            </Menu.Item>
            </Sidebar>
            <Home />
        </Sidebar.Pushable>
    </div>
)

export default SideBar
