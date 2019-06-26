// pages/shoplist/shoplist.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		flag: true,
		shoplist: [],
		listPage: 0,
		listNub: 10,
		cate: 1
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	listMore: function() {
		if (!this.data.flag) return
		wx.showLoading({
			title: '拼命加载中...',
		})
		wx.showNavigationBarLoading()
		wx.request({
			url: "https://locally.uieee.com/categories/" + this.data.cate + "/shops",
			data: {
				_limit: this.data.listNub,
				_page: ++this.data.listPage
			},
			success: (result) => {

				var cont = result.header['X-Total-Count'] // 代表数据总数

				var flag = this.data.listNub * this.data.listPage < cont

				wx.hideLoading()
				wx.hideNavigationBarLoading()
				var newList = this.data.shoplist.concat(result.data)
				this.setData({
					shoplist: newList,
					flag
				})

				wx.hideNavigationBarLoading()
			}
		})
	},

	onLoad: function(options) {
		wx.setNavigationBarTitle({
			title: options.name
		})
		this.data.cate = options.ca
		wx.showNavigationBarLoading()
		this.listMore()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
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
		// console.log("下拉刷新")
		this.setData({
			flag: true,
			shoplist: [],
			listPage: 0
		})
		this.listMore()
		wx.stopPullDownRefresh() // 记得停止,否知刷新的小点在手机上看一直存在
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */

	onReachBottom: function() {
		this.listMore()
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
