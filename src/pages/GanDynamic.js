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

// 引入样式
import '../assets/styles/pagesStyles/gamdynamic.less';

// 引入图片
import headimg1 from '../assets/images/5.0_02.jpg'
import headimg2 from '../assets/images/5.0_02-03.jpg'
import headimg3 from '../assets/images/5.0_02-04.jpg'
import img1 from '../assets/images/5.0_06.jpg'
import img2 from '../assets/images/5.0_14.jpg'
import success from '../assets/images/5.0_03.jpg'


// 设置模块
class GanDynamic extends Component{

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

    // 设置图片便签
    const head1= <img src={headimg1} alt=""/>
    const head2= <img src={headimg2} alt=""/>
    const head3= <img src={headimg3} alt=""/>



    // 图文列表1的配置
    const albums = [
      {
        title: '风景',
        subTitle: '人呢？'

      },
    ];

    // 图文列表2的配置
    const albums2 = [
      {
        title: '智慧社区',
        subTitle: '明天谁去吃鸡啊？'
      },
    ];

    // 图文列表2的配置
    const albums3 = [
      {
        title: '智慧小区',
        subTitle: '测试'
      },
    ];


    return (
      <Container fill={true} className='gam-dy-content'>


        {/*内容可以混动部分部分 暂时不要滚动scrollable={true}*/}
        <Container className='gam-dy' >

          {/*盒子1*/}
          <div className='gam-dy-box'>

            {/*图文列表*/}
            <List>
              {albums.map((album, i) => {
                return (
                  <List.Item
                    {...album}
                    target="_blank"
                    media={head1}
                    desc={null}
                    href={i === 0 ? null : album.href}
                    key={i}
                  />
                );
              })}
            </List>
            {/*图片*/}
            <div className='imgbox'>
              <img src={img1} alt=""/>
            </div>
            <p className='boxfooter'>
              <span>1月10日</span>
              <img src={success} alt=""/>
            </p>
          </div>

          {/*盒子2*/}
          <div className='gam-dy-box'>

            {/*图文列表*/}
            <List>
              {albums2.map((album, i) => {
                return (
                  <List.Item
                    {...album}
                    target="_blank"
                    media={head2}
                    desc={null}
                    href={i === 0 ? null : album.href}
                    key={i}
                  />
                );
              })}
            </List>
            <p className='boxfooter'>
              <span>1月8日</span>
              <img src={success} alt=""/>
            </p>
          </div>

          {/*盒子3*/}
          <div className='gam-dy-box'>

            {/*图文列表*/}
            <List>
              {albums3.map((album, i) => {
                return (
                  <List.Item
                    {...album}
                    target="_blank"
                    media={head3}
                    desc={null}
                    href={i === 0 ? null : album.href}
                    key={i}
                  />
                );
              })}
            </List>
            {/*图片*/}
            <div className='imgbox'>
              <img src={img2} alt=""/>
            </div>
            {/*底部信息*/}
            <p className='boxfooter'>
              <span>1月8日</span>
              <img src={success} alt=""/>
            </p>

            {/*赞*/}
            <div className='good'>
              <p>
                <span>
                  2人觉得赞
                </span>
              </p>
              <p>
                <span>匿名网友：</span>
                健健康康
              </p>
            </div>
          </div>

          <p className='truefooter'>
            已经全部加载完毕
          </p>

        </Container>
      </Container>

    )
  }
}

GanDynamic.contextTypes = {
  // key                ： value
  // 需要全局对象名称     ： 传入的对象类型约束
  router  : React.PropTypes.object.isRequired
};

// 导出模块

export default GanDynamic;
