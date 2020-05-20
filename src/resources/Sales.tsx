import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, SimpleForm, TextInput, ReferenceInput, SelectInput, Edit, Create, Filter } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const SaleList = (props: any) => (
    <List filters={<SaleFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="Users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SaleEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="Users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <RichTextInput source="body" toolbar={[['bold', 'italic', 'underline', 'link']]} />
        </SimpleForm>
    </Edit>
);

export const SaleCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="Users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" validate={[required(), maxLength(15)]} />
            <RichTextInput multiline source="body" toolbar={[['bold', 'italic', 'underline', 'link', 'code-block']]} validation={{ required: true }} />
        </SimpleForm>
    </Create>
);

const SaleFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="Users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);


const required = (message = 'Required') =>
    (value: any) => value ? undefined : message;
const maxLength = (max: number, message = 'This value is too long') =>
    (value: any) => value && value.length > max ? message : undefined;