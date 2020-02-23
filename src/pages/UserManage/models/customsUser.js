import {getCustomsUsers,updateCustomsUser,addCustomsUser,deleteCustomsUser,getRepeatUsername} from '@/services/CustomsUser';
import {getCustomsList} from '@/services/costoms';

export default {
  namespace: 'CustomsUser',
  state: {},
  effects: {

    *getRepeatUsername({ payload,callback }, { call, put }) {
      const response = yield call(getRepeatUsername, payload);
      if (callback) callback(response.data);
    },

    *getCustomsList({ payload,callback }, { call, put }) {
      const response = yield call(getCustomsList, payload);
      if (callback) callback(response);
    },

    *getCustomsUserList({ payload,callback }, { call, put }) {
      const response = yield call(getCustomsUsers, payload);
      if (callback) callback(response);
    },

    *updateCustomsUser({ payload,callback }, { call, put }) {
      const response = yield call(updateCustomsUser, payload);
      if (callback) callback(response.data);
    },

    *addCustomsUser({ payload,callback }, { call, put }) {
      const response = yield call(addCustomsUser, payload);
      if (callback) callback(response.data);
    },

    *deleteCustomsUser({ payload,callback }, { call, put }) {
      const response = yield call(deleteCustomsUser, payload);
      if (callback) callback(response.data);
    },


  },

  reducers: {

  }

};
