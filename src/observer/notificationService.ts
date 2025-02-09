import { Observer } from ".";
import { NotificationTypesEnum } from "../enum/typeEnum";
import { INotification } from "../context/notification/types";

// این کلاس اجازه می دهد:
// 1.یک نوتیفیکیشن جدید اضافه کنیم
// 2.یک نوتیفیکیشن رو حذف کنیم
// 3.همه ی کامپوننت های متصل را مطلع کنیم

class ObserverNotification extends Observer<INotification[]> {
  private notifications: INotification[] = [];
  private idCounter: number = 1;

  addNotification(message: string, type: NotificationTypesEnum) {
    const newNotification = { id: this.idCounter++, message, type };
    this.notifications = [...this.notifications, newNotification];
    this.notify(this.notifications);
  }

  removeNotification(id: number) {
    this.notifications = this.notifications.filter((notif) => notif.id !== id);
    this.notify(this.notifications);
  }

  getNotification() {
    return this.notifications;
  }
}

export const observerNotification = new ObserverNotification();
