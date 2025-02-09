import NotificationList from "./component/notificationList";
import SendNotification from "./component/sendNotification";
import { NotificationProvider } from "./context/notification/provider";

function App() {
  return (
    <NotificationProvider>
      <SendNotification />
      <NotificationList />
    </NotificationProvider>
  );
}

export default App;
