//兼容性问题(IE6-8中不支持document.getElementByClassName该方法)访问类名
//leiming为字符串
//fanwei为对象
function getClass(leiming,fanwei){
    if(document.getElementByClassName){//判断当前浏览器中是否支持该函数方法
    	// alert('zhichi')
       return fanwei.getElementsByClassName(leiming)//如果有，直接调用getElementsByClassName函数
    }else{//如果没有，查找通用标签
       var all=fanwei.getElementsByTagName("*");//获得标签集合
       // var aa=biaoqian[0]
       var arr=[];//创建一个数组
       for (var i = 0; i <all.length; i++) {//遍历标签
       	//all[i].className==leiming如果标签的类名与参数类名相同
       	if(checkClass(all[i].className,leiming)){//调用类名判断函数
       		arr.push(all[i])//将类名与参数类名相同的放入一个数组中
       	}
       }
       return arr;//返回数组集合
    }
}
//一个标签中类名中有多个名字时，与参数类名进行比较，是否包含该参数类名
//all[i].className=tagClass
//leiming
function checkClass(tagClass,leiming){//
   var newarr=tagClass.split(" ");//类名为多个，将类名转为数组
   for (var i = 0; i <newarr.length; i++) {//遍历数组
   	   if(newarr[i]==leiming){//数组中的元素与参数类名进行比较
   	   	return true;//相等(有)则输出true
   	   }
   	   	   
   }
   return false;//没有相等的则输出false
}




/*获取通用样式
  getstyle(obj,attr)
  obj对象
  attr属性
注意：获取border等集合性属性需加准确值
*/

function getstyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr]
  }else{
    return getComputedStyle(obj,null)[attr];
  }
}


/*
textContent与innerText在IE6-8和火狐等浏览器的兼容性问题
*/

function text(obj,val){
  if(val==undefined){
    if(obj.textContent!=undefined){
       return obj.textContent;
    }else{
      return obj.innerText;
    }
  }else{
    if(obj.textContent!=undefined){
       obj.textContent=val;
    }else{
       obj.innerText=val;
    }
  }
}




//定义函数
//selector参数   range范围
//获取元素
function $(selector,range){
  var range=range||document;//有定义范围为range，没有时为默认范围document
   if(typeof selector=="string"){//参数类型为字符串
    //selector==>#box
    if(selector.charAt(0)=="#"){//判断获取字符串的第一个是#，则该字符串是id名
      return document.getElementById(selector.slice(1));
    }
     if(selector.charAt(0)=="."){//判断获取字符串的第一个是.，则该字符串是classname;
        return getClass(selector.slice(1),range)
    }
    //selector==>.box
    if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){//判断参数是否为标签名
        return range.getElementsByTagName(selector)
    }

     // alert(1)
   }
   //页面加载selector就相当于function(){}
   if (typeof selector=="function") {
    window.onload=selector;
   };
}


/*时间详解.同一个事件绑定多个事件处理程序*/
function on(obj,ev,callback){
  if(obj.addEventListener){
    obj.addEventListener(ev,callback);
  }else{
      function fffnnn(){
      callback.call(obj)
    }
    obj.attachEvent('on'+ev,fffnnn)
  }
}


/*删除事件处理程序*/
function off(obj,ev,callback){
  if (obj.removeEventListener) {
    obj.removeEventListener(ev,callback);
  }else{
    obj.detachEvent('on'+ev,fffnnn)
  }
}