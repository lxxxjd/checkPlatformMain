import { stringify } from 'qs';
import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function getRepeatTel(params) {
  return request(`/api/PlatformUser/getRepeatTel?tel=${params.tel}`);
}

export async function getRepeatUsername(params) {
  return request(`/api/PlatformUser/getRepeatUsername?username=${params.username}`);
}

export async function checkUserName(params) {
  return request(`/api/user/check_user?username=${params.username}`);
}

// 发送验证码
export async function sendVerify(params) {
  return request(`/api/verify/send_verify?tel=${params.tel}`);
}

// 验证验证码
export async function verifyTel(params) {
  return request(`/api/verify/verify_tel?verifyCode=${params.verifyCode}&tel=${params.tel}`);
}

// 得到所有user
export async function getUserList() {
  return request(`/api/user/getUserList`);
}


// 预注册公司
export async function registerPreCompany(params) {
  return request(`/api/precompany/register_precompany`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function addPlatformUser(params) {
  return request(`/api/PlatformUser/addPlatformUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updatePlatformUser(params) {
  return request(`/api/PlatformUser/updatePlatformUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}




export async function getAllUsers(params) {
  return request(`/api/user/getAllUsers`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateUser(params) {
  return request(`/api/user/updateUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addUser(params) {
  return request(`/api/user/addUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function deleteUser(params) {
  return request(`/api/user/deleteUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function getUrl(params) {
  return request(`/api/cert_report/get_pdf?osspath=${params.url}`);
}

export async function verityUserNameC(params) {
  return request(`/api/user/check_user_namec?certCode=${params.certCode}&nameC=${params.nameC}`);
}

// 部门管理
export async function getDepartmentList(params) {
  return request(`/api/department/get_departmentList`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

