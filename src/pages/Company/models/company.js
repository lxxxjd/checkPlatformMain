import {getPreCompanyList,addPreCompany,updatePreCompany,deletePreCompany,createAccount,
  getCompanyList,addCompany,updateCompany,deleteCompany,passPreCompany,nopassPreCompany,
  getManRecord,getUrl,getCompany,getParent,isExistCompanyBycertcode,initCNAS} from '@/services/company';
import {getCNASCheckFourCertCodeListInfo} from '@/services/cnas';

import {addDefaultProject} from '@/services/CheckProject';
import {addDefaultInvoiceTitle} from '@/services/invoiceTitle';

import { getUserByCertCodeAndName} from '@/services/user';
import {getRecordCompanyList} from '@/services/Recordinfo';

export default {
  namespace: 'company',
  state: {
    getPreCompanyListResult:{},
    deletePreCompanyResult:{},
    addPreCompanyResult:{},
    updatePreCompanyResult:{},
    createAccountResult:{},
    getCompanyListResult:{},addCompanyResult:{},updateCompanyResult:{},deleteCompanyResult:{},

    getCNASCheckFourCertCodeListInfoResult:{},
    getCNASLevelFourListResult:{}, // 获得四级检查项目
  },
  effects: {


    *initCNAS({ payload,callback }, { call, put }) {
      const response = yield call(initCNAS, payload);
      if (callback) callback(response);
    },


    // 海关复制过来
    *getRecordCompanyList({ payload,callback }, { call, put }) {
      const response = yield call(getRecordCompanyList, payload);
      if (callback) callback(response);
    },


    *isExistCompanyBycertcode({ payload,callback }, { call, put }) {
      const response = yield call(isExistCompanyBycertcode, payload);
      if (callback) callback(response.data);
    },

    *getCompany({ payload,callback }, { call, put }) {
      const response = yield call(getCompany, payload);
      if (callback) callback(response);
    },

    *getParent({ payload,callback }, { call, put }) {
      const response = yield call(getParent, payload);
      if (callback) callback(response);
    },

    *getManRecord({ payload,callback }, { call, put }) {
      const response = yield call(getManRecord, payload);
      if (callback) callback(response);
    },

    *getUrl({ payload,callback }, { call, put }) {
      const response = yield call(getUrl, payload);
      if (callback) callback(response);
    },

    *getUserByCertCodeAndName({ payload,callback }, { call, put }) {
      const response = yield call(getUserByCertCodeAndName, payload);
      if (callback) callback(response);
    },


    *addDefaultInvoiceTitle({ payload,callback }, { call, put }) {
      const response = yield call(addDefaultInvoiceTitle, payload);
      if (callback) callback(response.data);
    },

    *addDefaultProject({ payload,callback }, { call, put }) {
      const response = yield call(addDefaultProject, payload);
      if (callback) callback(response.data);
    },

    *getCNASCheckFourCertCodeListInfo({ payload,callback }, { call, put }) {
      const response = yield call(getCNASCheckFourCertCodeListInfo, payload);
      yield put({
        type: 'getCNASCheckFourCertCodeListInfoResult',
        payload: response,
      });
      if (callback) callback(response);
    },

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

    *passPreCompany({ payload,callback }, { call, put }) {
      const response = yield call(passPreCompany, payload);
      yield put({
        type: 'updatePreCompanyResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },


    *nopassPreCompany({ payload,callback }, { call, put }) {
      const response = yield call(nopassPreCompany, payload);
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

    *createAccount({ payload,callback }, { call, put }) {
      const response = yield call(createAccount, payload);
      yield put({
        type: 'createAccountResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },

    // company
    *getCompanyList({ payload,callback }, { call, put }) {
      const response = yield call(getCompanyList, payload);
      yield put({
        type: 'getCompanyListResult',
        payload: response,
      });
      if (callback) callback(response);
    },



    *addCompany({ payload,callback }, { call, put }) {
      const response = yield call(addCompany, payload);
      yield put({
        type: 'addCompanyResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },

    *updateCompany({ payload,callback }, { call, put }) {
      const response = yield call(updateCompany, payload);
      yield put({
        type: 'updateCompanyResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },


    *deleteCompany({ payload,callback }, { call, put }) {
      const response = yield call(deleteCompany, payload);
      yield put({
        type: 'deleteCompanyResult',
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

    createAccountResult(state, { payload }) {
      return {
        ...state,
        createAccountResult: payload.data,
      };
    },

    getCompanyListResult(state, { payload }) {
      return {
        ...state,
        getCompanyListResult: payload,
      };
    },

    addCompanyResult(state, { payload }) {
      return {
        ...state,
        addCompanyResult: payload.data,
      };
    },

    updateCompanyResult(state, { payload }) {
      return {
        ...state,
        updateCompanyResult: payload.data,
      };
    },

    deleteCompanyResult(state, { payload }) {
      return {
        ...state,
        deleteCompanyResult: payload,
      };
    },

    getCNASCheckFourCertCodeListInfoResult(state, { payload }) {
      return {
        ...state,
        getCNASCheckFourCertCodeListInfoResult: payload.data,
      };
    },

  }

};
