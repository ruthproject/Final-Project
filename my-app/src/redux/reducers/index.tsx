import { combineReducers } from "redux";

import assistantReducer from "./assistant.reducer";
import userReducer from "./user.reducer";
import studentReducer from "./student.reducer";
import projectReducer from "./project.reducer";
import assistanceHour from "./assistancehour.reducer";

export default combineReducers({
    users: userReducer,
    assistants: assistantReducer,
    students: studentReducer,
    projects: projectReducer,
    assistanceHour: assistanceHour
}
)