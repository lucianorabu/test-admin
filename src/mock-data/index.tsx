import fakeDataProvider from 'ra-data-fakerest';
import localAuth from './authProvider'

export const MockedData = fakeDataProvider({
  Sales: require('./sales.json'),
  Users: require('./users.json')
}, true);

export const Authorization = localAuth