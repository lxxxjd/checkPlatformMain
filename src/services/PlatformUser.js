import request from '@/utils/request';
import { stringify } from 'qs';


export async function getPlatformUserList(params) {
  return request(`/api/PlatformUser/getPlatformUserList`,{
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
export async function addPlatformUser(params) {
  return request(`/api/PlatformUser/addPlatformUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function deletePlatformUser(params) {
  return request(`/api/PlatformUser/deletePlatformUser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

