/**
 顶级组件
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  TabBar,

} from 'amazeui-touch';

import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory
} from 'react-router';

//  首页（购物）
import HomePage from './HomePage';

//  服务
import ServicePage from './ServicePage';

// 商品详情
import Deatils from './details';

// 欢迎页面
import Welcomepage from './Welcomepage';

// 登录
import LoginPage from './LoginPage';

//  注册
import Registerpage from './Registerpage';

//  社交模块
import Gam from './Gam';

//  社交-动态
import GanDynamic from './GanDynamic';

//  社交-贴吧
import GamPostBar from './GamPostBar';

// 社交-活动
import GamActivity from './GamActivity';

//  社交-朋友
import GamFriends from './GamFriends';

//  添加
import AddTO from './AddTo';

// 我的（个人中心）
import My from './My';

// 我的资料
import MyData from './MyData';

// 我的二维码
import QrCode from './QrCode';

// 更多服务
import MoreServepage from './MoreServepage';

// 政府公告
import Governmentpage from './Governmentpage';

// 关于我们
import Aboutpage from './Aboutpage'

export default class App extends Component {
  render() {


    // 获取路由激活时子组件
    const children = this.props.children;


    // 获取全局路由对象

    const router = this.context.router;

    // 路由切换动画（不知道这玩意干嘛用的）
    const transition = children.props.transition || 'sfr';
    return (
      <Container direction="column" id="sk-container">
        <Container direction="column"
          transition={transition}
          // fade transition example
          // transition='fade'
          // transitionEnterTimeout={450}
          // transitionLeaveTimeout={300}
        >
          {children}
          {/*{React.cloneElement(children, {key: location.key})}*/}
        </Container>

        <TabBar
          amStyle="primary"
          className='app-nav'
        >
          <TabBar.Item
            component={Link}
            icon="home"
            title="购物"
            selected={router.isActive('/app/', true)}
            to="/app/"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="gear"
            title="服务"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/app/service', true)}
            to="/app/service"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="info"
            title="社交"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/app/gam', true)||router.isActive('/app/gam/gampostbar', true)||router.isActive('/app/gam/gamactivity', true)||router.isActive('/app/gam/famfriends', true)}
            to="/app/gam"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="person"
            title="我的"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/app/my', true)}
            to="/app/my"
            onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}
// App.propTypes  组件参数类型约束
// App.defaultProps 默认属性值
// 当前组件要使用的全局对象信息，把结果放入实例的context属性上
App.contextTypes = {
  // key                ： value
  // 需要全局对象名称     ： 传入的对象类型约束
  router  : React.PropTypes.object.isRequired
};



// 定义路由
const routes = (
  <Router history={hashHistory}>
    {/*欢迎页面*/}
    <Route path="/" component={Welcomepage}/>

    {/* 登录 */}
    <Route path="loginpage" component={LoginPage}/>

    {/*/!* 注册 *!/*/}
    <Route path="registerpage" component={Registerpage} />

    {/*添加*/}
    <Route path="AddTO" component={AddTO} />

    {/*我的资料*/}
    <Route path="mydata" component={MyData} />

    {/*我的二维码*/}
    <Route path="qrcode" component={QrCode} />

    {/*更多服务*/}
    <Route path='moreservepage' component={MoreServepage}/>

    {/*政府公告*/}
    <Route path='governmentpage' component={Governmentpage}/>

    {/*关于我们*/}
    <Route path='aboutpage' component={Aboutpage}/>

    {/*/!* 应用界面 *!/*/}
    <Route path="/app" component={App}>

      {/*/!*默认进入购物页面*!/*/}

      <IndexRoute component={HomePage} />

      {/*商品详情*/}
      <Route path="/:app/details/:data" component={Deatils}/>

      {/*/!*服务页*!/*/}
      <Route path="/app/service" component={ServicePage} />

      {/*社交页面*/}
      <Route path="gam" component={Gam}>
        {/*默认进入懂态页面*/}
        <IndexRoute component={GanDynamic} />

        {/*贴吧*/}
        <Route path="gampostbar" component={GamPostBar} />

        {/*活动*/}
        <Route path="gamactivity" component={GamActivity} />


        {/*好友页面*/}
        <Route path="famfriends" component={GamFriends} />

      </Route>

      {/*我的（个人中心）*/}
      <Route path="my" component={My} />

    </Route>


  </Router>
);

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById('app'));

/*
*   实现步骤：
*
*       1. 整理APP组件结构
*           Container  direction='column' <==目的让子元素布局变为“纵向”伸缩布局，如果没有指定高度，自动撑满多余的内容
*              Conatiner <==伸缩子元素，自动撑满多余空间
*              TabBar  <==高度固定
*
*       2. 配置路由
*           const routes = (
*                       <Router>
*                           <Route path='/' component={App}>
*                               <IndexRoute component={HomePage}>
*
*                               <Route path='/home' component={HomePage}></Route>
*                               <Route path='/service' component={ServicePage}></Route>*
*                           </Route>
*                       </Router>
*
*           )
*
*        3. 当请求hash地址切换时，路由组件，会自动把路线对应的组件挂到App组件的this.props.children属性上
*         Container  direction='column' <==目的让子元素布局变为“纵向”伸缩布局，如果没有指定高度，自动撑满多余的内容
*              Conatiner <==伸缩子元素，自动撑满多余空间
*                 this.props.children
*              TabBar  <==高度固定
*
*        4. 补充：
*             如果要在“受路由管理的”组件上下文中，使用路由对象，必须提前做声明
*             在组件类的静态属性上，做声明
*             App.contextType = {
*               // 需要的全局属性名 ：  类型约束
*               router : React.PropType.object.isRequired
*             }
* */
