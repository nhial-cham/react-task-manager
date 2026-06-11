// Import the dataset
import notifications from "../data/notifications";
// Import the Notification component
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  return (
    <div>
      {notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          message={notification}
        />
      ))
      }
    </div>
  );
}