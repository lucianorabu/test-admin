import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import { ListGuesser, CrateGuesser, EditGuesser } from 'react-admin';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider2 = jsonServerProvider('http://www.mocky.io/v2/5ec3bdff30000097b039c397');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={EditGuesser} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;
