type IEvent = {
  events: any;
  dispatch(event: string, data: any): void;
  subscribe(event: string, callback: any): void;
};

export class Event implements IEvent {
  public static CHANGE_HISTORY: string = "changeHistory";
  public static CHANGE_NAV_STATE: string = "changeNavState";
  public static CLICK_NAV_MINI: string = "clickNavMini";

  public events: any = {};
  public dispatch(event: string, data?: any): void {
    if (!this.events[event]) return;
    this.events[event].forEach((callback: (arg0: any) => void) =>
      callback(data)
    );
  }
  public subscribe(event: string, callback: any): void {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }
}

export default new Event();
