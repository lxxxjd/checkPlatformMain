import request from '@/utils/request';
import { stringify } from 'qs';

// addCargoSort1,updateCargoSort1,deleteCargosort1,getCargosort1List
export async function addCargoSort1(params) {
  return request(`/api/cargoSort1/add_cargosort1`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateCargoSort1(params) {
  return request(`/api/cargoSort1/update_cargosort1`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function deleteCargosort1(params) {
  return request(`/api/cargoSort1/delete_cargosort1`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function getCargosort1List() {
  return request(`/api/cargoSort1/get_cargosort1List`,{
    method: 'POST',
  });
}







