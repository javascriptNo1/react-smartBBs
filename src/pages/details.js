// 引入核心库
import React, { Component } from 'react';


// 设置模块
class details extends Component{

  // 初始化属性
  static defaultProps={

  };

  // 实例化
  // 调用构造器
  constructor(props){
    // 调用父类的构造器（调用构造器就一定要调用父类的构造器）
    super(props);



    // 初始化状态
    this.state = {

    };
  }


  render(){
    var data=JSON.parse(this.props.params.data)
    return (
     <div>
       <h1>这是商品列表</h1>
       <h3>{data.title}</h3>
       <p>{data.subTitle}</p>
     </div>
    )
  }


}

// 导出模块

export default details;
