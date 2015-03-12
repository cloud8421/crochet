const NAMESPACE = 'crochet';

const Session = {
  set(key, val) {
    let stringified = JSON.stringify(val);
    sessionStorage.setItem(`${NAMESPACE}-${key}`, stringified);
  },
  get(key) {
    let value = sessionStorage.getItem(`${NAMESPACE}-${key}`);
    return JSON.parse(value);
  },
  clear() {
    sessionStorage.clear();
  }
}

export default Session;
