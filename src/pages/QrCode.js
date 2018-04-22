// 引入核心库
import React, { Component } from 'react';

// 引入页面样式
import '../assets/styles/pagesStyles/qrcode.less';

// 引入头部导航组件
import HeadTitle from "components/HeadTitle";

// 引入妹子UI核心库
import {
  Container,
  List,
  Col,
  Grid
} from 'amazeui-touch';

// 引入图片
import headimg1 from '../assets/images/qrcode_03.jpg'
import headimg2 from '../assets/images/qrcode_05.jpg'
import qrcode from '../assets/images/qrcode_08.jpg'

// 设置模块
class QrCode extends Component{

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
      title: '我的二维码',
      amStyle:'secondary',
      leftNav: [{href: '#', icon: 'left-nav'}],
      onAction: clickHandler,
    };

    return (
      <Container fill={true} className='qrcode'>

        {/*头部导航*/}
        <HeadTitle date={dataAll} />

        {/*可滚动的内容 暂时不要滚动条scrollable={true}*/}
        <Container   className='my-content'>
        <div className='content-box'>

          {/*头部信息*/}
          <div className='headimg'>
            <img src={headimg1} alt=""/>
            <span>&nbsp;Sirius</span><br/>
            <span>
              <img src={headimg2} alt=""/>
            </span>
          </div>

          {/*二维码*/}
          <img src={qrcode} alt=""/>

          {/*文字*/}
          <div className='footertext'>扫一扫二维码，加我为好友</div>
        </div>

        </Container>

      </Container>
    )
  }


}

// 导出模块

export default QrCode;
