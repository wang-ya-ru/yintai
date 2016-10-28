$(function(){
   // 超值特卖选项卡
    var subjects=$('.subject')[0];
    var leftTille=$('.left-tille',subjects)[0];
    var aTille=$('a',leftTille);
    var sanjiao=$('.sanjiao',leftTille);
    var zhusub=$('.left-sub',subjects)
    // alert(zhusub.length)
    for (var g = 0; g <aTille.length; g++) {
    	aTille[g].index=g;
    	// aTille[0].style.background='yellow';
    	aTille[0].style.borderBottom="5px solid red";
    	zhusub[0].style.display='block';
    	sanjiao[0].style.display='block';
    	aTille[g].onclick=function(){
	    	for (var i = 0; i < zhusub.length; i++) {
	    		zhusub[i].style.display='none';
	    		// aTille[i].style.background='none'
	    		aTille[i].style.borderBottom="none";
	    		sanjiao[i].style.display='none';
	    	};
	    	zhusub[this.index].style.display='block';
	    	// this.style.background='yellow';
	    	this.style.borderBottom="5px solid red";
	    	sanjiao[this.index].style.display='block';
        }
    };



    // //专柜选项卡    
    var zhuanGuitu=$(".zhuanguitu")[0];
    var zhuanright=$(".right",zhuanGuitu)[0];
    var zhuanT=$(".title",zhuanright)[0];
    var aZhuan=$('a',zhuanT);
    var sanJiao=$('.sanjiao1',zhuanT);
    var zhuBox=$('.zhuti-box',zhuanright)[0];
    var zhuTi=$('.zhuti',zhuBox)
    for (var n = 0; n <aZhuan.length; n++) {
    	aZhuan[n].index=n;
    	aZhuan[0].style.borderBottom="3px solid red";
    	zhuTi[0].style.display='block';
    	sanJiao[0].style.display='block';
    	aZhuan[n].onclick=function(){
    		for (var i = 0; i < zhuTi.length; i++) {
    			zhuTi[i].style.display="none";
    			aZhuan[i].style.borderBottom="none";
    			sanJiao[i].style.display="none";
    		};
    		this.style.borderBottom="3px solid red";
    		zhuTi[this.index].style.display='block';
    		sanJiao[this.index].style.display="block";
    	}
    };
    


 
 //时尚第二栏   
    var shishang=$('.shishang');
    for (var d = 0; d < shishang.length; d++) {
    	shi(shishang[d])
    };
    function shi(shishang){       
    var left1=$('.left1',shishang)[0];
        var leftBOX=$('.left1-box',left1);
        // var aimg=$('a',leftBOX);
        var yuanBtn=$(".yuanbtn",left1)[0];
        var bbttnn=$('li',yuanBtn);
        var shice=$('.shice',left1)[0];
        var shileft=$('.shileft',shice)[0];
        var shiright=$('.shiright',shice)[0];

        // var aImg=parseInt(getstyle(aimg[0],'width'));
        var index=0;
	    for (var m = 0; m<bbttnn.length; m++) {
	    bbttnn[m].index=m;
	    leftBOX[0].style.zIndex=10;
	    bbttnn[0].style.background="red"
	    bbttnn[m].onclick=function(){
    	for (var j = 0; j <bbttnn.length; j++) {
    		leftBOX[j].style.zIndex=0;
    		bbttnn[j].style.background="";

    	};
	    leftBOX[this.index].style.zIndex=10;

	    bbttnn[this.index].style.background="red" 
	     }
	   };

 
 // var m=0;
    shileft.onclick=function(){
   	index--;
		if(index<0){
			index=leftBOX.length-1
		}	
	for (var j = 0; j <bbttnn.length; j++) {
    		leftBOX[j].style.zIndex=0;
    		bbttnn[j].style.background="";

    	};
	    leftBOX[index].style.zIndex=10;

	    bbttnn[index].style.background="red" 
	}


   
    shiright.onclick=function(){
   	index++;
		if(index>1){
			index=0;
		}	
	for (var j = 0; j <bbttnn.length; j++) {
    		leftBOX[j].style.zIndex=0;
    		bbttnn[j].style.background="";

    	};
	    leftBOX[index].style.zIndex=10;

	    bbttnn[index].style.background="red" 
	     }

}
	  

//时尚第三栏
for (var r = 0; r < shishang.length; r++) {
    xiantiao(shishang[r])
};
function xiantiao(shishang){
   var ones=$('.one',$(".border",shishang)[0]);
     	for (var i = 0; i < ones.length; i++) {
     		ones[i].onmouseover=function(){
     			animate($('.bt',this)[0],{width:270});
     			animate($('.bl',this)[0],{height:180})
     			animate($('.br',this)[0],{height:180})
     			animate($('.bb',this)[0],{width:270})
     		}

     		ones[i].onmouseout=function(){
     			animate($('.bt',this)[0],{width:0});
     			animate($('.bl',this)[0],{height:0})
     			animate($('.br',this)[0],{height:0})
     			animate($('.bb',this)[0],{width:0})
     		}
     	};
}



    


//时尚第一栏
   
for (var u = 0; u < shishang.length; u++) {
   xuA(shishang[u])
    
};
function xuA(shishang){
        var xuBox=$('.xu-box',shishang)[0];
    var xu=$('.xu',$('.jihe',xuBox)[0]);
    var xuleft=$('.xuleft',$('.xuce',xuBox)[0])[0];
    var xuright=$('.xuright',$('.xuce',xuBox)[0])[0];
    // console.log(xuright)
    var xw= parseInt(getstyle(xu[0],'width'));
    var a=0;
    var b=0;
    xu[0].style.left=0;
    // setInterval(xuyi,2000)
    function xuyi(){
        b++;
        if(b==xu.length){b=0}
        xu[b].style.left=xw+'px';
        animate(xu[a],{left:-xw},500);
        animate(xu[b],{left:0},500);
        a=b;   
    }
    xuright.onclick=function(){
        xuyi();   
    }
    xuleft.onclick=function(){
        b--;
        if(b==-1){
           b=xu.length-1;
        }
        xu[b].style.left=-xw+'px'
        animate(xu[a],{left:xw},500);
        animate(xu[b],{left:0},500);
        a=b;
    }
    }







   //本周推荐
      var li=$('li',$("ul",$('.zhuti')[0])[0]);
        for (var i = 0; i <li.length; i++) {
            li[i].onmouseover=function(){
                animate($('.bt',this)[0],{width:200});
                animate($('.bl',this)[0],{height:250})
                animate($('.br',this)[0],{height:250})
                animate($('.bb',this)[0],{width:200})
            }

            li[i].onmouseout=function(){
                animate($('.bt',this)[0],{width:0});
                animate($('.bl',this)[0],{height:0})
                animate($('.br',this)[0],{height:0})
                animate($('.bb',this)[0],{width:0})
            }
        };


//banner右侧动图
   var banner=$('.banner')[0];
   var youtu=$('.rgimg',banner)[0];
   var ayou=$('a',youtu)[0]
   youtu.omouseover=function(){
    animate(ayou,{marginRight:20},500)
   }
   // // console.log(rgimg)

    
})





    on(window,'load',qqqqq)
