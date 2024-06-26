import apis from '../../apis/index';

const {login} = apis;

const LoginService = {
  login: async payload => await login(payload),
};

export default LoginService;
