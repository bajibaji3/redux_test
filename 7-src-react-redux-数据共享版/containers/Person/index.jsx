import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  render() {
    return (
        <div>
          <h1>上方组件求和：{this.props.count}</h1>&nbsp;&nbsp;
          <input ref={c => this.nameNode = c} type="text" placeholder='输入姓名'/>
          <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄'/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
            {
              this.props.persons.map(p => {
                return (
                    <li key={p.id}>{p.name}--{p.age}</li>
                )
              })
            }
          </ul>
        </div>
    )
  }

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id: nanoid(), name, age}
    this.props.addPerson(personObj)
    this.nameNode.value = '';
    this.ageNode.value = '';
  }
}

export default connect(
  state => ({persons: state.ren, count: state.he}), //映射状态
  { //映射操作状态的方法
    addPerson: createAddPersonAction,
  }
)(Person)