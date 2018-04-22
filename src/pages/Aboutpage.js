// 引入核心库
import React, { Component } from 'react';

// 引入头部导航组件
import HeadTitle from "components/HeadTitle";


// 引入列表插件
import ServeList from 'components/ServeList'

// 引入页面样式
import '../assets/styles/pagesStyles/aboutpage.less'

// 引入妹子UI核心库
import {
  Container,
  List,
  Col,
  Grid
} from 'amazeui-touch';

// 引入图片
import img from '../assets/images/about_02.jpg'

// 设置模块
class Aboutpage extends Component{

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

    // 返回按钮函数
    // 添加页面的返回操作触发的事件
    const clickHandler = (item, e) => {
      e.preventDefault();

      // 调用路由对象的goBack方法返回上一层
      this.props.router.goBack()
    };
    // 头部标题
    const dataAll = {
      title: '关于我们',
      amStyle:'secondary',
      leftNav: [{href: '#', icon: 'left-nav'}],
      onAction: clickHandler,
    };

    return (
      <Container fill={true} className='more'>

        {/*头部导航*/}
        <HeadTitle date={dataAll} />

        {/*可滚动的内容 暂时不要滚动条scrollable={true}*/}
        <Container   className='about-content'>

          {/*大图片*/}
          <img src={img} alt=""/>

          <ServeList icon='icon icon-right' text='帮助与反馈'/>
          <a href="/">
            <ServeList icon='icon icon-right' text='欢迎页'/>
          </a>
          <ServeList icon='icon icon-right' text='用户协议'/>
          <ServeList icon='icon icon-right' text='二维码'/>

        </Container>

      </Container>
    )
  }


}

// 导出模块

export default Aboutpage;
