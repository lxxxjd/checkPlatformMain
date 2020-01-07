import request from '@/utils/request';
import { stringify } from 'qs';


export async function getContactList(params) {
  return request(`/api/contact/getContactList`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateContact(params) {
  return request(`/api/contact/updateContact`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function addContact(params) {
  return request(`/api/contact/addContact`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function deleteContact(params) {
  return request(`/api/contact/deleteContact`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function getRepeatUsername(params) {
  return request(`/api/contact/getRepeatUsername?username=${params.username}`);
}


