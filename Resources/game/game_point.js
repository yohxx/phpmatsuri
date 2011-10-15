/*
 * 試合中の得点に関する処理を行うクラス
 * @param playerNo
 * @param teamName
 */

var GamePoint = function(playerNo, teamId, teamName){
    this.playerNo = playerNo;
    this.teamName = teamName;
    this.teamId = teamId;

    this.showModal = function() {
        var t = Ti.UI.create2DMatrix();
        t = t.scale(0);

        // モーダル表示されるウインドウ
        var w = Ti.UI.createWindow({
            teamId:this.teamId,
            teamName:this.teamName,
            playerNo:this.playerNo,
            gameWin:Ti.UI.currentWindow,
            url:'/game/game_modal.js',
            backgroundColor:'#000',
            borderWidth:8,
            height:250,
            width:300,
            borderRadius:10,
            opacity:0.92,
            transform:t
        });

        // create first transform to go beyond normal size
        var t1 = Ti.UI.create2DMatrix();
        t1 = t1.scale(1.1);
        var a = Ti.UI.createAnimation();
        a.transform = t1;
        a.duration = 200;   // アニメーションの持続時間

        // when this animation completes, scale to normal size
        a.addEventListener('complete', function()
        {
            Ti.API.info('here in complete');
            var t2 = Ti.UI.create2DMatrix();
            t2 = t2.scale(1.0);
            w.animate({transform:t2, duration:200});
        });
        w.open(a);
    };
};


