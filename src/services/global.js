import { ajax } from '@/utils/axios';

export async function getUserInfo() {
  return ajax({ url: '/api/userInfo' });
}
