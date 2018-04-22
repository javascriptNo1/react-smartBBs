// 引入核心库
import React, { Component } from 'react';

// 引入组件样式
import  '../assets/styles/componentsStyles/headtitle.less';



// 引入妹子UI组件库
import {
  NavBar
} from 'amazeui-touch';

// 设置模块
class HeadTitle extends Component{

  // 初始化属性
  static defaultProps={
    leftspan : ''
  };

  // 实例化
  // 调用构造器
  constructor() {
    // 调用父类的构造器（调用构造器就一定要调用父类的构造器）
    super();


    // 初始化状态
    this.state = {};


  }

  render() {

    var dataAll=this.props.date;

    return (
      // 头部的标题

    // 头部导航
    <NavBar {...dataAll} />
    )
  }
}

// 导出模块

export default HeadTitle;
