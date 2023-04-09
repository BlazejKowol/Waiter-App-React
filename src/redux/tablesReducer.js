import { API_URL } from "../config";

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTablesById = ({ tables }, id) => 
  tables.find(table => table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const fetchTables = () => {
  return (dispatch) => {
  fetch(`${API_URL}/tables`)
  .then(res => res.json())
  .then(tables => dispatch(updateTables(tables)));
  };
};
export const updateTablesRequest = (editTables) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
        id: editTables.id,
        status: editTables.status,
        peopleAmount: editTables.peopleAmount,
        maxPeopleAmount: editTables.maxPeopleAmount,
        bill: editTables.bill,
      }),
    };
    
    fetch(`${API_URL}/tables/${editTables.id}`, options)
      .then(() => dispatch(updateTables(editTables)));
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES: 
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;