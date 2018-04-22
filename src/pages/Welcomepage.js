// 引入核心库
import React, { Component } from 'react';

// 引入样式
import '../assets/styles/pagesStyles/welcomepage.less'

// 引入图片
// import img from '../assets/images/1.PNG'
import img from '../assets/images/welcome_02.jpg'

// 设置模块
class Welcomepage extends Component{

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
      sum:5
    };
  }


  render(){

    return (
     <div className='welcome'>
       <img src={img} alt=""/>
       <span>
         {this.state.sum}
         <a href="#loginpage">
            <span>跳过</span>
         </a>
       </span>
     </div>

    )
  }

  // 页面首次渲染完后执行倒计时
  componentDidMount(){
    // 储存外部this
    var _this=this;

    // 初始化倒计时
    var n=5;

    // 设置每秒执行一次的定时器
    var timeid=setInterval(function(){
      n--;

      // 修改状态
      _this.setState({
        sum:n
      });

      // 计时结束清除定时器，通过push方法重新渲染组件
      if(n===0){
        clearInterval(timeid)
        _this.props.router.push('loginpage');
      }
    },1000);

  }



}

// 导出模块

export default Welcomepage;
