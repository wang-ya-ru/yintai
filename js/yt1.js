$(function(){
   // 超值特卖选项卡
    var subjects=$('.subject')[0];
    var leftTille=$('.left-tille',subjects)[0];
    var aTille=$('a',leftTille);
    var sanjiao=$('.sanjiao',leftTille);
    var zhusub=$('.left-sub',subjects)
    // alert(zhusub.length)
    for (var j = 0; j <aTille.length; j++) {
    	aTille[j].index=j;
    	// aTille[0].style.background='yellow';
    	aTille[0].style.borderBottom="5px solid red";
    	zhusub[0].style.display='block';
    	sanjiao[0].style.display='block';
    	aTille[j].onclick=function(){
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
    


 
    
    var shishang=$('.shishang');
    for (var i = 0; i < shishang.length; i++) {
    	shi(shishang[i])
    };
    function shi(shishang){       
    var left1=$('.left1',shishang)[0];
        var leftBOX=$('.left1-box',left1);
        // var aimg=$('a',leftBOX);
        var yuanBtn=$(".yuanbtn",left1)[0];
        var yBtn=$('li',yuanBtn);
        var shice=$('.shice',left1)[0];
        var shileft=$('.shileft',shice)[0];
        var shiright=$('.shiright',shice)[0];

        // var aImg=parseInt(getstyle(aimg[0],'width'));
        var index=0;
	    for (var m = 0; m<yBtn.length; m++) {
	    yBtn[m].index=m;
	    leftBOX[0].style.zIndex=10;
	    yBtn[0].style.background="red"
	    yBtn[m].onclick=function(){
    	for (var j = 0; j <yBtn.length; j++) {
    		leftBOX[j].style.zIndex=0;
    		yBtn[j].style.background="";

    	};
	    leftBOX[this.index].style.zIndex=10;

	    yBtn[this.index].style.background="red" 
	     }
	   };

 
 // var m=0;
    shileft.onclick=function(){
   	index--;
		if(index<0){
			index=leftBOX.length-1
		}	
	for (var j = 0; j <yBtn.length; j++) {
    		leftBOX[j].style.zIndex=0;
    		yBtn[j].style.background="";

    	};
	    leftBOX[index].style.zIndex=10;

	    yBtn[index].style.background="red" 
	}


   
    shiright.onclick=function(){
   	index++;
		if(index>1){
			index=0;
		}	
	for (var j = 0; j <yBtn.length; j++) {
    		leftBOX[j].style.zIndex=0;
    		yBtn[j].style.background="";

    	};
	    leftBOX[index].style.zIndex=10;

	    yBtn[index].style.background="red" 
	     }


    


}
	  
	  // shiright.style.opacity=0;
	  


 //   function shi(shishang) {
 //        var left1=$('.left1',shishang)[0];
 //        var leftBOX=$('.left1-box',left1)[0];
 //        var aimg=$('a',leftBOX);
 //        var yuanBtn=$(".yuanbtn",left1)[0];
 //        var yBtn=$('li',yuanBtn);
 //        var shice=$('.shice',left1)[0];
 //        var shileft=$('.shileft',shice)[0];
 //        var shiright=$('.shiright',shice)[0];
 //        var aImg=parseInt(getstyle(aimg[0],'width'));
 //        var index=0;
 //        leftBOX.style.width=aImg*aimg.length+'px';
 //        // alert(leftBOX.style.width)
 //        for (var i = 0; i < yBtn.length; i++) {
 //    	yBtn[i].index=i;
 //    	yBtn[i].onclick=function(){
 //    		for (var j = 0; j <aImg.length; j++) {
 //    			yBtn[j].style.background='';
 //    		};
 //    		this.style.background='red';
 //    		animate(leftBOX,{left:-aImg*this.index},1000);
 //    		// index=this.index;
 //    	}
 //    };

 
	//  // var m=0;
	// //    shileft.onclick=function(){
	// //    	index--;
	// // 	if(index==-1){
	// // 		index=leftBOX.length-1
	// // 	}	
	// // for (var i = 0; i <leftBOX.length; i++) {
	// // 	    yBtn[i].style.background="";
	// // 	};
	// // 	animate(leftBOX,{left:-aImg*this.index},1000);
	// // 	yBtn[index].style.background="red";
 // //   }


   
 // //   shiright.onclick=function(){
 // //   	index++;
	// // 	if(index>1){
	// // 		index=0;
	// // 	}	
	// // for (var i = 0; i <leftBOX.length; i++) {
	// // 	    // leftBOX[i].style.zIndex=0;//将图片层级重新设置为零
	// // 	    yBtn[i].style.background=""
	// // 	};
	// // 	// leftBOX[index].style.zIndex=10;
	// // 	yBtn[index].style.background="red";
	// // 	animate(leftBOX,{left:-aImg*this.index},1000);
 // //   }
   
 //      shileft.onclick=function(){
 //    	index--;
 //    	if (index<0) {
 //    		index=aImg.length-1;
 //    	};
 //    	for (var i = 0; i < aImg.length; i++) {
			
	// 		yBtn[i].style.background="";
	// 	};	
	// 	animate(leftBOX,{left:-aImg*index},1000);
	// 	yBtn[index].style.background="red"
 //    }
 //   }

   var ones=$('.one',$(".border",shishang[i])[0]);
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

       for (var i = 0; i < btn.length; i++) {
           btn[i].index=i;
           btn[i].onclick=function(){
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
    


    // var xuBox=$('.xu-box')[0];
    // var xu=$('.xu',$('.jihe',xuBox)[0]);
    // var xuleft=$('.xuleft',$('.xuce',xuBox)[0])[0];
    // var xuright=$('.xuright',$('.xuce',xuBox)[0])[0];
    // // console.log(xuright)
    // var xw= parseInt(getstyle(xu[0],'width'));
    // var a=0;
    // var b=0;
    // xu[0].style.left=0;
    // // setInterval(xuyi,2000)
    // function xuyi(){
    //     b++;
    //     if(b==xu.length){b=0}
    //     xu[b].style.left=xw+'px';
    //     animate(xu[a],{left:-xw},500);
    //     animate(xu[b],{left:0},500);
    //     a=b;   
    // }
    // xuright.onclick=function(){
    //     xuyi();   
    // }
    // xuleft.onclick=function(){
    //     b--;
    //     if(b==-1){
    //        b=xu.length-1;
    //     }
    //     xu[b].style.left=-xw+'px'
    //     animate(xu[a],{left:xw},500);
    //     animate(xu[b],{left:0},500);
    //     a=b;
    // }



         
        // alert(1)
    // for (var i = 0; i < shishang.length; i++) {
    var xuBox=$('.xu-box')[0];
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

   xuleft.onmouseover=function(){
    this.style.background='#000';
   }
    
})
