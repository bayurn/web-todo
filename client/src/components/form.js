import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

function Forms() {
    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='First name'
                    placeholder='First name'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Last name'
                    placeholder='Last name'
                />
                <Form.Field
                    control={Select}
                    options={genderOptions}
                    label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                    placeholder='Gender'
                    search
                    searchInput={{ id: 'form-select-control-gender' }}
                />
            </Form.Group>
            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Opinion'
                placeholder='Opinion'
            />
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='joe@schmoe.com'
                // error={{
                //     content: 'Please enter a valid email address',
                //     pointing: 'below',
                // }}
            />
            <Button primary type='submit'>Submit</Button>
        </Form>
    )
}

export default Forms