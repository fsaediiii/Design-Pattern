import { NotificationTypesEnum } from "./typeEnum";

export interface INotification {
  id: number;
  message: string;
  type: NotificationTypesEnum;
}

export interface NotificationContextType {
  notifications: INotification[];
  handleAddNotification: (message: string, type: NotificationTypesEnum) => void;
}
