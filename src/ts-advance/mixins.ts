// eslint-disable-next-line @typescript-eslint/ban-types
type IConstructor = new (...args: any[]) => {};

function OwnershipMixin<IBase extends IConstructor>(Base = class {} as IBase) {
  class Ownership extends Base {
    createdBy: string;
    modifiedBy: string;
  }
  return Ownership;
}

function OwnershipTimestampMixin<IBase extends IConstructor>(Base = class {} as IBase) {
  class OwnershipTimestamp extends Base {
    createdAt: Date;
    modifiedAt: Date;
    deletedAt: Date;
  }
  return OwnershipTimestamp;
}

class UserEntity extends OwnershipMixin(OwnershipTimestampMixin()) {
  firstName: string;
  lastName: string;
  age: number;
}

const obj1 = new UserEntity();
