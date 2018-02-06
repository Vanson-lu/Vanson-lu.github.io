function get_canvas(ev,obj){
    m_clientX = ev.clientX-obj.offsetLeft;
    m_clientY = ev.clientY-obj.offsetTop;
    //document.getElementById("tips").innerHTML = "当前坐标：X："+ m_clientX + " ,Y：" +m_clientY;
}

var a = [];
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
function suiji(){
	for(var i = 0 ; i < 3;i++){
		var s = Math.floor(Math.random()*3);//随机一个0-3的数
		a[i] = s;//每次随机的数放到数组里，i决定数组的第几个位置
	}
	var s= 0;
	for(var i = 0 ; i < a.length;i++){
		var j = a[i];//将数组的内容赋值给j
		context.fillStyle = "#000";//绘画颜色为黑色
		context.fillRect(j*100,s*50,100,50);
		s++;
	}
}
function move(){
	for(var i = 2 ;i>=0;i--){
		a[i] = a[i-1];
	}
	var s = Math.floor(Math.random()*3);
	a[0] = s;
	var k = 0;
	for(var i = 0 ; i < a.length;i++){
		var j = a[i];
		context.fillStyle = "#000";
		context.fillRect(j*100,k*50-50,100,50);
		k++;
	}
	var y = 0;
	var count = 0;
	move1(j,y,count);
}
function move1(j,y,count){
	count++;
	y+=10;
	var s = 0;
	var k = 0;
	for(var i = 1 ; i < a.length;i++){
		var j = a[i];
		context.fillStyle = "#fff";
		context.fillRect(j*100,s*40-40+y,100,50);
		s++;
	}
	for(var i = 0 ; i < a.length;i++){
		var j = a[i];
		context.fillStyle = "#000";
		context.fillRect(j*100,k*50-50+y,100,50);
		k++;
	}
	if(count<5){
		setTimeout(function(){
			move1(j,y,count);
		},20);
	}
}

var xz = new suiji();

window.addEventListener('mousedown',function(){
	var x =Math.floor( m_clientX/133);
	var y =Math.floor( m_clientY/200);
	console.log(x);
	if(a[2] == x){
	setTimeout(function	(){
		context.fillStyle = "#fff";
		context.fillRect(x*100,2*50,100,50);
		move();
	},200)
	}
	else {
		alert("您按错了");
	}
})