// pages/home/home.js
const app = getApp()
import request from '../../service/network'

Page({
    //-----------1.初始化数据-------
    data: {
        name: app.globalData.name,
        text: '面对疾风咯',
        a: 100,
        list: [{
                id: 110,
                name: '勒布朗',
                age: 36
            },
            {
                id: 111,
                name: '布莱恩特',
                age: 36
            },
            {
                id: 112,
                name: '艾弗森',
                age: 36
            },
            {
                id: 113,
                name: '威斯布鲁克',
                age: 36
            },
            {
                id: 114,
                name: '尼克杨',
                age: 36
            },
        ],
        num: 0
    },

    //-----------2.监听wxml中相关事件-----
    add() {
        //错误做法，界面是不会刷新的
        // this.data.num++
        this.setData({
            num: this.data.num + 1
        })
    },
    sub() {
        // this.data.num--
        this.setData({
            num: this.data.num - 1
        })
    },
    handelItem(event) {
        console.log(event);

    },
    handelsub() {
        const cpn = this.selectComponent('.num')
        cpn.sub(10)
    },
    handeladd() {
        const cpn = this.selectComponent('.num')
        cpn.add(10);

    },
    sub1() {
        this.setData({
            a: this.data.a - 10
        })
    },
    add1() {
        this.setData({
            a: this.data.a + 10
        })
    },


    //-------- 3.监听页面的生命周期------
    onLoad() {
        
        // 页面被加载出来时调用
        //封装网络请求方法
        request({
            url:'/api/h8/recommend',
        }).then(res => {
            // console.log(res);
        }).catch(err => {
            // console.log(err);   
        })
        //普通网络请求用法
        // wx.request({
        //   url: 'http://123.207.32.32:8000/api/h8/recommend',
        //   success:(res) => {
        //       console.log(res)
        //   }
        // })

        

    },
    onShow() {
        // 页面显示出来时调用
    },
    onReady() {
        // 页面初次渲染完成时调用
    },
    onHide() {
        // 页面隐藏时调用
    },
    onUnload() {
        //页面销毁时调用
    },


    //-------监听其他事件--------

    //监听滚动
    onPageScroll(scroll) {
        console.log(scroll);

    },

    //监听页面滚动到底部
    onReachBottom() {
        console.log('页面滚动到底部');

    },

    //监听下拉刷新
    onPullDownRefresh() {
        console.log('下拉刷新事件');

    }

})