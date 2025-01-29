import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { INotification, NotificationContextType } from "./types";

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    const handleNewNotification = (notification: INotification) => {
      setNotifications((prevState) => ({ ...prevState, notification }));
    };

    notificationService.subscribe(handleNewNotification);
    return () => {
      notificationService.unsubscribe(handleNewNotification);
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, handleAddNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  return context;
};
