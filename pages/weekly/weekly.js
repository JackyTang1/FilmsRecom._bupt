Page({
  data: {
  thisweekmovie:[
    {
      name:"《让子弹飞》",
      comment:"红色革命，乱世枭雄",
      imagePath:"/pages/image1/movie1.jpg",
      redu:true,
      id:1
    },
    {
      name:"《飞驰人生》",
      comment:"速度与激情，超越极限",
      imagePath:"/pages/image1/movie2.jpg",
      redu:false,
      id:2
    },
    {
      name:"《这个杀手不太冷静》",
      comment:"人生如戏，局中局，戏中戏",
      imagePath:"/pages/image1/movie3.jpg",
      redu:false,
      id:12911841
    }
   ],
   currentindex:0,
  },

onLoad:function(options){
 this.setData({
   currentindex:this.data.thisweekmovie.length-1
 })
},

f0:function(event){
  this.setData({
    currentindex:this.data.thisweekmovie.length-1
  })
 },

f1:function(event){
     var movieid=event.currentTarget.dataset.movieId
     console.log(movieid);
     
     wx.navigateTo({
       url:"/pages/details/details?id=" +movieid
     })
 }
})