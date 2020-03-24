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


export async function getCompanyList(params) {
  return request(`/api/company/getCompanyList`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function addCompany(params) {
  return request(`/api/company/addCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateCompany(params) {
  return request(`/api/company/updateCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function passPreCompany(params) {
  return request(`/api/precompany/passPreCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function nopassPreCompany(params) {
  return request(`/api/precompany/nopassPreCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}





export async function deleteCompany(params) {
  return request(`/api/company/deleteCompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}



export async function getParent(params) {
  return request(`/api/company/getParent?certCode=${params.certCode}`);
}


export async function getCompany(params) {
  return request(`/api/company/getCompany?certCode=${params.certCode}`);
}

export async function isExistCompanyBycertcode(params) {
  return request(`/api/company/isExistCompanyBycertcode?certcode=${params.certcode}`);
}



export async function getManRecord(params) {
  return request(`/api/recordman/getRecord`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function getUrl(params) {
  return request(`/api/cert_report/get_pdf?osspath=${params.url}`);
}











