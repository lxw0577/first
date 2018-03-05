// JavaScript Document
function getStyle ( obj, attr ) { 
	return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; 
}//获取css样式属性


function opacity(obj,speed,target,endFn){
	clearInterval(obj.timerOp);
	var alpha= getStyle( obj, 'opacity' )*100;
	
	obj.timerOp = setInterval ( function(){
		var sp=0;
		if(target>alpha) {
			var sp=speed ;
		}else{
			sp=-speed;
		}
		alpha += sp;
		if((alpha <= target && sp<0) || (alpha >= target && sp>0 ))
		 	alpha = target; 
		
		if(alpha == target){
			clearInterval(obj.timerOp);
        }else{
			obj.style.filter = 'alpha(opacity='+alpha+')';
        	obj.style.opacity = alpha/100;
        }
	},30)
	endFn&&endFn();
}//透明度渐变


function doMove( obj , attr ,dir , target ,endFn){
	clearInterval(obj.timer);
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	obj.timer = setInterval(function(){
	
		
		var speed = parseInt(getStyle( obj, attr )) + dir;
		
		if(speed > target && dir > 0 ||  speed < target && dir < 0  )
			speed = target;
			
		obj.style[attr] = speed + 'px';
		
		if(speed === target)
			clearInterval(obj.timer);
		
		endFn && endFn();
	},30)
}//元素上下左右移动