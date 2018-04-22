// 引入核心库
import React, { Component } from 'react';

// 引入页面样式
import '../assets/styles/pagesStyles/homepage.less'

// 引入axios
import axios from 'axios'

import {Link,hashHistory} from 'react-router';

// 引入头部导航组件
import HeadTitle from "components/HeadTitle";

// 引入图片
import itemimg1 from '../assets/images/3_03-01.jpg'
import itemimg2 from '../assets/images/3_03-02.jpg'
import itemimg3 from '../assets/images/3_03-03.jpg'
import itemimg4 from '../assets/images/3_03-04.jpg'
import itemimg5 from '../assets/images/3_03-05.jpg'
import itemimg6 from '../assets/images/3_03-06.jpg'
import itemimg7 from '../assets/images/3_03-07.jpg'
import itemimg8 from '../assets/images/3_03-08.jpg'

import itemimg9 from '../assets/images/6_17.jpg'



// 引入妹子UI核心库
import {
  Container,
  Group,
  Grid,
  Col,
  Slider,
  List

} from 'amazeui-touch';


// 设置模块
class Homepage extends Component{

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
      albums:[
        {
          title: '裤子',
          subTitle: '发行公司：环球唱片',
        },
        {
          title: '裤子',
          subTitle: '发行公司：滚石唱片',
        },
        {
          title: '裤子',
          subTitle: '发行公司：魔岩唱片',
        },
        {
          title: '裤子',
          subTitle: '发行公司：魔岩唱片',
        }

      ]
    };
  }


    componentDidMount(){
      var _this=this;
      axios.get('../data/albumsData.json')
        .then(function (response) {
          _this.setState({
            albums:response.data
          })
        })
        .catch(function(err){
          throw err;
        })
    }

  headcollback(album){
    var data = JSON.stringify(album);
    var data1=`/app/details/${data}`;
    hashHistory.push(data1);
    console.log(album)
  }
  render(){

    // 禁止默认转跳
    const clickHandler= (i,e) => {
      e.preventDefault();

    };

    // 头部标题
    const dataAll = {
      title: '购物',
      amStyle:'secondary',
      // leftNav: [{...itemLeft, icon: 'left-nav'}],
      rightNav: [{ href: '#', icon: 'search'}],
      onAction: clickHandler,
    };



    // 轮播
    const sliderIntance = (
      <Slider>
        <Slider.Item>
          <img
            src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
        </Slider.Item>
        <Slider.Item><img
          src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Slider.Item>
        <Slider.Item>
          <img
            src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></Slider.Item>
        <Slider.Item>
          <img
            src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></Slider.Item>
      </Slider>
    );

    // 八大特色
    const item=(
      <Grid avg={4} className='item'>
        <Col>
          <img src={itemimg1} alt=""/><br/>
          <span>周边</span>
        </Col>
        <Col>
          <img src={itemimg2} alt=""/><br/>
          <span>外卖</span>
        </Col>
        <Col>
          <img src={itemimg3} alt=""/><br/>
          <span>生活超市</span>
        </Col>
        <Col>
          <img src={itemimg4} alt=""/><br/>
          <span>团购</span>
        </Col>
        <Col>
          <img src={itemimg5} alt=""/><br/>
          <span>积分商城</span>
        </Col>
        <Col>
          <img src={itemimg6} alt=""/><br/>
          <span>热卖</span>
        </Col>
        <Col>
          <img src={itemimg7} alt=""/><br/>
          <span>新店推荐</span>
        </Col>
        <Col>
          <img src={itemimg8} alt=""/><br/>
          <span>活动</span>
        </Col>
      </Grid>
    )

    // 广告
    var advert=(
      <Grid align="around" className='guess'>
        <Col className='col' >
          <img src="../assets/images/3_11.jpg" alt=""/>
        </Col>
        <Col className='col' >
          <img src="../assets/images/6_07.jpg" alt=""/>
        </Col>
        <Col className='col' >
          <img src="../assets/images/6_09.jpg" alt=""/>
        </Col>
      </Grid>
    );

    // 猜你喜欢变量
    const img40 = <img width="48" src={itemimg9} />;
    var albums =  [
      {
        title: '裤子',
        subTitle: '发行公司：环球唱片',
      },
      {
        title: '裤子',
        subTitle: '发行公司：滚石唱片',
      },
      {
        title: '裤子',
        subTitle: '发行公司：魔岩唱片',
      },
     {
       title: '裤子',
         subTitle: '发行公司：魔岩唱片',
     }

    ];

    albums=this.state.albums;

    // 猜你喜欢结构
    var guess=(
      <Group
        header="猜你喜欢"
        noPadded
      >
        <List>
          {albums.map((album, i) => {
            return (
                <List.Item
                  {...album}
                  target="_blank"
                  media={img40}
                  desc={null}
                  href={i === 0 ? null : album.href}
                  key={i}
                  onClick={this.headcollback.bind(this,album)}
                />
            );
          })}
        </List>
      </Group>
    )




    return (
      <Container fill={true} className='home-content'>
        {/*头部导航*/}
        <HeadTitle date={dataAll} />

        {/*可滚动的内容部分*/}
        <Container scrollable={true}>
          {/*轮播*/}
          {sliderIntance}

          {/*八大特色*/}
          {item}

          {/*广告*/}
          {advert}

          {/*猜你喜欢*/}
          {guess}
        </Container>


      </Container>
    )
  }


}

// 导出模块

export default Homepage;
