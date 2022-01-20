/*
* 该文件专门为Count组件生成action对象
*/
import {INCREMNET, DECREMNET} from './constant'

export const createIncrementAction = (data) => {
  return {type: INCREMNET, data}
}

export const createDecrementAction = (data) => {
  return {type: DECREMNET, data}
}