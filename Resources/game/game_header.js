/*
 * ヘッダ部
 */
var myTeamName = '神奈川県立湘北高校';
var otherTeamName = '神奈川県立陵南高校';

// 自チーム名
var myTeamName = Ti.UI.createLabel({
    text:myTeamName,
    //backgroundColor:"blue",
    font:{fontSize:12},
    textAlign:'center',
    width:"100",
    height:"40",
    top:10,
    left:10
});
vHeader.add(myTeamName);

// VS label
var vsLabel = Ti.UI.createLabel({
    text:"VS",
    //backgroundColor:"red",
    font:{fontSize:12},
    width:"100",
    height:"40",
    textAlign:'center',
    top:10,
    left:110
});
vHeader.add(vsLabel);

// 相手チーム名
var otherTeamName = Ti.UI.createLabel({
    text:otherTeamName,
    //backgroundColor:"green",
    font:{fontSize:12},
    textAlign:'center',
    width:"100",
    height:"40",
    top:10,
    left:210
});
vHeader.add(otherTeamName);

// 得点をDBから取得して表示する
Ti.include('game_db.js');

var gameDb = new GameDb();
var myDbPoint = gameDb.getPoint(1);
var otherDbPoint = gameDb.getPoint(2);

// 自チーム得点表示
var myPoint = Ti.UI.createLabel({
    text:myDbPoint,
    //backgroundColor:"blue",
    font:{fontSize:36},
    textAlign:'center',
    width:"100",
    height:"40",
    top:50,
    left:10
});
vHeader.add(myPoint);

// 相手チーム得点表示
var otherPoint = Ti.UI.createLabel({
    text:otherDbPoint,
    //backgroundColor:"green",
    font:{fontSize:36},
    textAlign:'center',
    width:"100",
    height:"40",
    top:50,
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

