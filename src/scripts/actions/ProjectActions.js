import AppDispatcher from "../dispatcher/AppDispatcher";
import ProjectActionTypes from "../constants/ProjectConstants";
import ProjectStore from "../stores/Project";

const Actions = {
  setName: function(name) {
    AppDispatcher.handleViewAction({
      type: ProjectActionTypes.SET_NAME,
      name: name
    });
  }
}

export default Actions;
