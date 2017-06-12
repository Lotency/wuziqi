// 下棋
// 是否结束游戏
var over = false;
// 是否为本人落子
var me = true;	

// 绘制棋盘
var ui = Ui();
// 获取赢法
var win = Win();

// 落子纪录
var check = [];
for (var i = 0; i < 11; i ++) {
	check[i] = [];
	for (var j = 0; j < 11; j ++) {
		check[i][j] = 0;
	}
}

// 双方赢棋方法
var myWin = [];
var youWin = [];
for (var i = 0; i < win.num; i ++) {
	myWin[i] = 0;
	youWin[i] = 0;
}

// 落子事件监听
ui.qipan.onclick = function(e) {
	if (over) {
		return;
	}
	var x = e.offsetX;
	var y = e.offsetY;
	// console.log(x + "," + y);
	var i = Math.floor(x / ui.ge);
	var j = Math.floor(y / ui.ge);
	// console.log("and" + i + "," + j);
	if (check[i][j] == 0) {
		ui.luozi(i, j, me);
		if (me) {
			check[i][j] = 1;
		} else {
			check[i][j] = -1;
		}
		for (var k = 0; k < win.num; k ++) {
			if (win.win[i][j][k]) {
				if (me) {
					myWin[k] ++;
					if (myWin[k] == 5) {
						document.getElementById("result").innerHTML = "游戏结束......黑子赢了!";
						over = true;
					}
				} else {
					youWin[k] ++;
					if (youWin[k] == 5) {
						document.getElementById("result").innerHTML = "游戏结束......白子赢了!";
						over = true;
					}
				}
			}
		}
		me = !me;
	}
}