import {createBrowserHistory, BrowserHistory, State} from 'history';

class MyHistory {
  history: BrowserHistory<State>

  constructor(history: BrowserHistory<State>) {
    this.history = history;
  }

  /**
   * replace
   * 替换路由
   */
  public replace(path: any) {
    this.history.replace(path);
  }

  /**
   * push
   */
  public push(path: any) {
    this.history.push(path);
  }

  /**
   * goBack
   */
  public goBack(num = -1) {
    this.history.go(num);
  }
}

export const customHistory = createBrowserHistory();

const myHistory:MyHistory = new MyHistory(customHistory);
export default myHistory;
