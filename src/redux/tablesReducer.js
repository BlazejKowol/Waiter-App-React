import { API_URL } from "../config";

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTablesById = ({ tables }, id) =>
  tables.find(table => table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLES = createActionName('EDIT_TABLES');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTables = payload => ({ type: EDIT_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(tables => dispatch(updateTables(tables)))
        }
      });
  };
};
export const updateTablesRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: table.id,
        status: table.status,
        peopleAmount: table.peopleAmount,
        maxPeopleAmount: table.maxPeopleAmount,
        bill: table.bill,
      }),
    };

    fetch(`${API_URL}/tables/${editTables.id}`, options)
      .then(() => {
        console.log(dispatch, table)
        dispatch(editTables(table))
      });
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    case EDIT_TABLES:
      return statePart.map(
        table => (table.id === action.payload.id ? { ...table, ...action.payload } : table))
    default:
      return statePart;
  };
};
export default tablesReducer;