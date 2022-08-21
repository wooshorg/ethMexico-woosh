const getParam = (name) => {
  const param = process.env['REACT_APP_' + name];
  if (!param) {
    return null;
  }
  return param;
};

export const PK = getParam('PK');
export const LENS_API = getParam('LENS_API');
export const MUMBAI_RPC_URL = getParam('MUMBAI_RPC_URL');