// 引入核心库
import React, { Component } from 'react';
import '../assets/styles/pagesStyles/service.less';

// 引入需要的图片
import img1 from '../assets/images/imgtext_06.jpg'
import img2 from '../assets/images/imgtext_03.jpg'
import img3 from '../assets/images/imgtext_11.jpg'
import img4 from '../assets/images/imgtext_13.jpg'
import img5 from '../assets/images/imgtext_21.jpg'
import img6 from '../assets/images/imgtext_23.jpg'
import img7 from '../assets/images/imgtext_26.jpg'
import img8 from '../assets/images/imgtext_32.jpg'
import img9 from '../assets/images/imgtext_33.jpg'
import img10 from '../assets/images/imgtext_34.jpg'
import img11 from '../assets/images/imgtext_39.jpg'
import img12 from '../assets/images/imgtext_40.jpg'
import img13 from '../assets/images/imgtext_41.jpg'
import img14 from '../assets/images/imgtext_42.jpg'
import img15 from '../assets/images/imgtext_47.jpg'
import img16 from '../assets/images/imgtext_48.jpg'
import img17 from '../assets/images/imgtext_31.jpg'

// 引入标题组件
import HeadTitle from '../components/HeadTitle';

// 引入图标文字组件
import Imgtext from '../components/ImgText';


// 引入妹子UI核心库
import {
  Container,
  Grid,
  Col
} from 'amazeui-touch';


// 设置模块
class Service extends Component{

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



    // 头部标题
    const dataAll = {
      title: '服务',
      amStyle:'secondary',
      // leftNav: [{ href: '#',icon: 'left-nav'}],
      // rightNav: [{ href: '#', icon: 'search'}],

      // 顶部导航的连接点击事件
      // onAction: cColckHandler,
    };




    return (
     <Container fill={true} className='service'>
       {/*头部导航*/}
       <HeadTitle date={dataAll} />

       <Container scrollable={true}>
       {/*政府服务*/}
       <h2 className='contenth2'>政府服务</h2>

       {/*内容*/}
       <Grid avg={4} className='govtList clearfloat'>
         <Col>
           <a href="#governmentpage">
             <Imgtext text='政府公告' url={img1}/>
           </a>

         </Col>
         <Col>
           <Imgtext text='政策宣传' url={img2}/>
         </Col>
         <Col>
           <Imgtext text='居民意见' url={img3}/>
         </Col>
         <Col>
           <Imgtext text='办事指南' url={img4}/>
         </Col>
         <Col>
           <Imgtext text='社区党建' url={img5}/>
         </Col>
         <Col>
           <Imgtext text='就业创业' url={img6}/>
         </Col>
         <Col>
           <a href="#moreservepage">
             <Imgtext text='更多服务' url={img7}/>
           </a>
         </Col>
       </Grid>

       {/*生活服务*/}
       <h2 className='contenth2' >生活服务</h2>

       {/*列表内容*/}
       <Grid avg={4} className='govtList clearfloat'>
         <Col>
           <Imgtext text='小区公告' url={img8}/>
         </Col>
         <Col>
           <Imgtext text='缴费管理' url={img17}/>
         </Col>
         <Col>
           <Imgtext text='家政服务' url={img9}/>
         </Col>
         <Col>
           <Imgtext text='物业服务' url={img10}/>
         </Col>
         <Col>
           <Imgtext text='快递服务' url={img11}/>
         </Col>
         <Col>
           <Imgtext text='房屋出租' url={img12}/>
         </Col>
         <Col>
           <Imgtext text='洗衣店' url={img13}/>
         </Col>
         <Col>
           <Imgtext text='便民电话' url={img14}/>
         </Col>
         <Col>
           <Imgtext text='二手物品' url={img15}/>
         </Col>
         <Col>
           <Imgtext text='店铺申请' url={img16}/>
         </Col>
         <Col>
           <a href="#moreservepage">
             <Imgtext text='更多服务' url={img7}/>
           </a>
         </Col>
       </Grid>
     </Container>


     </Container>
    )
  }


}

// 导出模块

export default Service;
