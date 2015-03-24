import Immutable from 'immutable';
import Uuid from '../lib/uuid';

export default Immutable.Record({
  uuid: Uuid.generate(),
  name: "My new project"
});
