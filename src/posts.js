import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, SimpleForm, TextInput, ReferenceInput, SelectInput, Edit, Create } from 'react-admin';

export const PostList = props => (
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

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
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

export const PostCreate = props => (
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
    value => value ? undefined : message;
const maxLength = (max, message = 'Too long') =>
    value => value && value.length > max ? message : undefined;