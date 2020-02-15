

import {getAllUsers,addUser,deleteUser,updateUser,checkUserName,verityUserNameC,getUrl,getDepartmentList} from '@/services/user';

export default {
  namespace: 'clientuser',
  state: {

  },
  effects: {

    *getAllUsers({ payload,callback }, { call, put }) {
      const response = yield call(getAllUsers, payload);
      if (callback) callback(response);
    },

    *addUser({ payload,callback }, { call, put }) {
      const response = yield call(addUser, payload);
      if (callback) callback(response.data);
    },

    *deleteUser({ payload,callback }, { call, put }) {
      const response = yield call(deleteUser, payload);
      if (callback) callback(response.data);
    },

    *updateUser({ payload,callback }, { call, put }) {
      const response = yield call(updateUser, payload);
      if (callback) callback(response.data);
    },

    *getUrl({ payload,callback }, { call, put }) {
      const response = yield call(getUrl, payload);
      if (callback) callback(response);
    },

    // 检测用户名重复
    *checkUserNameFetch({ payload,callback }, { call, put }) {
      const response = yield call(checkUserName, payload);
      if (callback) callback(response.data);
    },

    // 检测 用户名姓名重复
    *verityUserNameC({ payload,callback }, { call, put }) {
      const response = yield call(verityUserNameC, payload);
      if (callback) callback(response.data);
    },

    *getDepartmentList({ payload,callback }, { call, put }) {
      const response = yield call(getDepartmentList, payload);
      if (callback) callback(response);
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