function qqqqq(){
    //超值特卖
var chao=$('.subject-box')[0];
var sb=$('.subject',chao)[0];
var sbl=$('.subject-left',sb)[0];
var lsb=$('.left-sub',sbl);
for (var v = 0; v < lsb.length; v++) {
    xiantiao2(lsb[v])
};
function xiantiao2(lsb){
   var ax=$('a',$(".subbox",lsb)[0]);
        for (var i = 0; i < ax.length; i++) {
            ax[i].onmouseover=function(){
                animate($('.bt',this)[0],{width:220});
                animate($('.bl',this)[0],{height:260})
                animate($('.br',this)[0],{height:260})
                animate($('.bb',this)[0],{width:220})
            }

            ax[i].onmouseout=function(){
                animate($('.bt',this)[0],{width:0});
                animate($('.bl',this)[0],{height:0})
                animate($('.br',this)[0],{height:0})
                animate($('.bb',this)[0],{width:0})
            }
        };
}



//banner右侧动图
   var banner=$('.banner')[0];
   var youtu=$('.rgimg',banner)[0];
   var ayou=$('a',youtu)[0]
   youtu.onmouseover=function(){
    animate(ayou,{marginRight:20},200)
   }
   youtu.onmouseout=function(){
    animate(ayou,{marginRight:0},200)
   }
   // // console.log(rgimg)



// 楼层
var floors=$('.floor');
var mixBB=$('.mix_box')[0];
var fi=$('.fi',mixBB);
var tops=[];
for (var f = 0; f < floors.length; f++) {
    tops.push(floors[f].offsetTop);
};
        window.onscroll=function(){
            var gunh=document.body.scrollTop||document.documentElement.scrollTop;//获取滚动条高度
            for (var i = 0; i < tops.length; i++) {//对tops值与滚动条值进行判断，应先遍历tops值
                if(tops[i]<gunh+100){//进行判断
                    for (var j = 0; j < fi.length; j++) {
                        var fiy=$('.fi-y',fi[j])[0];
                        fiy.style.display='none';//将所有导航框颜色设为空
                    };
                    var fiy=$('.fi-y',fi[i])[0];
                    fiy.style.display='block';//当前导航框设为绿色
                }
            };
        }
        window.onscroll();

        for (var k = 0; k < fi.length; k++) {
            fi[k].index=k;//保留下标
            fi[k].onclick=function(){
                 // document.documentElement.scrollTop=tops[this.index];
                 // document.body.scrollTop=tops[this.index];     
                 animate(document.body,{scrollTop:tops[this.index]},500);
                 //将document.body.scrollTop值改为需要的展示的版块top值
                 animate(document.documentElement,{scrollTop:tops[this.index]},500)  
            }
        };

//图片加载
    var body=$('body')[0];
    var jiazai=$('.jiazai');
    var ch=document.documentElement.clientHeight;//浏览器高度
    var ih=[];//top值数组
    var flags=[];//设置一个开关组
    for (var o = 0; o < jiazai.length; o++) {
        ih.push(jiazai[o].offsetTop);//获取每个imgbox的 top值，将其添加进数组
        flags.push(true);//当进入页面后开关打开
    };
    var flag=true;
    
    on(window,'scroll',mmmmm)
    function mmmmm(){//滚动条触发事件
        var scrt=document.body.scrollTop||document.documentElement.scrollTop;//获取滚动条高度

        for (var p = 0; p < ih.length; p++) {//遍历top值数组
            if((scrt+ch)>=ih[p]&&flags[p]){//将每个imgbox的top值与滚动条高度进行比较,并判断开关是否打开,开关打开则继续加载图片
               flags[p]=false;//开关关闭则图片不再进行加载
             var img=jiazai[p].getElementsByTagName('img');//获取图片标签
                 for (var t = 0; t < img.length; t++) {
                    img[t].src=img[t].getAttribute('asrc')//将图片地址获取到
                 };
             };
        }
    }




   // function  yincangkuang(){
   //  var banner=$('.banner')[0];

   //  var bleft=$('.bleft',banner)[0];
   //  // console.log(bleft)
   //  var lisb=$('.dyfl_box',bleft);
   //  console.log(lisb)
   //  var bannerYin=$('.banner-yin',banner)[0];
   //  var yinlist=$('li',bannerYin);
   //  for (var w = 0; w < lisb.length; w++) {
   //      yinlist[w].style.display='none';
   //      lisb[w].ss=w;
   //      lisb[w].onmouseover=function(){
   //          yinlist[this.ss].style.display='block';
   //      }
   //      yinlist[w].onmouseout=function(){
   //          yinlist[this.ss].style.display='none';
   //      }

   //   };
   //  }
   //  yincangkuang()



      function  yincangkuang(){
        var banner=$('.banner')[0];

        var bleft=$('.bleft',banner)[0];
        // console.log(bleft)
        var lisb=$('.dyfl_box',bleft);
        console.log(lisb)
        var bannerYin=$('.banner-yin',banner)[0];
        var yinlist=$('li',bannerYin);
        for (var w = 0; w < lisb.length; w++) {
            yinlist[w].style.display='none';
            lisb[w].ss=w;
            lisb[w].onmouseover=function(){
                yinlist[this.ss].style.display='block';
                yinlist[this.ss].onmouseover=function(){
                this.style.display='block';
            }
                yinlist[this.ss].onmouseout=function(){
                this.style.display='none';
            }
          }
          lisb[w].onmouseout=function(){
            yinlist[this.ss].style.display='none';
          }
            
         };
        }
    yincangkuang()
}


