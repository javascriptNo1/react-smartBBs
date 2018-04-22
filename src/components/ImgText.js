// 引入核心库
import React, { Component } from 'react';

// 引入组件样式
import '../assets/styles/componentsStyles/imgtext.less'

// 设置模块
class Imgtitle extends Component{

  // 初始化属性
  static defaultProps={

  };

  // 实例化
  // 调用构造器
  constructor(){
    // 调用父类的构造器（调用构造器就一定要调用父类的构造器）
    super();



    // 初始化状态
    this.state = {

    };
  }


  render(){

    return (
     <div className='imgtext'>
       <img src={this.props.url} alt=""/><br/>
       <span>{this.props.text}</span>
     </div>
    )
  }


}

// 导出模块

export default Imgtitle;
