import CryptoJS from 'crypto-js';
import { useStore } from 'vuex';
const store = useStore();


export default () => {



  const generateNonce = () => {
    return Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 10)
    ).join('');
  };

  const getExpireTime = () => `${Date.now() + 60000}`;

  const generateSignature = (
    appSecretInfo: any,
    nonce: string,
    expireTime: string
  ) => {
    const { appId, appSecret } = appSecretInfo;
    if (!appId || !appSecret) {
      throw new Error('Invalid appId or secret not found');
    }
    const data = `${appSecret}${appId}${expireTime}${nonce}${appSecret}`;
    return CryptoJS.MD5(data).toString();
  };

  const phoneRegister = async (phone: string, token: string) => {
    console.log('phoneRegisterNOW');
    try {
      const nonce = generateNonce();
      const expireTime = getExpireTime();
      const sign = generateSignature(
        { appId: '803', appSecret: 'frhyqzrtweiiucktneyxnrstuzohnmkz' },
        nonce,
        expireTime
      );



      const res = await fetch(
        'http://localhost:5173/api/users/v1/phone_register',
        {
          method: 'POST',
          headers: {
            Etag: nonce + sign,
            Expire: expireTime,
            'X-AppId': '803',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
            'X-Domain': 'stg-h5.tzi789.com',
            'X-Platform': 'h5',
            'X-Language': 'zh-CN',
          },
          body: JSON.stringify({
            phone: phone,
            verifyCode: '666888',
            slidingCode: token,
          }),
        }
      );


      const data = await res.json();

      console.log('Data', data);
      console.log('Hook phone login data', data.code);
      return data.code;
    } catch (error) {

      console.log(error);
    }
    return 0;
  };

  const accountRegister = async (
    account: string,
    password: string,
    token: string
  ) => {
    console.log('accountRegisterAPI')
    try {
      const nonce = generateNonce();
      const expireTime = getExpireTime();
      const sign = generateSignature(
        { appId: '803', appSecret: 'frhyqzrtweiiucktneyxnrstuzohnmkz' },
        nonce,
        expireTime
      );



      const res = await fetch(
        'http://localhost:5173/api/users/v1/account_register',
        {
          method: 'POST',
          headers: {
            Etag: nonce + sign,
            Expire: expireTime,
            'X-AppId': '803',
            'Content-Type': 'application/json',
            'X-Domain': 'stg-h5.tzi789.com',
            'X-Platform': 'h5',
            'X-Language': 'zh-CN',
          },
          body: JSON.stringify({
            account: account,
            pwd: password,
            slidingCode: token,
          }),
        }
      );

      console.log(res);
      const data = await res.json();
      console.log('Hook account register Data', data);


      return data.code;

    } catch (error) {
      console.log(error);
    }
    return 0;
  };

  return {
    phoneRegister,
    accountRegister,

  };
};


