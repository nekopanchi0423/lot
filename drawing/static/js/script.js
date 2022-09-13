var prefix_order_list = 'order_list_'; // 品目入力欄のname属性の接頭辞

// 関数start
$(function() {
     // "品目の追加"ボタンを押した場合の処理
    $('#btn_add').click(function () {
        var i, new_btn, len_list, new_list;

        // 品目入力欄を追加
        len_list = $('#order_list > li').length;
        new_list = '<li><input type="text" size="40" name="' + prefix_order_list + len_list + '"></li>';
        $('#order_list').append(new_list);

        // 削除ボタンの一旦全消去し、配置し直す
        $('#order_list input[type="button"]').remove();
        len_list += 1;
        for (i = 0; i < len_list; i += 1) {
        new_btn = '<input type="button" value="削除">';
        $('#order_list > li').eq(i).append(new_btn);
        }
    });

    // 削除ボタンを押した場合の処理
    $(document).on('click', '#order_list input[type="button"]', function (ev) {
        var i, idx, len_list;

        // 品目入力欄を削除
        idx = $(ev.target).parent().index();
        $('#order_list > li').eq(idx).remove();

        len_list = $('#order_list > li').length;

        // 入力欄がひとつになるなら、削除ボタンは不要なので消去
        if (len_list === 1) {
        $('#order_list input[type="button"]').remove();
        }

        // 入力欄の番号を振り直す
        for (i = 0; i < len_list; i += 1) {
        $('#order_list > li').eq(i).children('input[type="text"]').attr('name', prefix_order_list + i);
        }
    });
});
