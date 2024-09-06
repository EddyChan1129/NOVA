import CryptoJS from 'crypto-js';



export default () => {

    const test=()=>{

        console.log('hiiiiiiiiiiiii')
    };
   
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

      const getMessageCenterContent = async (phone: string, token: string) => {
        console.log('getMessageCenterContentNOW!!!!');
        try {
          const nonce = generateNonce();
          const expireTime = getExpireTime();
          const sign = generateSignature(
            { appId: '803', appSecret: 'frhyqzrtweiiucktneyxnrstuzohnmkz' },
            nonce,
            expireTime
          );
    
    
    
          const res = await fetch(
            'http://localhost:5173/api/msg_center/v1/get_user_all_announcement',
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
                "pagination": {
                    "page": 0,
                    "pageSize": 0
                  }
              }),
            }
          );
    
    
          const data = await res.json();
    
          console.log('Data', data);
      
          return data.code;
        } catch (error) {
    
          console.log(error);
        }
        return 0;
      };

    return {
        test,
        getMessageCenterContent

    };
};


