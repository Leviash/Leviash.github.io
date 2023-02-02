var dv = document.getElementById('dv');
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
//鼠标按下事件
dv.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;

    //获取左部和顶部的偏移量
    l = dv.offsetLeft;
    t = dv.offsetTop;
    //开关打开
    isDown = true;
    //设置样式
    dv.style.cursor = 'move';
}
//鼠标移动
document.onmousemove = function(e) {
    if (isDown == false) {
        return;
    }
    //获取x和y
    var nx = e.clientX;
    var ny = e.clientY;
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - l);
    var nt = ny - (y - t);
    // 控制左右范围
    if(nl < 0){
      dv.style.left ='0px';
    }else if(nl > document.body.clientWidth - 85){
      dv.style.left = document.body.clientWidth - 85 + 'px';
    }else{
      dv.style.left = nl + 'px';
    }
    // 控制上下
    if(nt < 0){
      dv.style.top ='0px';
    }else if(nt > document.body.clientHeight - 100){
      dv.style.top = document.body.clientHeight - 100 + 'px';
    }else{
      dv.style.top = nt + 'px';
    }
}
//鼠标抬起事件
document.onmouseup = function() {
    //开关关闭
    isDown = false;
    dv.style.cursor = 'default';
}
