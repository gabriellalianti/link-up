import { dataStore } from './types/interface';
// YOU SHOULD MODIFY THIS OBJECT BELOW ONLY
let data: dataStore = {
  users: [],
  sessions: []
};

const getData = (): dataStore => {
    return data;
  };
  
const setData = (newData: dataStore) => {
data = newData;
};

export { getData, setData };