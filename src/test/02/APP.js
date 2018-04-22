import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  IndexRedirect,
  Link
} from 'react-router';

import Home from './component/Home';
import About from './component/About';

class App extends Component{
  render(){
    const nav1 = (
      <ul style={{position:'fixed',bottom:0,borderWidth:1,borderStyle:'solid',width:'100%'}}>
        <li style={{display:'inline-block',marginRight:10}}>
          <a href="#/home">首页</a>
        </li>
        <li style={{display:'inline-block'}}>
          |
        </li>
        <li style={{display:'inline-block',marginLeft:10}}>
          <a href="#/about">关于</a>
        </li>
      </ul>
    );

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
    );
  }
}

// 1.简单路由
const router1 = (
  //  一个场景，配置一个路由器
  <Router history={hashHistory}>
    {/* 每个路由器下，可以有多个路线 */}
    {/*
            route : 代表一条访问资源的路线
                path ： 资源的地址，用于匹配hash地址的改变
                component ： 定义显示页面的组件
            */}
    <Route path='/home' component={Home}/>
    <Route path='/about' component={About}/>
  </Router>
);





ReactDOM.render(router1, document.querySelector('#app'));


