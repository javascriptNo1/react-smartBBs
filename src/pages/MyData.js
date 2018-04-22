// 引入核心库
import React, { Component } from 'react';

// 引入样式
import '../assets/styles/pagesStyles/mydata.less'

// 引入头部导航组件
import HeadTitle from "components/HeadTitle";

// 引入退出按钮组件
import Formbutton from '../components/Formbutton';

// 引入妹子UI核心库
import {
  Container,
  List,
  Col,
  Grid
} from 'amazeui-touch';

// 引入图片
import maximg1 from '../assets/images/data_02.jpg'
import img2 from '../assets/images/data_05.jpg'

// 设置模块
class MyData extends Component{

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

    // 添加页面的返回操作触发的事件
    const clickHandler = (item, e) => {
      e.preventDefault();

      // 调用路由对象的goBack方法返回上一层
      this.props.router.goBack()
    };

    // 头部标题
    const dataAll = {
      title: '我的资料',
      amStyle:'secondary',
      leftNav: [{href: '#', icon: 'left-nav'}],
      rightNav: [{ href: '#',title:'保存'}],
      onAction: clickHandler,
    };

    return (
      <Container fill={true} className='mydata'>

        {/*头部导航*/}
        <HeadTitle date={dataAll} />

        {/*可滚动的内容 暂时不要滚动条scrollable={true}*/}
        <Container   className='my-content'>

          {/*头部大图*/}
          <img src={maximg1} alt=""/>

          {/*功能列表*/}
          <ul className='fslist'>
            <li>
              <span>昵称</span>
              <span className='icon icon-right-nav arrow'>   </span>
              <span className='switch'>sirius</span>
            </li>
            <li>
              <span>性别</span>
              <span className='icon icon-right-nav arrow'>   </span>
              <span className='switch'>保密</span>
            </li>
            <li>
              <span>生日</span>
              <span className='icon icon-right-nav arrow'>   </span>
              <span className='switch'>2016-12-25</span>
            </li>
            <a href="#qrcode">
              <li>
                <span>二维码</span>
                  <span className='icon icon-right-nav arrow'>   </span>
                <span className='switch'>
                  <img src={img2} alt=""/>
                </span>
              </li>
            </a>
            <li>
              <span>个性签名</span>
              <span className='icon icon-right-nav arrow'>   </span>
            </li>
          </ul>

          <ul className='fslist'>
            <li>
              <span>收货地址</span>
              <span className='icon icon-right-nav arrow'>   </span>
              <span className='switch c18'>修改/添加</span>
            </li>
          </ul>

          <ul className='fslist'>
            <li>
              <span>登录密码</span>
              <span className='icon icon-right-nav arrow'>   </span>
              <span className='switch c18'>修改</span>
            </li>
          </ul>

        </Container>

        {/*底部的退出按钮*/}
        <div className='but'>
          <a href="#loginpage">
            <Formbutton black={true}  value='退出账号'/>
          </a>
        </div>

      </Container>

    )
  }


}

// 导出模块

export default MyData;
