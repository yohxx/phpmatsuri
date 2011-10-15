/*
 * モーダル表示されるウインドウ
 */
var w = Ti.UI.currentWindow;

// チーム名表示
var teamName = Ti.UI.createLabel({
    text:w.teamName,
    font:{fontSize:12},
    color:'fff',
    textAlign:'center',
    width:"300",
    height:"20",
    top:5
});
w.add(teamName);

// 選手No表示
var playerNo = Ti.UI.createLabel({
    text:'No.' + w.playerNo,
    font:{fontSize:16},
    color:'fff',
    textAlign:'center',
    width:"300",
    height:"20",
    top:25
});
w.add(playerNo);

// 得点ボタン(2pt)
var b2 = Ti.UI.createButton({
    title:'2pt',
    font:{fontSize:32},
    top:60,
    left:20,
    height:60,
    width:125
});
w.add(b2);

// 得点ボタン(3pt)
var b3 = Ti.UI.createButton({
    title:'3pt',
    font:{fontSize:32},
    top:60,
    left:160,
    height:60,
    width:125
});
w.add(b3);

// 得点ボタン(1pt、フリースロー)
var b1 = Ti.UI.createButton({
    title:'フリースロー(1pt)',
    top:140,
    left:20,
    height:40,
    width:260
});
w.add(b1);

// キャンセルボタン(何も処理をしないでウインドウクローズ)
var bcancel = Ti.UI.createButton({
    title:'Cancel',
    top:200,
    left:20,
    height:40,
    width:260
});
w.add(bcancel);

// DB操作クラスをインクルード
Ti.include('game_db.js');

/*
 * 2ptクリック時の処理
 */
b2.addEventListener('click', function()
{
    // 得点追加処理
    var gameDb = new GameDb();
    gameDb.addPoint(w.teamId, 2);

    // ヘッダーの得点を更新
    w.gameWin.fireEvent('refresh');

    var t3 = Ti.UI.create2DMatrix();
    t3 = t3.scale(0);
    w.close({transform:t3,duration:200});
});

/*
 * 3ptクリック時の処理
 */
b3.addEventListener('click', function()
{
    // 得点追加処理
    var gameDb = new GameDb();
    gameDb.addPoint(w.teamId, 3);

    // ヘッダーの得点を更新
    w.gameWin.fireEvent('refresh');

    var t3 = Ti.UI.create2DMatrix();
    t3 = t3.scale(0);
    w.close({transform:t3,duration:200});
});

/*
 * 1ptクリック時の処理
 */
b1.addEventListener('click', function()
{
    // 得点追加処理
    var gameDb = new GameDb();
    gameDb.addPoint(w.teamId, 1);

    // ヘッダーの得点を更新
    w.gameWin.fireEvent('refresh');

    var t3 = Ti.UI.create2DMatrix();
    t3 = t3.scale(0);
    w.close({transform:t3,duration:200});
});

/*
 * Cancelクリック時の処理
 * modalウインドウを閉じるだけ
 */
bcancel.addEventListener('click', function()
{
    var t3 = Ti.UI.create2DMatrix();
    t3 = t3.scale(0);
    w.close({transform:t3,duration:200});
});

