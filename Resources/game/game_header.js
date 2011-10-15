/*
 * ヘッダ部
 */
var myTeamName = '神奈川県立湘北高校';
var otherTeamName = '神奈川県立陵南高校';

// 自チーム名
var myTeamNameLabel = Ti.UI.createLabel({
    text:myTeamName,
    font:{fontSize:12},
    textAlign:'center',
    width:"110",
    height:"35",
    top:1,
    left:10
});
vHeader.add(myTeamNameLabel);

// VS label
var vsLabel = Ti.UI.createLabel({
    text:"VS",
    font:{fontSize:12},
    width:"100",
    height:"35",
    textAlign:'center',
    top:1,
    left:110
});
vHeader.add(vsLabel);

// 相手チーム名
var otherTeamNameLabel = Ti.UI.createLabel({
    text:otherTeamName,
    font:{fontSize:12},
    textAlign:'center',
    width:"110",
    height:"35",
    top:1,
    left:200
});
vHeader.add(otherTeamNameLabel);

// 得点をDBから取得して表示する
Ti.include('game_db.js');

var gameDb = new GameDb();
var myDbPoint = gameDb.getPoint(1);
var otherDbPoint = gameDb.getPoint(2);

// 自チーム得点表示
var myPoint = Ti.UI.createLabel({
    text:myDbPoint,
    font:{fontSize:36},
    textAlign:'center',
    width:"100",
    height:"40",
    top:40,
    left:10
});
vHeader.add(myPoint);

// 相手チーム得点表示
var otherPoint = Ti.UI.createLabel({
    text:otherDbPoint,
    font:{fontSize:36},
    textAlign:'center',
    width:"100",
    height:"40",
    top:40,
    left:210
});
vHeader.add(otherPoint);

/*
 * 得点表示の為の独自イベント
 */
win.addEventListener('refresh',function(){
    Ti.API.debug('refresh event!');
    myDbPoint = gameDb.getPoint(1);
    otherDbPoint = gameDb.getPoint(2);
    
    Ti.API.debug('myDbPoint:'+myDbPoint);
    Ti.API.debug('otherDbPoint:'+otherDbPoint);
    myPoint.text = myDbPoint;
    otherPoint.text = otherDbPoint;
});