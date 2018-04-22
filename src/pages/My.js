// 引入核心库
import React, { Component } from 'react';

// 引入页面组件样式
import '../assets/styles/pagesStyles/my.less'

// 引入标题组件
import HeadTitle from '../components/HeadTitle';

// 引入妹子UI核心库
import {
  Container,
  List,
  Col,
  Grid
} from 'amazeui-touch';

// 引入图片
import headimg1 from '../assets/images/Personal_03.jpg'
import headimg2 from '../assets/images/Personal_06.jpg'
import img1 from '../assets/images/Personal_11.jpg'
import img2 from '../assets/images/Personal_14.jpg'
import img3 from '../assets/images/Personal_16.jpg'
import listimg1 from '../assets/images/Personal_22.jpg'
import listimg2 from '../assets/images/Personal_25.jpg'
import listimg3 from '../assets/images/Personal_27.jpg'
import listimg4 from '../assets/images/Personal_29.jpg'
import listimg5 from '../assets/images/Personal_31.jpg'
import listimg6 from '../assets/images/Personal_33.jpg'
import listimg7 from '../assets/images/Personal_35.jpg'
import listimg8 from '../assets/images/Personal_37.jpg'
import listimg9 from '../assets/images/Personal_40.jpg'
import listimg10 from '../assets/images/Personal_43.jpg'




// 设置模块
class My extends Component{

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

    // 头部标题
    const dataAll = {
      title: '个人中心',
      amStyle:'secondary',
    };



    return (
      <Container fill={true} className='my'>

        {/*头部导航*/}
        <HeadTitle date={dataAll} />

        {/*可滚动的内容 暂时不要滚动条scrollable={true}*/}
        <Container scrollable={true}  className='my-content'>

          {/*头像和信息*/}
          <div className='headbox'>
            <img src={headimg1} alt=""/>
            <span>Sirius保密</span><br/>
            <span className='imgtext'>积分</span>
            <span>120</span>
            <span>已签到</span>
            <a href='#mydata' className='icon icon-right'>    </a>
          </div>

          {/*账户信息*/}
          <Grid avg={3}>
            <Col>
              <img src={img1} alt=""/>
              <span>
                兑换码<br/>
                0
              </span>
            </Col>
            <Col>
              <img src={img2} alt=""/>
              <span>
                我的收藏<br/>
                0
              </span>
            </Col>
            <Col>
              <img src={img3} alt=""/>
              <span>
                我的钱包<br/>
                0.00
              </span>
            </Col>
          </Grid>

          {/*功能列表*/}
          <ul className='fslist'>
          <li>
            <img src={listimg1} alt=""/>
            <span>我的红包</span>
            <span className='icon icon-right-nav'>   </span>
          </li>
          <li>
            <img src={listimg2} alt=""/>
            <span>我的发布</span>
            <span className='icon icon-right-nav'>   </span>
          </li>
          </ul>

          {/*功能列表2*/}
          <ul className='fslist'>
            <li>
              <img src={listimg3} alt=""/>
              <span>普通订单</span>
              <span className='icon icon-right-nav'>   </span>
            </li>
            <li>
              <img src={listimg4} alt=""/>
              <span>配送订单</span>
              <span className='icon icon-right-nav'>   </span>
            </li>
            <li>
              <img src={listimg5} alt=""/>
              <span>团购订单</span>
              <span className='icon icon-right-nav'>   </span>
            </li>
            <li>
              <img src={listimg6} alt=""/>
              <span>积分订单</span>
              <span className='icon icon-right-nav'>   </span>
            </li>
            <li>
              <img src={listimg7} alt=""/>
              <span>服务订单</span>
              <span className='icon icon-right-nav'>   </span>
            </li>
          </ul>

          {/*后面三个功能列表*/}
          <ul className='fslist'>
            <li>
              <img src={listimg8} alt=""/>
              <span>万科新城</span>
              <span className='icon icon-right-nav'>  </span>
              <span className='switch'>切换</span>
            </li>
          </ul>

          <ul className='fslist'>
            <li>
              <img src={listimg9} alt=""/>
              <span>客服电话</span>
              <span className='icon icon-right-nav'>   </span>
            </li>
          </ul>

          <ul className='fslist'>
            <li>
              <img src={listimg10} alt=""/>
              <span>投诉建议</span>
              <span className='icon icon-right-nav'>   </span>
            </li>
          </ul>
        </Container>


      </Container>
    )
  }


}

// 导出模块

export default My;
