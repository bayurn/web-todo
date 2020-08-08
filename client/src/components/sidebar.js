import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Home from './home'

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
                Home
            </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='plus' />
                Add
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
