interface User {
  firstName: string;
  lastName: string;
  age: number;
}

interface UserWithMeta extends User {
  fullName: string;
}

function attachUserMeta(user: User): UserWithMeta;
function attachUserMeta(users: User[]): UserWithMeta[];
function attachUserMeta(payload: User | User[]): UserWithMeta | UserWithMeta[] {
  if (Array.isArray(payload)) {
    return payload.reduce((acc, user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      acc.push({ ...user, fullName });
      return acc;
    }, [] as UserWithMeta[]);
  } else {
    const fullName = `${payload.firstName} ${payload.lastName}`;
    return { ...payload, fullName };
  }
}

const user = {
  firstName: 'Akshay',
  lastName: 'Mahajan',
  age: 28,
};

const userMeta = attachUserMeta([user]);
// console.log(userMeta);
