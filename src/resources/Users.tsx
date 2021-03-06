import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';
import UrlField from '../urlField'

export const UserList = (props:any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
            <UrlField source="website" />
            <EditButton />
        </Datagrid>
    </List>
);