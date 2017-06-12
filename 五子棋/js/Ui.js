// 界面设计

function Ui() {
	// 获取可视区域的高度和宽度
	var w = window.innerWidth;
	var h = window.innerHeight;
	// 棋盘的宽度
	var conw = 0;
	// 计算棋盘的宽度
	if (h > w) {
		conw = Math.floor(w*0.8);
	} else {
		conw = Math.floor(h*0.7);
	}
	// 计算每一格的大小
	var ge = parseInt(conw/11);
	// 计算棋盘边沿与容器的左间距
	var juli = (conw - (ge * 10))/2;
	// 计算棋盘边沿与容器的右间距
	var julir = ge * 10 + juli;
	// 计算棋子的半径大小
	var zi = parseInt(ge/2.5);

	var c = document.getElementById("wzq");
	// 设置棋盘的宽度和高度
	c.width = conw;
	c.height = conw;
	var context = c.getContext("2d");
	// 设置棋盘颜色
	context.strokeStyle = "#CC6";
	// 绘制棋盘
	for (var i = 0; i < 11; i ++) {
		context.moveTo(juli + ge*i, juli);
		context.lineTo(juli + ge*i, julir);
		context.stroke();
		context.moveTo(juli, juli + ge*i);
		context.lineTo(julir, juli + ge*i);
		context.stroke();
	}
	// 绘制落棋
	function luozi(i, j, me) {
		context.beginPath();
		context.arc(juli + ge*i, juli + ge*j, zi, 0, 2 * Math.PI);
		context.closePath();
		if (me) {
			context.fillStyle = "#000";
		} else {
			context.fillStyle = "#DDD";
		}
		context.fill();
	}
	return {
		luozi: function(i, j, me) {
			luozi(i, j, me);
		},
		ge: ge,
		qipan: c
	}
}