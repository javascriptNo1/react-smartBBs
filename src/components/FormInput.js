// 引入核心库
import React, { Component } from 'react';

import '../assets/styles/componentsStyles/formInput.less';

// 引入合并对象插件
import assign from 'object-assign';

// 设置模块
class FormInput extends Component{

  // 初始化状态
  constructor(props){
    super(props)

    this.state={


    }
  }
  // 默认属性
  static defaultProps={
    type:'text'
  };


  // 自定义事件触发时执行的函数

  // 键盘键入时触发的函数
  truecheck(e){
   this.setState({
     username:e.target.value
   })
    // this.props.onChange();
  }



  render(){
    // 拼接原有的类名和通过属性传入的变量类名
    var cl='ico '+ this.props.ico;

    // 因为this.props是不能操作的对象所有需要将其拷贝一份进行操作
    var props=assign({},this.props);


    // 将克隆的this.props内不需要的属性删除，再使用
    delete props.ico;

    // 渲染组件
    return (
      <div className='formbox'>
        <i className= { cl } >
        </i>
        {/*<input placeholder={this.props.pla} type={this.props.type} value={this.state.username} />*/}
        <input {...props} />
      </div>
    )
  }






}



// 导出模块

export default FormInput;



