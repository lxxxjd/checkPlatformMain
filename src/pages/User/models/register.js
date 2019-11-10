import { fakeRegister } from '@/services/api';
import { checkUserName } from '@/services/user';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';


export default {
  namespace: 'register',

  state: {
    status: undefined,
    checkUserNameResult:{},
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },

  *checkUserName({ payload,callback }, { call, put }) {
    const response = yield call(checkUserName, payload);
    yield put({
      type: 'getCheckUserNameResult',
      payload: response,
    });
    if (callback) callback(response.data);
  },

  reducers: {
    registerHandle(state, { payload }) {
      setAuthority('user');
      reloadAuthorized();
      return {
        ...state,
        status: payload.status,
      };
    },

    getCheckUserNameResult(state, { payload }) {
      return {
        ...state,
        checkUserNameResult: payload.data,
      };
    },


  },
};
