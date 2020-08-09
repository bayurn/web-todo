import React from 'react'
import { Sidebar, Header, Segment } from 'semantic-ui-react'
import Tables from './table'

function Home() {
    return (
        <Sidebar.Pusher>
            <Segment basic>
                <Header as='h3'>WebApp Todo</Header>
                <Tables />
            </Segment>
        </Sidebar.Pusher>
    )
}

export default Home