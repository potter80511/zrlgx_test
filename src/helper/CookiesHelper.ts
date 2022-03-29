import jsCookie from 'js-cookie';

export class CookiesHelper {
  static getUserToken(): string {
    const userToken = jsCookie.get('user_token') || '';
    return userToken;
  }
}
