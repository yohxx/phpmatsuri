/*
 * 試合のスコア付けするウインドウ
 */

var win = Ti.UI.currentWindow;

/*
 * ヘッダー部分
 * 得点、対戦チーム名など試合に関係する情報を表示する
 */
// create header view
var vHeader = Ti.UI.createView({
    top:0,
    height:80,
    backgroundColor:'F0FFFF'
});
// ヘッダ部
Ti.include('game_header.js');
win.add(vHeader);

/*
 * チーム表示部分
 * 自チームと対戦相手チームそれぞれのViewを作成し
 * scrollableViewにて表示を切り替える
 */
// create teamA view
var vTeamA = Ti.UI.createView({
    borderRadius:10,
    top:85,
    height:305,
    backgroundColor:'90EE90'
});
Ti.include('game_team.js');
var myTeamObj = new TeamObj(vTeamA, 1, "湘北高校");
myTeamObj.showView();

// create teamB view
var vTeamB = Ti.UI.createView({
    borderRadius:10,
    top:85,
    height:305,
    backgroundColor:'D3D3D3'
});
var otherTeamObj = new TeamObj(vTeamB, 2, "陵南高校");
otherTeamObj.showView();

// scrollableViewを利用してチーム毎のView切替を行う
var scrollableView = Ti.UI.createScrollableView({
    views:[vTeamA,vTeamB]
});
myTeamObj.addScrollEvent(scrollableView);
otherTeamObj.addScrollEvent(scrollableView);
win.add(scrollableView);

/*
 * 共通メニュー部分
 * 試合終了、設定などチームに関係なく共通して
 * 利用するメニューを表示する
 */
// create menu view
var vMenu = Ti.UI.createView({
    borderRadius:10,
    top:310,
    height:70,
    backgroundColor:'778899'
});
Ti.include('game_menu.js');
win.add(vMenu);
