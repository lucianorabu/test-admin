import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { UserList } from './resources/Users';
import Dashboard from './resources/Dashboard'
import { SaleList, SaleEdit, SaleCreate } from './resources/Sales';
import { ListGuesser, CrateGuesser, EditGuesser } from 'react-admin';
import { MockedData, Authorization } from './mock-data';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { PcTheme } from './theme'
import './App.css';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = MockedData;
const authProvider = Authorization;

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard} theme={PcTheme}>
    <Resource name="Users" list={UserList} edit={EditGuesser} icon={UserIcon}/>
    <Resource name="Sales" list={SaleList} edit={SaleEdit} create={SaleCreate} icon={PostIcon}/>
  </Admin>
);

export default App;
