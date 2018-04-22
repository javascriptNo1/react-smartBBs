// 引入核心库
import React, { Component } from 'react';

// 引入社交-好友的页面样式
import '../assets/styles/pagesStyles/gamfriends.less'


// 引入妹子UI核心库
import {
  Container,
  TabBar,
  Grid,
  Col
} from 'amazeui-touch';


// 引入图片
import nav1 from '../assets/images/8_03.jpg'
import nav2 from '../assets/images/8_05.jpg'
import nav3 from '../assets/images/8_07.jpg'
import cont1 from '../assets/images/8_13.jpg'
import cont2 from '../assets/images/8_16.jpg'


// 设置模块
class GamTrends extends Component{

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
        <Container className='gan-fr'>

          {/*内容导航栏*/}
          <Grid avg={3}>
            <Col>
              <img src={nav1} alt=""/><br/>
              <span>消息</span>
            </Col>
            <Col>
              <img src={nav2} alt=""/><br/>
              <span>朋友</span>
            </Col>
            <Col>
              <img src={nav3} alt=""/><br/>
              <span>群组</span>
            </Col>
          </Grid>

          {/*正文部分*/}
          <div className='contentminbox'>
            <img src={cont1} alt=""/>
            <span>新的朋友</span>
          </div>
          <div className='contentminbox'>
            <img src={cont2} alt=""/>
            <span>群通知</span>
          </div>


        </Container>
      </Container>

    )
  }
}


GamTrends.contextTypes = {
  // key                ： value
  // 需要全局对象名称     ： 传入的对象类型约束
  router  : React.PropTypes.object.isRequired
};




// 导出模块

export default GamTrends;
// ReactDOM.render(routes2, document.getElementById('app'));