on(window,'load',aaaaa)
function aaaaa(){
    // banner轮播
        var banner=$('.banner')[0];
       var img=$('img',$('.img-box',banner)[0]);
       var btn=$('li',$('.btn',banner)[0]);
       var lbtn=$('.left',$('.cebtn',banner)[0])[0];
       var rbtn=$('.right',$('.cebtn',banner)[0])[0];
       var iw=parseInt(getstyle(img[0],'width'));
       var index=0;
       var next=0;
       img[0].style.left=0;
        var t=setInterval(move,2000);

       function move(){
         next++;
         if(next==img.length){next=0};
         img[next].style.left=iw+'px';
         animate(img[index],{left:-iw},1000);
         animate(img[next],{left:0},1000);
         index=next;
         for (var i = 0; i < btn.length; i++) {
            btn[i].className='';
        };
        btn[index].className='hot';
       }
       
       banner.onmouseover=function(){
        clearInterval(t);
       }
       banner.onmouseout=function(){
        t=setInterval(move,2000)
       }

       for (var y = 0; y < btn.length; y++) {
           btn[y].index=y;
           btn[y].onclick=function(){
            if(index===this.index){return;}
            next=this.index;
            img[this.index].style.left=iw+'px';
            animate(img[index],{left:-iw},1000);
            animate(img[this.index],{left:0},1000)
            for (var i = 0; i < btn.length; i++) {
                btn[i].className='';
            
            }
            btn[this.index].className='hot';
            index=next;
                
           }
       }

        rbtn.onclick=function(){
           move();
        }

        lbtn.onclick=function(){
            next--;
            if(next==-1){
                next=img.length-1;
            }
            img[next].style.left=-iw+'px';
            btn[index].className='';
            btn[next].className='hot'
            animate(img[index],{left:iw},1000);
            animate(img[next],{left:0},1000)
            index=next;
        }
}
on(window,'load',ddddd)
function ddddd(){
    var fff=$('.ff')[0];
    // var stop=document.body.scrollTop||document.documentElement.scrollTop;
    console.log(fff)
    fff.onclick=function(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
        // animate(document.documentElement,{scrollTop:0},500)
        // animate(document.body,{scrollTop:0},500)        
    }
}


on(window,'load',function(){
    var dao=$('.dao');
    var daob=$('.daob');
    for (var i = 0; i < dao.length; i++) {
        dao[i].aa=i;
        dao[i].onmouseover=function(){
            for (var i = 0; i < daob.length; i++) {
                daob[this.aa].style.display='block';
                daob[this.aa].onmouseover=function(){
                    this.style.display='block';
                }
                daob[this.aa].onmouseout=function(){
                    this.style.display='none'
                }
                
            };
            daob[this.aa].style.display='block';
        }
        dao[i].onmouseout=function(){
            daob[this.aa].style.display='none';
        }
    };
})