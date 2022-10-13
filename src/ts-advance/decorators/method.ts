import { debounce } from 'lodash-es';

function Debounce(millis = 1000) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = debounce(descriptor.value, millis);
  };
}

class ABC {
  @Debounce(2000)
  hello() {
    return 'world';
  }
}

const obj2 = new ABC();
console.log(obj2.hello());
console.log(obj2.hello());
console.log(obj2.hello());
console.log(obj2.hello());
