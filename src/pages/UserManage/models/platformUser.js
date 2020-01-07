import {getPlatformUserList,updatePlatformUser,addPlatformUser,deletePlatformUser,getRepeatUsername} from '@/services/PlatformUser';

export default {
  namespace: 'PlatformUser',
  state: {
    getCheckUserNameResult:{},
  },
  effects: {

    *getRepeatUsername({ payload,callback }, { call, put }) {
      const response = yield call(getRepeatUsername, payload);
      yield put({
        type: 'getCheckUserNameResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },


    *getPlatformUserList({ payload,callback }, { call, put }) {
      const response = yield call(getPlatformUserList, payload);
      if (callback) callback(response);
    },

    *updatePlatformUser({ payload,callback }, { call, put }) {
      const response = yield call(updatePlatformUser, payload);
      if (callback) callback(response.data);
    },

    *addPlatformUser({ payload,callback }, { call, put }) {
      const response = yield call(addPlatformUser, payload);
      if (callback) callback(response.data);
    },

    *deletePlatformUser({ payload,callback }, { call, put }) {
      const response = yield call(deletePlatformUser, payload);
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
