import React from 'react'
import { Card } from 'semantic-ui-react'
import Forms from './form'

function TagCard() {
    // const description = [
    //     'Amy is a violinist with 2 years experience in the wedding industry.',
    //     'She enjoys the outdoors and currently resides in upstate New York.',
    // ].join(' ')

    return (
        <div >
            <Card style={{ width: '1000px' }}>
                <Card.Content header='Please Fill this Form' />
                <Card.Content>
                    <Forms />
                </Card.Content>
            </Card>
        </div>
    )
}

export default TagCard