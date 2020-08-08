import React from 'react'
import { Sidebar, Header, Segment, Card, Icon } from 'semantic-ui-react'

function Home() {
    const description = [
        'Amy is a violinist with 2 years experience in the wedding industry.',
        'She enjoys the outdoors and currently resides in upstate New York.',
    ].join(' ')

    return (
        <Sidebar.Pusher>
            <Segment basic>
                <Header as='h3'>WebApp Todo</Header>
                <Card>
                    <Card.Content header='About Amy' />
                    <Card.Content description={description} />
                    <Card.Content extra>
                        <Icon name='user' />4 Friends
                    </Card.Content>
                </Card>
            </Segment>
        </Sidebar.Pusher>
    )
}

export default Home