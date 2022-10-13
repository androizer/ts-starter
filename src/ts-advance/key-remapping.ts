type NameAge = {
  name: string;
  age: number;
  breed: string;
  address: string;
};

type Listener<T> = {
  [P in keyof T as `on${Capitalize<P & string>}Change`]: (value: T[P]) => void;
};

function listenToObject<T>(obj: T, listeners: Listener<T>) {
  throw new Error('Method not implemented');
}

const obj: NameAge = {
  name: 'Cadbury',
  age: 10,
  breed: 'Labra',
  address: 'dsfhdsufhdsf',
};

listenToObject(obj, {});
