// 引入核心库
import React, { Component } from 'react';

import '../assets/styles/componentsStyles/formbutton.less';


// 设置模块
class FormInput extends Component{

  // 初始化属性
  static defaultProps={

  };


  // 子模块自自定义事件函数
  child(){
    console.log('这是子组件的this：',this);
    this.props.onClick();
  }



  // 渲染函数
  render(){
    var black='formbutton';

    // 判断传入的black是否开启，开启时为100%的大盒子
    if (this.props.black){
      black+= ' black';
    }

    // 自定义对象存放接收的属性
    var obj={
      className:black,
      value:this.props.value,
    }

    // 判断是否有传入绑定事件
    if(this.props.onClick){
      obj.onClick=this.props.onClick;
    }


    return (
      <input type="button" {...obj}/>

    )
  }


}

// 导出模块

export default FormInput;


