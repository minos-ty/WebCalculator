/**
 * 初始化
 */

function init() {
	var num = document.getElementById("num");
	num.value = 0;
	num.disabled="disabled"; //禁止用户通过文本框输入数据，防止输入非数字字符
	
	var objButtons =  document.getElementsByTagName("input");
	var btn_num1;
	var fh;//符号控制
	for (var i = 0; i < objButtons.length; i++) {
		objButtons[i].onclick = function(){
			if (!isNaN(this.value)) {
				num.value = (num.value + this.value)*1; // *1把value隐式转换成数字类型，当value为0时游览器不显示
			}else {
				var btn_num = this.value;
				
				switch(btn_num) {
					case "+":
						btn_num1 = Number(num.value); //点击加号，变量的值等于文本框内的值 ；* 1 转换为数字类型
						num.value = 0;
						fh = "+";
						break;
					case "-":
						btn_num1 = Number(num.value); 
						num.value = 0;
						fh = "-";
						break;
					case "*":
						btn_num1 = Number(num.value);
						num.value = 0;
						fh = "*";
						break;
					case "/":
						btn_num1 = Number(num.value); 
						num.value = 0;
						fh = "/";
						break;
					case ".":
						if (num.value.indexOf(".") == -1){
							num.value = num.value + ".";
						}
						break;
					case "<":
						if (num.value.length == 1) {
							num.value = 0;
						}else{
							num.value = num.value.substr(0, num.value.length - 1);
						}
						break;
					case "c":
						num.value = 0;
						break;
					case "+/-":
						// if(num.value.indexOf("-") == -1){
						// 	num.value = "-" + num.value;
						// }else{
						// 	num.value = num.value.substr(1, num.value.length);
						// }
						num.value = Number(num.value) * -1;
						break;
					case "=":
						switch(fh){
							case "+":
								num.value = btn_num1 + Number(num.value);
							break;
							case "-":
								num.value = btn_num1 - Number(num.value);
							break;
							case "*":
								num.value = btn_num1 * Number(num.value) ;
							break;
							case "/":
								if (num.value == "0") { //如果除数为0，显示提示信息。
									num.value = "除数不能为0！";	
								}else{
									num.value = btn_num1 / Number(num.value);
								}
							break;
						}
						
						break;

						case "m":
						document.getElementById("m").onclick = function(){
							window.location.href = "https://github.com/minos-ty";
						}
						break;
				}
			}
		}
	}
}














