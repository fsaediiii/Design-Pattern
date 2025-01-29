type Callback<T> = (data: T) => void;

export class Observer<T> {
  private subscribers: Set<Callback<T>> = new Set();

  // اضافه کردن مشترک
  subscribe(callback: Callback<T>): void {
    this.subscribers.add(callback);
  }

  // حذف مشترک
  unsubscribe(callback: Callback<T>): void {
    this.subscribers.delete(callback);
  }

  // اطلاع‌رسانی به همه مشترکین
  notify(data: T): void {
    this.subscribers.forEach((callback) => callback(data));
  }
}
