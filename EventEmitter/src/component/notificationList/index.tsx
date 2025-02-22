import { INotification } from "../../context/notification/types";
import { useNotification } from "../../hooks/useNotification";

const NotificationList = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="w-80 z-50 m-auto mt-5">
      <h3 className="text-lg font-semibold mb-2 text-white">نوتیفیکیشن‌ها:</h3>
      <ul className="space-y-2">
        {notifications.map((notification: INotification) => (
          <li
            key={notification.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-3 border-l-4 transition-all duration-300
            border-blue-500 hover:border-blue-700"
          >
            <span className="text-gray-700">{notification.message}</span>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
