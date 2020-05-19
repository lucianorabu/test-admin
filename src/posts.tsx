import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, SimpleForm, TextInput, ReferenceInput, SelectInput, Edit, Create } from 'react-admin';

export const PostList = (props:any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="body" validate={[required(), maxLength(15)]} />
        </SimpleForm>
    </Create>
);


const required = (message = 'Required') =>
    (value:any) => value ? undefined : message;
const maxLength = (max: number, message = 'Too long') =>
    (value:any) => value && value.length > max ? message : undefined;