var toddayMember = new Array();  // 本日の参加メンバーを入れる配列を新規作成

// 関数start
$(function() {
    $('#start').click(function()  {
        var theamA = new Array();               // あたりの人たちを入れる配列を新規作成
        var theamB = new Array();               // はずれの…〃
        var hitNum = Number($('select[name="hit"]').val());   // あたりのくじの本数を変数[hitNum]に格納
        var missNum = Number($('select[name="miss"]').val()); // はずれの…〃
        var rand = 0;                           // ランダムの数字 初期値は0

        todayMember = $('input[type="checkbox"]:checked').map(function(){
            return $(this).val();                 // チェックのついたメンバーを配列に格納
        }).get();

        // 人数に対してくじが足りない時にアラートして処理を終了
        if(todayMember.length > hitNum+missNum){
            alert("くじの本数が足りないよ");
            exit;
        }

        // 1人ずつ、あたりもしくははずれを決める
        for(var i = 0; i < todayMember.length; i++ ){
            if(hitNum == 0 && missNum > 0){       // あたりくじがなくなっていて、はずれが余っていればrand=2
            rand = 2;
            }else if(missNum == 0 && hitNum > 0){ // はずれくじがなくなっていて、あたりが余っていればrand=1
            rand = 1;
            }else{                                // どちらでもなければランダムで1か2
            rand = Math.floor( Math.random() * 2 ) + 1;
            }

            if(rand == 1){
            theamA.push(todayMember[i]);        // 1だったらあたりチームの配列に追加
            hitNum += -1;                       // あたりくじを1本減らす
            }else if(rand == 2){
            theamB.push(todayMember[i]);        // 2だったらはずれチームの配列に追加
            missNum += -1;                      // はずれくじを1本減らす
            }
        }
        $("#result h3:first-child").text("あたり："+theamA); // あたりチームを表示
        $("#result h3:last-child").text("はずれ："+theamB);  // はずれチームを表示
    });
});