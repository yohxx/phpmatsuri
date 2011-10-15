/*
 * メニューエリア
 */

var menuTop = 10;

var menuButton = Ti.UI.createButton({
    title:'終了',
    font:{fontSize:10},
    height:30,
    width:90,
    top:menuTop,
    left:13
});
vMenu.add(menuButton);

var historyButton = Ti.UI.createButton({
    title:'履歴',
    font:{fontSize:10},
    height:30,
    width:90,
    top:menuTop,
    left:113
});
vMenu.add(historyButton);

var configButton = Ti.UI.createButton({
    title:'設定',
    font:{fontSize:10},
    height:30,
    width:90,
    top:menuTop,
    left:213
});
vMenu.add(configButton);

/*
 * 終了ボタン
 * とりあえずalertあげとく
 */
menuButton.addEventListener('click', function()
{
    alert('終了します？');
});

/*
 * 履歴ボタン
 * とりあえずalertあげとく
 */
historyButton.addEventListener('click', function()
{
    alert('履歴表示と修正ができる画面へ');
});

/*
 * 設定ボタン
 * とりあえずalertあげとく
 */
configButton.addEventListener('click', function()
{
    alert('設定画面へ');
});
