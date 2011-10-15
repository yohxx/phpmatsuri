/*
 * チーム毎の表示クラス
 * 出場選手のアイコンを並べ、それぞれに得点アクション
 * ゲーム終了、メンバーチェンジ、ファウルボタンを設置
 */

var TeamObj = function(viewObj, teamId, teamName){
    this.teamName = teamName;
    this.teamView = viewObj;
    this.teamId = teamId;

    this.showView = function(){
        // チーム名
        var teamNameLabel = Ti.UI.createLabel({
            text:this.teamName,
            font:{fontSize:12},
            color:'red',
            textAlign:'center',
            width:"300",
            height:"30",
            top:2,
            left:10
        });
        this.teamView.add(teamNameLabel);

        // アイコンサイズと位置定義
        var iconWidth = 90;
        var iconHeight = 90;
        var iconTop = 30;
        var iconSecond = 120;

        var ivPlayer1 = Ti.UI.createImageView({
            image:'../images/player.png',
            width:iconWidth,
            height:iconHeight,
            top:iconTop,
            left:15
        });
        this.teamView.add(ivPlayer1);

        var ivPlayer2 = Ti.UI.createImageView({
            image:'../images/player.png',
            width:iconWidth,
            height:iconHeight,
            top:iconTop,
            left:115
        });
        this.teamView.add(ivPlayer2);

        var ivPlayer3 = Ti.UI.createImageView({
            image:'../images/player.png',
            width:iconWidth,
            height:iconHeight,
            top:iconTop,
            left:215
        });
        this.teamView.add(ivPlayer3);

        var ivPlayer4 = Ti.UI.createImageView({
            image:'../images/player.png',
            width:iconWidth,
            height:iconHeight,
            top:iconSecond,
            left:55
        });
        this.teamView.add(ivPlayer4);

        var ivPlayer5 = Ti.UI.createImageView({
            image:'../images/player.png',
            width:iconWidth,
            height:iconHeight,
            top:iconSecond,
            left:160
        });
        this.teamView.add(ivPlayer5);

        // 矢印アイコン
        // 自チームと相手チームで矢印配置が違うので切替
        if (this.teamId == 1) {
            this.ivArrow = Ti.UI.createImageView({
                image:'../images/arrow.png',
                width:20,
                height:40,
                top:iconSecond,
                left:290
            });
        } else {
            this.ivArrow = Ti.UI.createImageView({
                image:'../images/arrow_left.png',
                width:20,
                height:40,
                top:iconSecond,
                left:10
            });
        }
        this.teamView.add(this.ivArrow);

        /*
         * 得点アクション
         */
        Ti.include('game_point.js');

        ivPlayer1.addEventListener('click', function()
        {
            var gamePoint = new GamePoint(4, teamId, teamName);
            gamePoint.showModal();
        });

        ivPlayer2.addEventListener('click', function()
        {
            var gamePoint = new GamePoint(7, teamId, teamName);
            gamePoint.showModal();
        });

        ivPlayer3.addEventListener('click', function()
        {
            var gamePoint = new GamePoint(8, teamId, teamName);
            gamePoint.showModal();
        });

        ivPlayer4.addEventListener('click', function()
        {
            var gamePoint = new GamePoint(10, teamId, teamName);
            gamePoint.showModal();
        });

        ivPlayer5.addEventListener('click', function()
        {
            var gamePoint = new GamePoint(11, teamId, teamName);
            gamePoint.showModal();
        });

        /*
         * メニューボタン
         */

        var menuTop = 250;

        var timeoutButton = Ti.UI.createButton({
            title:'タイムアウト',
            font:{fontSize:10},
            height:50,
            width:90,
            top:menuTop,
            left:10
        });
        this.teamView.add(timeoutButton);

        var foulButton = Ti.UI.createButton({
            title:'ファウル',
            font:{fontSize:10},
            height:50,
            width:90,
            top:menuTop,
            left:110
        });
        this.teamView.add(foulButton);

        var memberButton = Ti.UI.createButton({
            title:'メンバーチェンジ',
            font:{fontSize:10},
            height:50,
            width:90,
            top:menuTop,
            left:210
        });
        this.teamView.add(memberButton);
    };

    /*
     * 矢印へのスクロールイベント追加
     */
    this.addScrollEvent = function(scrollViewObj){

        this.ivArrow.addEventListener('click', function()
        {
            if (scrollViewObj.currentPage == 0) {
                scrollViewObj.scrollToView(1);
            } else {
                scrollViewObj.scrollToView(0);
            }
        });
    };
};
