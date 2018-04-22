// 引入核心库
import React, { Component } from 'react';

// 引入页面样式
import '../assets/styles/pagesStyles/government.less'

// 引入标题组件
import HeadTitle from '../components/HeadTitle';

// 引入列表插件
import ServeList from 'components/ServeList'

// 引入妹子UI核心库
import {
  Container,
  Grid,
  Col
} from 'amazeui-touch';

// 引入图片
import imglist1 from '../assets/images/Govern_03.jpg'
import imglist2 from '../assets/images/Govern_06.jpg'
import imglist3 from '../assets/images/Govern_08.jpg'
import imglist4 from '../assets/images/Govern_10.jpg'
import imglist5 from '../assets/images/Govern_12.jpg'




// 设置模块
class Governmentpage extends Component{

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
      title: '政府公告',
      amStyle:'secondary',
      leftNav: [{href: '#', icon: 'left-nav'}],
      onAction: clickHandler,
    };

    return (
      <Container fill={true} className='government'>

        {/*头部导航*/}
        <HeadTitle date={dataAll} />

        {/*可滚动的内容 暂时不要滚动条scrollable={true}*/}
        <Container scrollable={true}  className='gover-content clearfloat'>
          {/*服务列表*/}
          <ServeList img={imglist1} text='关于继续降低职工医疗保险企业缴费比例的通知'/>
          <ServeList img={imglist2} text='江苏省教育厅公告'/>
          <ServeList img={imglist2} text='无锡市军队转业干部安置考试考核办法'/>
          <ServeList img={imglist2} text='江苏省政府免通知'/>
          <ServeList img={imglist2} text='铲除积雪  进化心灵'/>
          <ServeList img={imglist3} text='留言的懂的教育科技我是公主'/>
          <ServeList img={imglist4} text='关于寒假作业一点都没动的公示'/>
          <ServeList img={imglist5} text='关于博客模板没有找到的心情'/>
          <ServeList img={imglist1} text='关于博客要自己设计的无奈心情'/>
          <ServeList img={imglist1} text='关于博客要自己设计的无奈心情'/>

        </Container>

      </Container>
    )
  }


}

// 导出模块

export default Governmentpage;
