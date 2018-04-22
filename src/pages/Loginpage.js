// 引入核心库
import React, { Component } from 'react';
import '../assets/styles/pagesStyles/Login.less';

// 引入axios插件用于发送ajax请求
import axios from 'axios';

// 引入妹子UI核心库
import {
  Notification
} from 'amazeui-touch';

// 字体图标库
import '../assets/fonts/icoFormInput/style.css';

// 自定义组件
import FormInput from '../components/FormInput';
import Formbutton from '../components/Formbutton';


// 设置模块
class login extends Component{


  constructor(props){
    super(props)

    this.state={
      username:'',
      password:'',
      content:'',
      user:''

    }
  }

  // 自定义事件

  // 登录按钮点击时触发的函数
  submit(e){

    // 搜集数据
    var username=this.state.username;
    var password=this.state.password;

    // 发送ajax请求,和参数
    // axios
    //   .get('/success.josn?username='+username+'&password='+password)
    //
    //   // 请求成功的回调
    //   .then((response)=>{
    //     if (response){
    //       alert('111')
    //     }
    //   })
    //
    //   // 服务器异常的回调
    //   .catch((error)=>{
    //     console.error('这是错误:',error);
    //   })

    // 账号或密码一方为空是弹出通知栏
    if(username===''||password===''){
      // 禁止默认事件
      e.preventDefault();

      // 改变通知栏的状态 显示通知栏
      this.state.content='用户名和密码不能为空';
      this.setState({
        visible: true,
        amStyle: 'warning'
      });
    }
    else if(!/\d{11}$/.test(username)) {

      e.preventDefault();
      // 改变通知栏的状态 显示通知栏
      this.state.content='用户名为11位手机号码';
      this.setState({
        visible: true,
        amStyle: 'warning'
      });
    }


  }

  // 通知栏关闭时的函数
  closeNotification(){
    this.setState({
      visible: false
    });
  }

  // 输入框键入时触发的函数
  check(e,name){

    // 把当前事件对象e的input的value值赋给接收的name动态参数，
    this.setState({
      [name]:e.target.value
    })

  }



  cook(type,url,parameter) {
    var p=new Promise(function(resolve,reject){
      axios[type](url,parameter)
        .then(function(data){
          resolve(data);
        })
    });
    return p;
  }

  render(){
    return (
      <div id='min'>
        {/*版心*/}
        <div className='content'>

          {/*通知栏*/}
          <Notification
            title="通知"
            amStyle={this.state.amStyle}
            visible={this.state.visible}
            animated
            onDismiss={()=>this.closeNotification()}
          >
            {this.state.content}
          </Notification>

          {/*logo和标题字体*/}
          <div className='logo'>
            <img src='../assets/images/logo.jpg' />
            <h1 className='cfff'>智&emsp;天&emsp;下</h1>
          </div>

          {/*登录表单*/}
          <form action="" id='myform'>

            {/*账号*/}
            <FormInput placeholder={this.state.user} ico='iconstyle-mobile' value={this.state.username}  onChange={(e)=>this.check(e,'username')} />

            {/*密码*/}
            <FormInput placeholder='请输入密码' ico='iconstyle-lock' type='password' value={this.state.password} onChange={(e)=>this.check(e,'password')} />

            {/*登录按钮*/}
            <a href="#app" onClick={(e)=>this.submit(e)}>
              <Formbutton black={true}  value='登录' />
            </a>

            <div className='forget'>
              <span className='cfff'>
                忘记密码？
              </span>
            </div>

           <div className='butbox'>
             <a href="#registerpage">
               <Formbutton value='免费注册'/>
             </a>&emsp;
             <a href="#app">
               <Formbutton value='游客登录'/>
             </a>

           </div>

          </form>
        </div>
      </div>
    )
  }

  componentDidMount(){
    var _this=this;
    this.cook('get','../data/data.json',{val:1})
      .then(function (data) {

        _this.setState({
          user:data.data.name
        })
      });

  }


}

// 导出模块

export default login;
