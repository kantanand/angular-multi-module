//Domain name will come from environment variables
export const DOMAIN: string = 'http://localhost:8000/';
//Domain with api endpoint
export const DOMAIN_API: string = DOMAIN + 'api/';
//Api constants
export const API_GET_AUTH_LOGIN: string = DOMAIN_API + 'get-auth-login/';
export const API_TOKEN_REFRESH: string = DOMAIN_API + 'api-token-refresh/';
export const API_TOKEN_VERIFY: string = DOMAIN_API + 'api-token-verify/';

export const API_LOGIN: string = DOMAIN_API + 'login/';


