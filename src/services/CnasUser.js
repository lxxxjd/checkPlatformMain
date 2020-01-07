import request from '@/utils/request';
import { stringify } from 'qs';

export async function getCnasuserList(params) {
  return request(`/api/cnasuser/getCnasuserList`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateCnasuser(params) {
  return request(`/api/cnasuser/updateCnasuser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function addCnasuser(params) {
  return request(`/api/cnasuser/addCnasuser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function deleteCnasuser(params) {
  return request(`/api/cnasuser/deleteCnasuser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function getRepeatUsername(params) {
  return request(`/api/cnasuser/getRepeatUsername?username=${params.username}`);
}


