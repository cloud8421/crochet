import Immutable from 'immutable';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ProfileActionTypes from "../constants/ProfileConstants";
import UserRecord from '../records/user';
import Session from '../lib/session';
import Fbase from './Fbase';

let initialData = {};

if (Session.get('user')) {
  initialData = Session.get('user');
}

let user = new UserRecord(initialData);

let setUser = function(userData) {
  Fbase.userExists(userData.uid, function(user) {
    if (!user) {
      Fbase.createUser(userData);
    }
  });
  Session.set('user', userData);
  user = new UserRecord(userData);
}

let unsetUser = function() {
  Session.clear();
  user = new UserRecord(initialData);
}

let setProjects = function(uid) {
  Fbase.getProjects(uid, function(projects) {
    if (projects) {
      user = user.set('projects', new Immutable.List(projects));
    }
  });
}

class _Profile extends BaseStore {
  getUser() {
    return user;
  }
  getProjects() {
    return user.projects;
  }
}

const Profile = new _Profile();

Profile.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch (action.type) {
    case ProfileActionTypes.SET_USER:
      setUser(action.userData);
      setProjects(action.userData.uid);
      Profile.emitChange();
      break;
    case ProfileActionTypes.UNSET_USER:
      unsetUser();
      Profile.emitChange();
      break;
    default:
  }

});

export default Profile;
