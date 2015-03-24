import ProjectRecord from '../records/project';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ProjectActionTypes from "../constants/ProjectConstants";

const MAX_LAYOUTS = 50;

let project = new ProjectRecord();

let _setName = (newName) => {
  project = project.set('name', newName);
}

let _addLayout = (layout) => {
}

class _Project extends BaseStore {
  getName() {
    return project.name;
  }
  getLayouts() {
    return project.layouts;
  }
  addLayout(layout) {
    let layouts =  project.layouts
                    .takeLast(MAX_LAYOUTS - 1)
                    .push(layout);
    project = project.set('layouts', layouts);
  }
}

const Project = new _Project();

Project.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch (action.type) {
    case ProjectActionTypes.SET_NAME:
      _setName(action.name);
      Project.emitChange();
      break;
    default:
  }

});

export default Project;
