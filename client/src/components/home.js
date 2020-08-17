import React from 'react'
import { Sidebar, Header, Segment } from 'semantic-ui-react'
import Tables from './table'
import SideBar from './sidebar'

function Home() {
    return (
        <>
            <SideBar />
            <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'>WebApp Todo</Header>
                    <Tables />
                </Segment>
            </Sidebar.Pusher>
        </>
    )
}

export default Home