import request from '@/utils/request';
import { stringify } from 'qs';


export async function getCnasuserList(params) {
  return request(`/api/Cnasuser/getCnasuserList`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateCnasuser(params) {
  return request(`/api/Cnasuser/updateCnasuser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function addCnasuser(params) {
  return request(`/api/Cnasuser/addCnasuser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function deleteCnasuser(params) {
  return request(`/api/Cnasuser/deleteCnasuser`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

