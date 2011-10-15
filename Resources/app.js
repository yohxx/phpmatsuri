// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// ベースウインドウ
//
var win1 = Titanium.UI.createWindow({
    title:'Menu',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Menu',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Menu Window',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win1.add(label1);

//
// ゲーム用のウインドウ
//
var winGame = Titanium.UI.createWindow({
    title:'BasketBall Score',
    url:'game/game.js',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'game socre',
    window:winGame
});

//
// データ同期用ウインドウ
//
var winSync = Titanium.UI.createWindow({
    title:'Sync',
    url:'game/game_sync.js',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'sync',
    window:winSync
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP
});
