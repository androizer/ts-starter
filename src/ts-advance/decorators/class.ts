import { v4 as uuidv4 } from 'uuid';

function WithId() {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (fn: Function) {
    fn.prototype.id = uuidv4();
  };
}

interface Id {
  id: string;
}

@WithId()
class NameId implements Id {
  id: string;
  constructor(public name: string) {}
}

const obj2 = new NameId('Hello');
console.log(obj2.id);

const obj3 = new NameId('World');
console.log(obj3.id);
