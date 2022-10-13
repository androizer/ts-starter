import { Action, AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: () => ({
    count: 0,
  }),
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

countSlice;

// const { increment, decrement, incrementByAmount } = countReducer.actions;

// const store = configureStore({ reducer: { [countReducer.name]: countReducer.reducer } });

type PayloadWithType<P = void, T extends string = string> = { payload: P; type: T };

type CaseReducer<State, A extends Action = AnyAction> = (state: State, action: A) => void | State;

type SliceCaseReducer<State> = {
  [k: string]: CaseReducer<State, PayloadWithType<any>>;
};

type CreateSliceOptions<State, CaseReducers extends SliceCaseReducer<State>, Name> = {
  name: Name;
  initialState: State | (() => State);
  reducers: CaseReducers;
};

type SliceInstance<
  State = any,
  CaseReducers extends SliceCaseReducer<State> = SliceCaseReducer<State>,
  Name extends string = string,
> = {
  name: Name;
  getInitialState: () => State;
  actions: {
    [P in keyof CaseReducers]: CaseReducers[P] extends (state: any, action: infer Action) => any
      ? Action extends { payload: infer Payload }
        ? (payload: Payload) => Action
        : () => PayloadWithType<undefined>
      : never;
  };
};

function createMySlice<
  State,
  Reducers extends SliceCaseReducer<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, Reducers, Name>): SliceInstance<State, Reducers, Name> {
  throw new Error(JSON.stringify(options));
}

const slice = createMySlice({
  name: 'count',
  initialState: () => ({ count: 0 }),
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByAmount: (state, action: PayloadWithType<number>) => {
      state.count += action.payload;
      return state;
    },
  },
});

slice;
