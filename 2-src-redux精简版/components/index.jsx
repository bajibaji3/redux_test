import React, {Component} from 'react';
//引入store，用于获取redux中保存的状态
import store from "../redux/store";

export default class Count extends Component {
  state = {
    name: '佩奇',
  }

  render() {
    return (
        <div>
          <h1>当前求和：{store.getState()}</h1>&nbsp;&nbsp;
          <select ref={c => this.selectNum = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
          <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>
        </div>
    )
  }

  //加法
  increment = () => {
    const {value} = this.selectNum;
    store.dispatch({type: 'increment', data: value*1})
  }

  //减法
  decrement = () => {
    const {value} = this.selectNum;
    store.dispatch({type: 'decrement', data: value*1})
  }

  //奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNum;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({type: 'increment', data: value*1})
    }
  }

  //异步加
  incrementAsync = () => {
    const {value} = this.selectNum;
    setTimeout(() => {
      store.dispatch({type: 'increment', data: value*1})
    }, 500)
  }

}