import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}


export async function checkUserName(params) {
  return request(`/api/user/check_user?username=${params.username}`);
}
