import BaseStore from "./_base";
import LayoutHistoryStore from "./LayoutHistory";
import ProjectStore from "./Project";

let _sync = function() {
  let payload = {
    name: ProjectStore.getName(),
    layouts: LayoutHistoryStore.getLayouts().toJSON()
  }
}

class _Sync extends BaseStore {
  constructor() {
    LayoutHistoryStore.addChangeListener(_sync);
    ProjectStore.addChangeListener(_sync);
  }
}

const Sync = new _Sync();

export default Sync;
