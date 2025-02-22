import { NotificationTypesEnum } from "../../enum/typeEnum";

export interface INotification {
  id: number;
  message: string;
  type: NotificationTypesEnum;
}

export interface NotificationContextType {
  notifications: INotification[];
  addNotification: (message: string, type: NotificationTypesEnum) => void;
  removeNotification: (id: number) => void;
}
