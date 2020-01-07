import {getCnasuserList,updateCnasuser,addCnasuser,deleteCnasuser,getRepeatUsername} from '@/services/CnasUser';

export default {
  namespace: 'CnasUser',
  state: {
    getCheckUserNameResult:{},
  },
  effects: {

    *getCnasUserList({ payload,callback }, { call, put }) {
      const response = yield call(getCnasuserList, payload);
      if (callback) callback(response);
    },

    *updateCnasUser({ payload,callback }, { call, put }) {
      const response = yield call(updateCnasuser, payload);
      if (callback) callback(response.data);
    },

    *addCnasUser({ payload,callback }, { call, put }) {
      const response = yield call(addCnasuser, payload);
      if (callback) callback(response.data);
    },

    *deleteCnasUser({ payload,callback }, { call, put }) {
      const response = yield call(deleteCnasuser, payload);
      if (callback) callback(response.data);
    },

    *getRepeatUsername({ payload,callback }, { call, put }) {
      const response = yield call(getRepeatUsername, payload);
      yield put({
        type: 'getCheckUserNameResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },



  },

  reducers: {
    getCheckUserNameResult(state, { payload }) {
      return {
        ...state,
        checkUserNameResult: payload.data,
      };
    },
  }

};
