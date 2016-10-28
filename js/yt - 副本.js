
window.onload=function(){
	var wbox=getClass('banner',document)[0];
	var bimg=getClass('banner-img',wbox)[0];
	var tu=getClass('tu',bimg)[0];
	// console.log(bimg);
	var as=tu.getElementsByTagName('a');
	var btn=getClass('btn',bimg)[0];
	var anbtn=btn.getElementsByTagName('li')

	// var cebtn=getClass('cebtn',wbox)[0];
	var ceright=getClass('ceright',bimg)[0];
		// alert(ceright)
	var celeft=getClass('celeft',bimg)[0];
	// alert(left)
	
	var index=0;             //设置index为对应下标
	as[0].style.zIndex=10;   //默认第一张图片层级为最高
	anbtn[0].style.background="red"
	var t=setInterval(move,2000)
	function move(){
		index++;
		if(index==as.length){index=0}
		//当index等于as的长度是，将index重新赋值为零，进行下一次循环
		for (var i = 0; i <as.length; i++) {
			as[i].style.zIndex=0;//将图片层级重新设置为零
			anbtn[i].style.background=""
		};
		as[index].style.zIndex=10;
		anbtn[index].style.background="red";
	}
	//鼠标移入事件
	wbox.onmouseover=function(){
       clearInterval(t);
	}

	//鼠标移出事件

	wbox.onmouseout=function(){
		t=setInterval(move,2000)
	}

    //底部按钮

    for (var i = 0; i<anbtn.length; i++) {
    	anbtn[i].index=i
    	as[0].style.zIndex=10;
        anbtn[0].style.background="red"
    	anbtn[i].onclick=function(){
    		for (var j = 0; j <anbtn.length; j++) {
    			as[j].style.zIndex=0;
    			anbtn[j].style.background=""
    		};
        as[this.index].style.zIndex=10;
        anbtn[this.index].style.background="red" 
        }
    };

    //右侧按钮单击事件
    ceright.onclick=function(){
    	move()
    }
    //左侧按钮单击事件
    celeft.onclick=function(){
   
		index--;
		if(index==-1){
			index=as.length-1
		}	
	for (var i = 0; i <as.length; i++) {
		    as[i].style.zIndex=0;//将图片层级重新设置为零
		    anbtn[i].style.background=""
		};
		as[index].style.zIndex=10;
		anbtn[index].style.background="red";

    }
    
    // alert(1)





// 超值特卖选项卡
    var subjects=getClass('subject',document)[0];
    var leftTille=getClass('left-tille',subjects)[0];
    var aTille=leftTille.getElementsByTagName('a');
    var zhusub=getClass('left-sub',subjects)
    // alert(zhusub.length)
    for (var j = 0; j <aTille.length; j++) {
    	aTille[j].index=j;
    	// aTille[0].style.background='yellow';
    	aTille[0].style.borderBottom="5px solid red";
    	zhusub[0].style.display='block';
    	aTille[j].onclick=function(){
	    	for (var i = 0; i < zhusub.length; i++) {
	    		zhusub[i].style.display='none';
	    		// aTille[i].style.background='none'
	    		aTille[i].style.borderBottom="none";
	    	};
	    	zhusub[this.index].style.display='block';
	    	// this.style.background='yellow';
	    	this.style.borderBottom="5px solid red";
        }
    };
    
}