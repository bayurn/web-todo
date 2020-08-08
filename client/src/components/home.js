import React from 'react'
import { Sidebar, Header, Segment } from 'semantic-ui-react'
import TagCard from './card'

function Home() {
    return (
        <Sidebar.Pusher>
            <Segment basic>
                <Header as='h3'>WebApp Todo</Header>
                <TagCard />
            </Segment>
        </Sidebar.Pusher>
    )
}

export default Home