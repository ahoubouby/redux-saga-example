import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UserList = ({ users = [], onDeleteUser }) => {

    return (
        <ListGroup>
            {users.map((user, index) => {
                return <ListGroupItem key={index}>
                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ fexGrow: 1 }}>{user.name} {user.email}</div>
                        <div>
                            <Button outline color='danger' onClick={user => onDeleteUser(user)}>
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