import apis from '../../apis';

const {login} = apis;

const LoginService = {
  login: async (payload: any) => await login(payload),
};

export default LoginService;
