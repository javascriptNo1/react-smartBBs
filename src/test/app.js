// 引入核心库
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  IndexRedirect,
  Link
} from 'react-router';


import LoginPage from "../pages/Loginpage";
import Home from './component/Home';
import About from './component/About';

// 设置模块
class app extends Component{

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

    const nav2 = (
      <ul style={{position:'fixed',bottom:0,borderWidth:1,borderStyle:'solid',width:'100%'}}>
        <li style={{display:'inline-block',marginRight:10}}>
          <Link to="/">首页</Link>
        </li>
        <li style={{display:'inline-block'}}>
          |
        </li>
        <li style={{display:'inline-block',marginLeft:10}}>
          <Link to="/about">关于</Link>
        </li>
      </ul>
    );


    return (
      <div>
        {/*{router}*/}
        {this.props.children}

        {/* 底部导航 */}
        {nav2}
      </div>
    )
  }



}

const router3 = (
  //  一个场景，配置一个路由器
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>

      <Route path='home' component={Home}/>
      <Route path='about' component={About}/>
    </Route>
  </Router>
);

// 导出模块

// export default app;
ReactDOM.render(router3, document.querySelector('#app'));
