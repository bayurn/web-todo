import React from 'react'
import { Header, Table } from 'semantic-ui-react'

function Tables() {
    return (
        <Table celled padded style={{ width: '1100px' }}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Opinion</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header textAlign='center'>
                            John Doe
                        </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>Male</Table.Cell>
                    <Table.Cell>johndoe@gmail.com</Table.Cell>
                    <Table.Cell>That's great i think, i love it!</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default Tables