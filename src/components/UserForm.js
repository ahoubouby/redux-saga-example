import React from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { uuidv4 } from '../utils';

export default function UserForm({ onSubmit}) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const onHandleSubmit = e => {
        e.preventDefault();
        onSubmit({ id: uuidv4(), name, email });
    }
    // const handleOnSubmit = React.useMemo() => {
    //     props.onSubmit({ name, email });
    // }, []);
    return (
        <Form onSubmit={onHandleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input required type="text" value={name} onChange={e => setName(e.target.value)} />

            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input required type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit" color="primary">
                    Create
                </Button>
            </FormGroup>
        </Form>
    );
};