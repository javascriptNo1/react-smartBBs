// 引入核心库
import React, { Component } from 'react';


// 引入页面样式
import '../assets/styles/pagesStyles/moreserve.less'

// 引入头部导航组件
import HeadTitle from "components/HeadTitle";

// 引入列表插件
import ServeList from 'components/ServeList'

// 引入妹子UI核心库
import {
  Container,
  List,
  Col,
  Grid
} from 'amazeui-touch';

// 引入图片
import imglist1 from '../assets/images/moer_03.jpg'
import imglist2 from '../assets/images/moer_06.jpg'
import imglist3 from '../assets/images/moer_08.jpg'
import imglist4 from '../assets/images/moer_10.jpg'
import imglist5 from '../assets/images/moer_12.jpg'
import imglist6 from '../assets/images/moer_14.jpg'


// 设置模块
class MoreServepage extends Component{

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
      title: '更多服务',
      amStyle:'secondary',
      leftNav: [{href: '#', icon: 'left-nav'}],
      onAction: clickHandler,
    };


    return (
      <Container fill={true} className='more'>

        {/*头部导航*/}
        <HeadTitle date={dataAll} />

        {/*可滚动的内容 暂时不要滚动条scrollable={true}*/}
        <Container   className='more-content'>

          {/*服务列表*/}
          <ServeList icon='icon icon-right' img={imglist1} text='百度搜索'/>
          <ServeList icon='icon icon-right' img={imglist2} text='天气查询'/>
          <ServeList icon='icon icon-right' img={imglist3} text='快递查询'/>
          <ServeList icon='icon icon-right' img={imglist4} text='在线问诊'/>
          <ServeList icon='icon icon-right' img={imglist5} text='优酷直播'/>
          <a href="#aboutpage">
            <ServeList icon='icon icon-right' img={imglist6} text='江苏智天下'/>
          </a>


        </Container>

      </Container>
    )
  }


}

// 导出模块

export default MoreServepage;
