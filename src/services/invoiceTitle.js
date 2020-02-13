import request from '@/utils/request';
import { stringify } from 'qs';


export async function addDefaultInvoiceTitle(params) {
  return request(`/api/invoiceTitle/add_default_invoiceTitle?certCode=${params.certCode}`);
}
