$(function(){
    let p_expression = '';
    let op_flag = false;

    $(".calc_num").on({
        'click' : function(e){
                let calc_num = 0;

                // 数値だったら
                if (!isNaN(e.target.innerText)){
                    // 表示領域に数値を追加
                    addNumberOnDisplay(e.target.innerText);
                }
        }
    });

    $(".calc_op").on({
        'click' : function(e){
            // 演算キー取得
            let op_def =  {'＋':'+','－':'-','✕':'*','÷':'/','＝':'='}
            let calc_op = op_def[e.target.innerText];
            let calc_num = '';
            
            // "C"キーが押されたら計算をクリア
            if (e.target.innerText == "C"){
                p_expression = '';
                op_flag = false;
                $('#display').text("0");                
            // +-x/=キーが押されたら
            } else {
                // 表示領域から数値を取得
                let d_num = $('#display').text();
                // イコールキー処理
                if (calc_op == '='){
                    if (p_expression == ''){
                        return;
                    } else {
                        calc_num = eval(p_expression + d_num);
                        $('#display').text(calc_num);
                        p_expression = '';
                    }
                    op_flag = false
                // ＋－✕÷キー処理
                } else {
                    // 最初の式は内部情報で持つだけ
                    if (p_expression == ''){
                        p_expression = d_num + calc_op;
                    // ２つ目以降の式は前の式を計算して表示
                    } else {
                        calc_num = eval(p_expression + d_num);
                        p_expression = calc_num + calc_op;
                        $('#display').text(calc_num);
                    }
                    op_flag = true;
                }
                console.log("[" + p_expression + "]");
            }
        }
    });

    // 数字キーを押された時の処理
    function addNumberOnDisplay(num){
        let d_num = $('#display').text();
        let c_num = '';

        // 表示領域が０か前に演算キー(+-*/)が押されていた場合
        if (d_num == '0' || op_flag){
            c_num = num;
            op_flag = false;
        // それ以外は数字を末尾に追加
        } else {
            c_num = d_num + num;
        }
        $('#display').text(c_num);
    }
});