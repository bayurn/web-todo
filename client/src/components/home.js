import React from 'react'
import { Sidebar, Header, Segment } from 'semantic-ui-react'

function Home() {
    return (

        <Sidebar.Pusher>
            <Segment basic>
                <Header as='h3'>WebApp Todo</Header>
            </Segment>
        </Sidebar.Pusher>
    )
}

export default Home