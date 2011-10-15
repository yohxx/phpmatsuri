/*
 * スコアのデータ送信用フォーム
 */

var win = Ti.UI.currentWindow;

/*
 * ヘッダー部分
 * 得点、対戦チーム名など試合に関係する情報を表示する
 */
// create header view
var syncLabel = Ti.UI.createButton({
	title: 'Score Sync',
	width: 100,
    height:100
});
win.add(syncLabel);

/*
 * データ同期イベント
 */
syncLabel.addEventListener('click', function() {
	alert('hoge');
});
