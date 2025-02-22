type Callback<T> = (data: T) => void;

export class Observer<T> {
  private subscribers: Set<Callback<T>> = new Set();

  subscribe(callback: (notification: T) => void) {
    this.subscribers.add(callback);
  }

  unsubscribe(callback: (notification: T) => void) {
    this.subscribers.delete(callback);
  }

  notify(data: T) {
    this.subscribers.forEach((callback) => callback(data));
  }
}
