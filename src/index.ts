import LoginService from './services/LoginService';
import NotificationService from './services/NotificationService';

type IProps = {
  LoginService: any;
  NotificationService: any;
};

export const Services: IProps = {
  LoginService,
  NotificationService,
};
