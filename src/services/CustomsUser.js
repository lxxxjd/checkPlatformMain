import request from '@/utils/request';
import { stringify } from 'qs';


export async function getCustomsUsers(params) {
  return request(`/api/customsuser/getCustomsUsers`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateCustomsUser(params) {
  return request(`/api/customsuser/updateCustomsUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function addCustomsUser(params) {
  return request(`/api/customsuser/addCustomsUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function deleteCustomsUser(params) {
  return request(`/api/customsuser/deleteCustomsUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

