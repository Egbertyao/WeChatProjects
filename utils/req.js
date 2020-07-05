module.exports = {
  _get:function(url,data){
    var promise = new Promise((resolve, reject) =>{
      let param = data;
      wx.request({
        url: url,
        //header{}
        data: param,
        method:'get',
        success(res){
          if (res.statusCode == 200){
            resolve(res)
          }else{
            reject(res)
          }
        }
      })
    })
    return promise;
  },

  _post: function (url, data) {
    var promise = new Promise((resolve, reject) => {
      let param = data;
      wx.request({
        url: url,
        //header{}
        data: param,
        method: 'post',
        success(res) {
          if (res.statusCode == 200) {
            resolve(res)
          } else {
            reject(res)
          }
        }
      })
    })
    return promise;
  }
}

// export default function(url, data){

// }