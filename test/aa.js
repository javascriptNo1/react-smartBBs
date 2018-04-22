function  cook(type,url,parameter) {
  var p=new Promise(function(resolve,reject){
    axios[type](url,parameter)
      .then(function(data){
        resolve(data);
      })
  });
  return p;
}


cook('post','./datas.json',{val:1})
  .then(function (data) {
  console.log('这是then方法',data.data)
  });


