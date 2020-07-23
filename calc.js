/**
 * 初始化函数 
 */
function init() {
	var num = document.getElementById("num");
	num.value = 0;
	num.disabled="disabled"; //禁止用户通过文本框输入数据，防止输入非数字字符
}

/**
 * 实现点击按钮在计算器中输入数字
 */
function num_1_click(){
	var num = document.getElementById("num");
	var n = num.value;
	if(n == "0"){
		n = "1";
	}else{
		n = n + "1"; //当点击1按钮后，把字符1拼接到num后面以达到输入数字到计算器的效果
	}
	document.getElementById("num").value = n;
}
