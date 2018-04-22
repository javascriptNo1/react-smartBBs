// 引入核心库
import React, { Component } from 'react';

// 引入页面样式
import '../assets/styles/componentsStyles/registerInput.less';

// 引入合并对象插件
import assign from 'object-assign';
import login from "../pages/Loginpage";

// 设置模块
class RegisterInput extends Component{

  // 初始化属性
  static defaultProps={
    display:'none',

  };

  // 实例化
  // 调用构造器
  constructor(){
    // 调用父类的构造器（调用构造器就一定要调用父类的构造器）
    super();



    // 初始化状态
    this.state = {
      obtainid:'',
      truesum:'',
      a:0
    };
  }



  render(){

    // 获取验证码按钮事件

    const obtain=()=>{
      console.log('外面的this',this)
      var _this=this;

      var sum=5;

      let timeid=setInterval(function(){
          sum--;
          console.log(_this.state.truesum)
        _this.setState({
          truesum:sum
        })

          if(sum===0){
            clearInterval(timeid);
          }

      },1000);


    };

    var showclass='';
    var nvalid='';
    var sum='';
    if(this.props.validate){
       showclass='show';
       nvalid='valid';
       // sum=this.props.validate;
      // this.setState({
      //   truesum:this.props.validate
      // })
    }

    // 因为this.props是不能操作的对象所有需要将其拷贝一份进行操作
    var props=assign({},this.props);

    // 将克隆的this.props内不需要的属性删除，再使用
    delete props.text;
    delete props.ico;
    delete props.validate;
    delete props.onClick;

    return (
     <div className='rinputbox'>
       <span>{this.props.text}</span>
       <span className={this.props.ico}> </span>
       <input className={nvalid} {...props}/>
       <span className={showclass} onClick={this.props.onClick}> {this.props.validate} </span>
     </div>
    )
  }



}

// 导出模块

export default RegisterInput;
