// 引入核心库
import React, { Component } from 'react';

// 引入页面样式
import '../assets/styles/pagesStyles/register.less';


// 标题组件
import HeadTitle from '../components/HeadTitle';

// 输入框组件
import RegisterInput from '../components/RegisterInput';

// 按钮组件
import Formbutton from '../components/Formbutton';

// 引入妹子UI核心库
import {
  Notification,
  Group
} from 'amazeui-touch';


// 设置模块
class Register extends Component{

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
      classcheck:'checkBox',
      classbut:'protocol',
      qu:'',
      phone:'',
      password:'',
      checkpassword:'',
      checkup:'',
      hash:'app',
      sum:'获取验证码'
    };
  }

  // 自定义函数

  // 协议勾选事件
  checkClick(e){
    if (this.state.classcheck==='checkBox'){
      this.setState({
        classcheck:'checkBox fff',
        // 取消勾选时按钮颜色变灰
        classbut:'protocol butactive',
        // 取消勾选时hash地址为false
        hash:'false'
      })
    }
    else{
      this.setState({
        classcheck:'checkBox',
        classbut:'protocol',
        hash:'app'
      })
    }
  }

  // 底部下一步按钮事件和非空验证
  butevent(e){
    // 判断hash地址是否为空，为空时阻止hash地址的变化
    var i=0;
    if(this.state.hash==='false'){
      e.preventDefault()
    }
    else{

      // 循环状态对象，判断输入项是否有空值
      for(var key in this.state){
        if(this.state[key]===''){
          i++;
        }
      }
      // 输入项有空值时弹出提示框
      if (i!==0){
        e.preventDefault()

        // 改变通知栏的状态 显示通知栏
        this.setState({
          visible: true,
          amStyle: 'warning'
        });

      }

    }

  }

  // 输入框键入事件
  check(e,name){
    this.setState({
      [name]:e.target.value
    })

  }

  // 获取验证码事件
  sunclick(e){
    // 保存外部的this，在定时器内使用，定时器内的this会改变
    let _this=this;

    // 判断定时器是否处于可点击状态
    if(this.state.sum==='获取验证码'){
      // 初始化倒计时
      let n=60;
      _this.setState({
        sum: n
      });

      // 定义定时器
      let timeid=setInterval(function(){
        n--;
        // 使用定时器修改状态
        _this.setState({
          sum: n
        });

        // 倒计时结束清除定时器，初始化按钮
        if (n===0){
          clearInterval(timeid)
          _this.setState({
            sum: '获取验证码'
          })
        }

      },1000)
    }
  }



  // 通知栏关闭时的函数
  closeNotification(){
    this.setState({
      visible: false
    });
  }

  // 渲染组件
  render(){

    // 头部导航
    const dataAll = {
      title: '注册',
      amStyle:'secondary',
      leftNav: [{href: '#loginpage', icon: 'left-nav'}],
      // rightNav: [{ href: '#', icon: 'search'}],
      // onAction: clickHandler,
    };



    return (
     <div id='register'>

       {/*通知栏*/}
       <Notification
         title="通知"
         amStyle={this.state.amStyle}
         visible={this.state.visible}
         animated
         onDismiss={()=>this.closeNotification()}
       >
          所有输入项都不能为空
       </Notification>

       {/*头部导航*/}
       <HeadTitle date={dataAll} />

       {/*表单*/}
       <RegisterInput onChange={(e)=>this.check(e,'qu')} text='片&emsp;&emsp;区' value={this.state.qu} type='text' placeholder='泸州政法委' />

       <RegisterInput onChange={(e)=>this.check(e,'phone')} text='手&nbsp;&nbsp;机&nbsp;号' value={this.state.phone} type='text' placeholder='请输入手机号码' />

       <RegisterInput onChange={(e)=>this.check(e,'password')} text='密&emsp;&emsp;码' value={this.state.password} type='password' placeholder='请输入密码' />

       <RegisterInput onChange={(e)=>this.check(e,'checkpassword')} text='确认密码' value={this.state.checkpassword} type='password' placeholder='请输入确认密码' />

       <RegisterInput onClick={(e)=>this.sunclick(e)} onChange={(e)=>this.check(e,'checkup')} text='验&nbsp;&nbsp;证&nbsp;码' value={this.state.checkup} type='text' placeholder='请输入验证码' validate={this.state.sum}  />
       {/*协议*/}
       <div className='protocol'>
         <div className={this.state.classcheck} onClick={(e)=>this.checkClick(e)} > ✔ </div>
         <span>同意接受智慧社区Life使用协议</span>
       </div>
       {/*下一步的按钮*/}
      <div className={this.state.classbut}  >
        <a href='#loginpage' onClick={(e)=>this.butevent(e)}>
          <Formbutton black={true} value='下一步' />
        </a>
      </div>
     </div>
    )
  }


}

// 导出模块

export default Register;
