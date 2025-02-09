import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { INotification, NotificationContextType } from "./types";
import { observerNotification } from "../../observer/notificationService";

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    const updateNotifications = (notification: INotification[]) => {
      setNotifications(notification);
    };

    observerNotification.subscribe(updateNotifications);
    return () => {
      observerNotification.unsubscribe(updateNotifications);
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications: notifications,
        addNotification:
          observerNotification.addNotification.bind(observerNotification),
        removeNotification:
          observerNotification.removeNotification.bind(observerNotification),
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
