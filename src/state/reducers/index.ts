import { combineReducers } from "redux";
import organisationConfigurationReducer from "./organisationConfigurationReducer";

const reducers = combineReducers({
  organisationConfiguration: organisationConfigurationReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
