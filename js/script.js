/****************************************************************
* 機　能： クリップボードにコピー
* 引　数： arg コピー元のオブジェクト
****************************************************************/
function CopyText(arg){
    var obj=document.all && document.all(arg) || document.getElementById && document.getElementById(arg);
    if (obj.value) {
        var doc = document.body.createTextRange();
        doc.moveToElementText(obj);
        doc.execCommand("copy");
        alert('クリップボードにコピーしました。');
    } else {
        alert('コピーするデータがありません。');
    }
}
