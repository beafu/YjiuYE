/**
 * 单元素的匀速运动
 * @param obj  哪一个元素的运动
 * @param attr 具体元素运动的属性
 * @param step 运动的步长
 * @param target 运动的目标点
 * @param time 定时器的速度
 */
var timer = null;
function move(obj,attr,step,target,time){
    //判断运动的方向
    step = target > parseInt(getStyle(obj,attr)) ? step : -step;
    //每一个元素都有自己的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //元素的初始位置,元素的非行间样式
        //调用函数
        var left = parseInt(getStyle(obj,attr)) + step; 
        //设置值之前进行判断
        if((left>target && step>0) || (left<target && step<0)){
            left = target;
        }
        //设置元素的left值等于每次运动的新值
        obj.style[attr] = left + "px";
        //判断如果元素已经到达了目标点，就停止定时器
        if(left==target){
            clearInterval(obj.timer);
        }
    },time)

}

/**
 * 单元素的缓冲运动
 */

function BufferMove(obj,attr,target){
    //清除之前运动的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //判断如果属性为不透明度
        if(attr=="opacity"){
            var start = parseFloat(getStyle(obj,attr) * 100);
        }else{
            var start = parseInt(getStyle(obj,attr)); 
        }
        var speed = (target - start) / 10; 
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
        if(attr=="opacity"){
            obj.style[attr] = (start+speed)/100;
        }else{
            obj.style[attr] = start + speed + "px"
        }
        if(start==target){
            clearInterval(obj.timer);
        }
    },100)

}
/**
 * 多物体的多属性运动
 * @param obj 哪一个元素在发生运动
 * @param json 对象
 * @param fun 回调函数
 */
function BufferJSON(obj,json,fun){
    //清除之前运动的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //获取对象中的每一个值
        //for、while、do while、forEach、for in
        var tag = true;
        for(var attr in json){
            // console.log(attr) //属性 width  height
            // console.log(json[attr])  //属性值
            //多属性的判断条件  假设都达到了目标点
            if(attr=="opacity"){
                var start = parseFloat(getStyle(obj,attr) * 100);
            }else{
                var start = parseInt(getStyle(obj,attr)); 
            }
            var speed = (json[attr] - start) / 10; 
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            if(attr=="opacity"){
                obj.style[attr] = (start+speed)/100;
            }else{
                obj.style[attr] = start + speed + "px"
            }
            // if(start==json[attr]){
            //     clearInterval(obj.timer);
            // }
            if(start!=json[attr]){
                 tag = false;
            }
        }
        //判断是不是所有的属性值都达到了目标点
        if(tag==true){
            clearInterval(obj.timer);
            //再次调用回调函数
            fun&&fun();
        }
    },100)
}