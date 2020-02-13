import request from '@/utils/request';
import { stringify } from 'qs';



export async function addDefaultProject(params) {
  return request(`/api/check_project/add_default_project?certCode=${params.certCode}`);
}

