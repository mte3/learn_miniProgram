// pages/home/home.js
Page({
    data:{
        text:'面对疾风咯',
        list:[
            {id:110,name:'勒布朗',age:36},
            {id:111,name:'布莱恩特',age:36},
            {id:112,name:'艾弗森',age:36},
            {id:113,name:'威斯布鲁克',age:36},
            {id:114,name:'尼克杨',age:36},
        ],
        num:0
    },
    add(){
        //错误做法，界面是不会刷新的
        // this.data.num++
        this.setData({
            num:this.data.num+1
        })
    },
    sub(){
        // this.data.num--
        this.setData({
            num:this.data.num-1
        })
    }
})