import Immutable from 'immutable';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ProfileActionTypes from "../constants/ProfileConstants";

let user = {
  uid: null,
  name: null,
  avatar: null
};

let setUser = function(userData) {
  user = userData;
}

class _Profile extends BaseStore {
  getUser() {
    return user;
  }
}

const Profile = new _Profile();

Profile.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch (action.type) {
    case ProfileActionTypes.SET_USER:
      setUser(action.userData);
      Profile.emitChange();
      break;
    default:
  }

});

export default Profile;
