import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn43110389Reducer from '../features/SignIn43110389/redux/reducers'
import Dashboard13110388Reducer from '../features/Dashboard13110388/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn43110389: SignIn43110389Reducer,
Dashboard13110388: Dashboard13110388Reducer,

});