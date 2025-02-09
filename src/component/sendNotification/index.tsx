import { useState } from "react";
import { NotificationTypesEnum } from "../../enum/typeEnum";
import { useNotification } from "../../hooks/useNotification";

const SendNotification = () => {
  const { addNotification } = useNotification();
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationTypesEnum>(
    NotificationTypesEnum.success
  );

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg space-y-4 text-black mt-10">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="پیام جدید بنویسید..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value as NotificationTypesEnum)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value={NotificationTypesEnum.success}>✅ Success</option>
        <option value={NotificationTypesEnum.info}>ℹ️ Info</option>
        <option value={NotificationTypesEnum.error}>❌ Error</option>
      </select>

      <button
        onClick={() => addNotification(message, type)}
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
      >
        ارسال اعلان
      </button>
    </div>
  );
};

export default SendNotification;
