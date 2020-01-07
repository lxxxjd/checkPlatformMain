import {getContactList,updateContact,addContact,deleteContact,getRepeatUsername} from '@/services/ContactUser';

export default {
  namespace: 'Contact',
  state: {},
  effects: {

    *getRepeatUsername({ payload,callback }, { call, put }) {
      const response = yield call(getRepeatUsername, payload);
      if (callback) callback(response.data);
    },


    *getContactList({ payload,callback }, { call, put }) {
      const response = yield call(getContactList, payload);
      if (callback) callback(response);
    },

    *updateContact({ payload,callback }, { call, put }) {
      const response = yield call(updateContact, payload);
      if (callback) callback(response.data);
    },

    *addContact({ payload,callback }, { call, put }) {
      const response = yield call(addContact, payload);
      if (callback) callback(response.data);
    },

    *deleteContact({ payload,callback }, { call, put }) {
      const response = yield call(deleteContact, payload);
      if (callback) callback(response.data);
    },


  },

  reducers: {

  }

};
