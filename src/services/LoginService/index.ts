import apis from '@/apis';

const {login} = apis;

const LoginService = {
  login: async (payload: any, options: any) => await login(payload, options),
};

export default LoginService;
