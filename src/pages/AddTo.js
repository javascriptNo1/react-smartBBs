// 引入核心库
import React, { Component } from 'react';


// 引入头部导航组件
import HeadTitle from "components/HeadTitle";

// 输入框组件
import RegisterInput from '../components/RegisterInput';

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
import '../assets/styles/pagesStyles/addto.less';


// 引入图片
import headimg1 from '../assets/images/addto_03.jpg'
import headimg2 from '../assets/images/addto_06.jpg'
import headimg3 from '../assets/images/addto_08.jpg'
import headimg4 from '../assets/images/addto_10.jpg'
// 设置图片便签
const head1= <img src={headimg1} alt=""/>
const head2= <img src={headimg2} alt=""/>
const head3= <img src={headimg3} alt=""/>
const head4= <img src={headimg4} alt=""/>


// 设置模块
class AddTo extends Component{

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


    // 添加页面的返回操作触发的事件
    const clickHandler = (item, e) => {
      e.preventDefault();

      // 调用路由对象的goBack方法返回上一层
      this.props.router.goBack()
    };


    // 头部标题
    const dataAll = {
      title: '添加',
      amStyle:'secondary',
      leftNav: [{href: '#', icon: 'left-nav'}],
      // rightNav: [{ href: '#', icon: 'search'}],
      onAction: clickHandler,
    };

    // 图文列表1的配置
    const albums = [
      {
        title: '扫一扫',
        subTitle: '扫描二维码添加好友或群组'

      },
    ];
    // 图文列表2的配置
    const albums2 = [
      {
        title: '创建群组',
        subTitle: '与身边的朋友进入一个群聊'

      },
    ];

    // 图文列表3的配置
    const albums3 = [
      {
        title: '查找群组',
        subTitle: '按账号和群名称查找群组'

      },
    ];

    // 图文列表4的配置
    const albums4 = [
      {
        title: '附件好友',
        subTitle: '添加附近好友'

      },
    ];





    return (
      <Container fill={true} className='gam-dy-content'>


        {/*内容可以混动部分部分 暂时不要滚动scrollable={true}*/}
        <Container className='addto' >
          {/*头部导航*/}
          <HeadTitle date={dataAll} />

          {/*搜索框*/}
          <div className='seach'>
            <RegisterInput ico='icon icon-search' type='text' placeholder='账号名称' />
          </div>

          {/*其他功能*/}

          {/*图文列表1*/}
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
             <span className='icon icon-right'>  </span>
           </List>

          {/*图文列表2*/}
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
            <span className='icon icon-right'>  </span>
          </List>

          {/*图文列表3*/}
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
            <span className='icon icon-right'>  </span>
          </List>

          {/*图文列表4*/}
          <List>
            {albums4.map((album, i) => {
              return (
                <List.Item
                  {...album}
                  target="_blank"
                  media={head4}
                  desc={null}
                  href={i === 0 ? null : album.href}
                  key={i}
                />
              );
            })}
            <span className='icon icon-right'>  </span>
          </List>


        </Container>
      </Container>

    )
  }
}

AddTo.contextTypes = {
  // key                ： value
  // 需要全局对象名称     ： 传入的对象类型约束
  router  : React.PropTypes.object.isRequired
};

// 导出模块

export default AddTo;
