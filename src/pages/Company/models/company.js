import {getPreCompanyList,addPreCompany,updatePreCompany,deletePreCompany} from '@/services/company';

export default {
  namespace: 'company',
  state: {
    getPreCompanyListResult:{},
    deletePreCompanyResult:{},
    addPreCompanyResult:{},
    updatePreCompanyResult:{},
  },
  effects: {

    *getPreCompanyList({ payload,callback }, { call, put }) {
      const response = yield call(getPreCompanyList, payload);
      yield put({
        type: 'getPreCompanyListResult',
        payload: response,
      });
      if (callback) callback(response);
    },

    *addPreCompany({ payload,callback }, { call, put }) {
      const response = yield call(addPreCompany, payload);
      yield put({
        type: 'addPreCompanyResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },

    *updatePreCompany({ payload,callback }, { call, put }) {
      const response = yield call(updatePreCompany, payload);
      yield put({
        type: 'updatePreCompanyResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },


    *deletePreCompany({ payload,callback }, { call, put }) {
      const response = yield call(deletePreCompany, payload);
      yield put({
        type: 'deletePreCompanyResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },







  },

  reducers: {
    getPreCompanyListResult(state, { payload }) {
      return {
        ...state,
        cargoList: payload,
      };
    },

    deletePreCompanyResult(state, { payload }) {
      return {
        ...state,
        deletePreCompanyResult: payload.data,
      };
    },

    addPreCompanyResult(state, { payload }) {
      return {
        ...state,
        addPreCompanyResult: payload.data,
      };
    },

    updatePreCompanyResult(state, { payload }) {
      return {
        ...state,
        updatePreCompanyResult: payload.data,
      };
    },

  }

};
