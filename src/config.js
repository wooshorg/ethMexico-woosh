const getParam = (name) => {
  const param = process.env['REACT_APP_' + name];
  if (!param) {
    return null;
  }
  return param;
};

export const PK = getParam('PK');
export const LENS_API = getParam('LENS_API');
export const LENS_HUB_CONTRACT = getParam('LENS_HUB_CONTRACT');
export const MUMBAI_RPC_URL = getParam('MUMBAI_RPC_URL');