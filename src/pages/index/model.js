export default {
  namespace: 'count',
  state: {
    a: {
      b: {
        c: {
          count: 0,
        }
      }
    }
  },
  reducers: {
    increase(state) {
      state.a.b.c.count += 1;
    },
    decrease(state) {
      state.a.b.c.count -= 1;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(history);
      });
    },
  },
};
