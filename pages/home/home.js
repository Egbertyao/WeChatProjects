// pages/home/home.js
const req = require("../../utils/req.js")
import api from '../../utils/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[],
    swiperImg: [{
      img: "http://5b0988e595225.cdn.sohucs.com/images/20190830/e9275f142bcb482d986a2b06f6d8cb06.jpeg",
      url: '../login/index'
    }, {
      img: "http://5b0988e595225.cdn.sohucs.com/images/20190830/63c434ee0629419bb130851db8903959.jpeg",
      url: '../logs/logs'
    }, {
      img: "http://5b0988e595225.cdn.sohucs.com/images/20190830/79ef942234da4f63a0d4547f1fa24a9e.jpeg",
      url: '../center/center'
    }],
    chooseShow: true,
    tabList:['全部','电脑', '家居用品']
  },

  /**
   * 请求轮播图数据方法
   */
  getImg:function(){
    let that = this;
    //调用封装好的请求
     
    req._get('url').then(res=>{
      console.log(res);
      try {
        if (res.data.list != 0) {
          that.setData({
            swiperImg: res.data.list
          })
        }
      }catch(err){}

    })

  },
  //选择本地图片方法
  // upLoad:function() {
  //   //微信api：选择图片
  //   //this 指代 page ， 想去设置page里面的数值
  //   let that = this
  //   wx.chooseImage({
  //     count: 3,
  //     sizeType: ['original', 'compressed'],
  //     sourceType: ['album', 'camera'],
  //     success: function(res) {
  //       console.log(res);
  //       const tempFilePaths = res.tempFilePaths;
  //       let arr = [];
  //       //降临时文件获取 并放在 arr 里，创造需要的swiperImg
  //       tempFilePaths.forEach((item)=> {
  //         arr.push({img: item, url:'../login/index'})
  //       });
  //       if (tempFilePaths.length <= 3){
  //         that.setData({
  //           swiperImg: arr,
  //           chooseShow: false,
  //         });
  //       } else {
  //         wx:wx.showModal({
  //           title: '提示',
  //           content: '最多只能选择三张图片',
  //         })
  //       }
  //     },
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载 只运行一次
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成 只执行一次
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示 可执行多次
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})