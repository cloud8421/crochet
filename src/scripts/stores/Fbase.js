import Firebase from 'firebase';

const FIREBASE_URL = "https://torid-torch-7672.firebaseio.com";

class Fbase {
  constructor() {
    this.ref = new Firebase(FIREBASE_URL);
  }
  auth(successCb, errorCb) {
    this.ref.authWithOAuthPopup("facebook", (error, authData) => {
      if (error) {
        errorCb(error);
      } else {
        successCb(authData);
      }
    });
  }
}

export default new Fbase();
