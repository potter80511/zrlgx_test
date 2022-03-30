import jsCookie from 'js-cookie';

export class CookiesHelper {
  static getCookie(key: string) {
    const value = jsCookie.get(key);
    return value;
  }

  static setCookie(key: string, value: any): void {
    jsCookie.set(key, value);
  }

  static removeCookie(key: string): void {
    jsCookie.remove(key);
  }

  static getUserToken(): string {
    const userToken = jsCookie.get('user_token') || '';
    return userToken;
  }
}
