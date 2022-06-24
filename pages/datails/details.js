// pages/details/details.js
Page({
  data: {

  },

  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      mid:options.id
    })
   
wx.request({
  url: 'https://liudongtushuguan.cn/v2/movie/subject/'+options.id,
  header:{
"content-type":"json"
  },
  success:function(res){
  console.log(res)
}
})
  },


  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})