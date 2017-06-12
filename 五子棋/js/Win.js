// 赢棋方法

function Win() {
	// 赢法数组
	var win = [];
	// 赢法数量
	var winum = 0;
	for (var i = 0; i < 11; i ++) {
		win[i] = [];
		for (var j = 0; j <11; j ++ ) {
			win[i][j] = [];
		}
	}
	// 垂直赢法
	for (var i = 0; i < 11; i ++) {
		for (var j = 0; j < 11-4; j ++) {
			for (var k = 0 ; k < 5; k ++) {
				win[i][j+k][winum] = true;
			}
			winum ++;
		}
	}
	// 水平赢法
	for (var i = 0; i < 11-4; i ++) {
		for (var j = 0; j < 11; j ++) {
			for (var k = 0 ; k < 5; k ++) {
				win[i+k][j][winum] = true;
			}
			winum ++;
		}
	}
	// 对角赢法
	for (var i = 0; i < 11-4; i ++) {
		for (var j = 0; j < 11-4; j ++) {
			for (var k = 0; k < 5; k ++) {
				win[i+k][j+k][winum] = true;
			}
			winum ++;
		}
	}
	// 反对角赢法
	for (var i = 0; i < 11-4; i ++) {
		for (var j = 10; j > 3; j --) {
			for (var k = 0; k < 5; k ++) {
				win[i+k][j-k][winum] = true;
			}
			winum ++;
		}
	}
	return {
		win: win,
		num: winum
	}
}