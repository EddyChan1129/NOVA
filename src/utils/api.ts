export default () => {
    const accountLoginAPi = async (
    
        account: string,
        password: string,
        token: string
      ) => {
          const res = await fetch(
            'http://localhost:5173/api/users/v1/account_login',
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
        },{

        }
 

    return {

    };
  };
  
