Page({

  /**
   * 页面的初始数据
   */
  data: {
    // sliderList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		wx.request({
      url: "https://locally.uieee.com/slides",
			data:{},
			header:{
				'content-type': 'application/x-www-form-urlencoded' // 默认值
			},
			method:"GET",
			dataType:"json",
			success:(result)=>{
        // this.slider=result.data
        // console.log(this.slider)
				this.setData({
					sliderList:result.data
				})
			}
		})
    wx.request({
      url: "https://locally.uieee.com/categories",
      data: {},
      header: {
				'content-type': 'application/x-www-form-urlencoded' // 默认值
			},
      method: "GET",
      dataType: "json",
      success: (result) => {
        // this.slider=result.data
        // console.log(this.slider)
        this.setData({
          categories: result.data
        })
        // console.log(result.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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