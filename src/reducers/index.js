import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer';
import uiReducer from './uiReducer';

const rootReducer =combineReducers({
    
    contacts: contactsReducer,
    ui: uiReducer,
  
})

export default rootReducer;