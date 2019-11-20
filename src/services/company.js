import request from '@/utils/request';
import { stringify } from 'qs';

// getPreCompanyList,addPreCompany,updatePreCompany,deletePreCompany
export async function getPreCompanyList(params) {
  return request(`/api/precompany/getPreCompanyList`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function addPreCompany(params) {
  return request(`/api/precompany/addPreCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updatePreCompany(params) {
  return request(`/api/precompany/updatePreCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function deletePreCompany(params) {
  return request(`/api/precompany/deletePreCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function createAccount(params) {
  return request(`/api/precompany/createAccount`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
