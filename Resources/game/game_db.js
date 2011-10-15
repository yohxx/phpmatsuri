/*
 * 試合中のDB操作クラス
 */

var GameDb = function(){
    this.dbName = 'gamedb';

    this.open = function(){
        this.db = Ti.Database.open(this.dbName);
    };

    this.close = function(){
        this.db.close();
    };

    /*
     * 得点追加
     */
    this.addPoint = function(teamId, point){
        this.open();
        var row = this.db.execute('select point from score where team_id = ?', teamId);
        Ti.API.debug('Team:'+teamId+', point:'+row.field(0));
        if (row.getRowCount() > 0) {
            // レコードがある場合は更新
            this.db.execute('update score set point = point + ? where team_id = ?', point, teamId);
            Ti.API.debug('update');
        } else {
            this.db.execute('insert into score (team_id, point) values (?, ?)', teamId, point);
            Ti.API.debug('insert');
        }
        this.close();
    };

    /*
     * 得点取得
     * 指定したチームのポイントを返却
     */
    this.getPoint = function(teamId) {
        this.open();
        var rows = this.db.execute('select point from score where team_id = ?', teamId);
        var point = 0;
        if (rows.getRowCount() > 0) {
            point = rows.field(0);
        }
        this.close();
        return point;
    };

    this.open();
    this.db.execute('CREATE TABLE IF NOT EXISTS score (team_id integer NOT NULL, point integer DEFAULT 0)');
    this.close();
};
