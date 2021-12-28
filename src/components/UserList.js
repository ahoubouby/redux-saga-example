import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UserList = ({ users }) => {
    return (
        <ListGroup>
            {users.map((user, index) => {
                return <ListGroupItem key={index}>
                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ fexGrow: 1 }}>{user.name} {user.email}</div>
                        <div>
                            <Button outline color='danger'>
                                Delete
                            </Button>
                        </div>
                    </section>
                </ListGroupItem>
            })}
        </ListGroup>
    )
}

export default UserList;