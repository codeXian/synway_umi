import { routerRedux } from 'dva/router';
import { getUserInfo } from '@/services/global';

export default {
  namespace: 'global',
  state: {
    text: 'hello umi_dva',
    login: false,
    userInfo: null,
  },
  reducers: {
    setText(state) {
      state.text = 'setted dva';
    },
    signin(state) {
      state.login = true;
    },
    setUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
  },
  effects: {
    *getUserInfo(state, { call, put }) {
      const res = yield call(getUserInfo);
      yield put({
        type: 'setUserInfo',
        payload: res,
      });
    },
    *login(action, { call, put }) {
      yield put({
        type: 'signin',
      });
      yield put(routerRedux.push('/admin'));
    },
    // eslint-disable-next-line require-yield
    *throwError() {
      throw new Error('hi error');
    },
  },
};
