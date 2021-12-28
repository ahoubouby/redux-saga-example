import React from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function UserForm(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const log = e => {
        e.preventDefault();
    }
    // const handleOnSubmit = React.useMemo() => {
    //     props.onSubmit({ name, email });
    // }, []);
    return (
        <Form onSubmit={log}>
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