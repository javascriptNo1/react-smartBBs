// 引入核心库
import React, { Component } from 'react';


// 引入妹子UI核心库
import {
  Container,
  Group,
  Grid,
  Col,
  Slider,
  List,
  TabBar
} from 'amazeui-touch';


// 设置模块
class GamPostBar extends Component{

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

    // 获取路由激活时子组件
    const children = this.props.children;

    // 获取全局路由对象
    const router = this.context.router;



    return (
      <Container fill={true} className='home-content'>


        {/*内容可以混动部分部分 暂时不要滚动scrollable={true}*/}
        <Container >
          这是贴吧
        </Container>
      </Container>

    )
  }
}

GamPostBar.contextTypes = {
  // key                ： value
  // 需要全局对象名称     ： 传入的对象类型约束
  router  : React.PropTypes.object.isRequired
};

// 导出模块

export default GamPostBar;
