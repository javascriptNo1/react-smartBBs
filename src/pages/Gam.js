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


// 路由组件
import {
  Link
} from 'react-router';

// 设置模块
class Gam extends Component{

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
        {/*头部导航*/}
        <TabBar
          amStyle="primary"
          className='gam-nav'
        >
          <TabBar.Item
            component={Link}
            title="动态"
            selected={router.isActive('/app/gam', true)}
            to="/app/gam/"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            title="贴吧"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/app/gam/gampostbar', true)}
            to="/app/gam/gampostbar"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            title="活动"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/app/gam/gamactivity', true)}
            to="/app/gam/gamactivity"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            title="好友"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/app/gam/famfriends', true)}
            to="/app/gam/famfriends"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            title="+"
            className='add'
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/addto', true)}
            to="/addto"
            onlyActiveOnIndex
          />
        </TabBar>


        {/*内容可以混动部分部分 暂时不要滚动scrollable={true}*/}
        <Container >

          {children}
        </Container>
      </Container>

    )
  }
}
Gam.contextTypes = {
  // key                ： value
  // 需要全局对象名称     ： 传入的对象类型约束
  router  : React.PropTypes.object.isRequired
};

// 导出模块

export default Gam;
