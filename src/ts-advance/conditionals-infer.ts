// conditionals

// assertion ? TrueType : FalseType

type NumberToString<Type> = Type extends number ? string : never;

type t1 = NumberToString<'2'>;

// infer

function push<T extends string = string>(arr: T[], value: T): T[] {
  arr.push(value);
  return arr;
}

type MyReturnType<Type extends (...args: any) => any> = Type extends (
  ...args: any
) => infer ReturnType
  ? ReturnType
  : never;

type MyParamType<Type extends (...args: any) => any> = Type extends (
  ...args: infer ParamsType
) => any
  ? ParamsType
  : never;

type t2 = MyReturnType<typeof push>;
type t3 = MyParamType<typeof push>;
