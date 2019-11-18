import {addCargoSort1,updateCargoSort1,deleteCargosort1,getCargosort1List} from '@/services/cargo';

export default {
  namespace: 'cargo',
  state: {
    // data: [],
    cargoList:[],
    addCargoResult:{},
    updateCargoResult:{},
    deleteCargoResult:{},
  },
  effects: {

    *getCargosort1List({ payload,callback }, { call, put }) {
      const response = yield call(getCargosort1List, payload);
      yield put({
        type: 'getSearchCargosResult',
        payload: response,
      });
      if (callback) callback(response);
    },

    *addCargoSort1({ payload,callback }, { call, put }) {
      const response = yield call(addCargoSort1, payload);
      yield put({
        type: 'getAddCargoResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },


    *updateCargoSort1({ payload,callback }, { call, put }) {
      const response = yield call(updateCargoSort1, payload);
      yield put({
        type: 'getUpdateCargoResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },


    *deleteCargosort1({ payload,callback }, { call, put }) {
      const response = yield call(deleteCargosort1, payload);
      yield put({
        type: 'getDeleteCargoResult',
        payload: response,
      });
      if (callback) callback(response.data);
    },




  },

  reducers: {
    getSearchCargosResult(state, { payload }) {
      return {
        ...state,
        cargoList: payload,
      };
    },

    getAddCargoResult(state, { payload }) {
      return {
        ...state,
        addCargoResult: payload.data,
      };
    },

    getUpdateCargoResult(state, { payload }) {
      return {
        ...state,
        updateCargoResult: payload.data,
      };
    },


    getDeleteCargoResult(state, { payload }) {
      return {
        ...state,
        deleteCargoResult: payload.data,
      };
    },



  }

};
