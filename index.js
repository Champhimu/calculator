function add() {
    var preval = 0, sign=0;
    preval = f.ans_screen.value;
    sign = preval.charAt(preval.length-1);
    // alert(sign);
    if(sign == '+' || sign == '-' || sign == '/' || sign =='*'){
        f.ans_screen.value=preval.substring(0,preval.length-1);
        f.ans_screen.value+='+';
    }else{
        f.ans_screen.value+='+';
    }
}

function sub() {
    var preval = 0, sign=0;
    preval = f.ans_screen.value;
    sign = preval.charAt(preval.length-1);
    // alert(sign);
    if(sign == '+' || sign == '-' || sign == '/' || sign =='*'){
        f.ans_screen.value=preval.substring(0,preval.length-1);
        f.ans_screen.value+='-';
    }else{
        f.ans_screen.value+='-';
    }
}

function div() {
    var preval = 0, sign=0;
    preval = f.ans_screen.value;
    sign = preval.charAt(preval.length-1);
    // alert(sign);
    if(sign == '+' || sign == '-' || sign == '/' || sign =='*'){
        f.ans_screen.value=preval.substring(0,preval.length-1);
        f.ans_screen.value+='/';
    }else{
        f.ans_screen.value+='/';
    }
}

function multiply() {
    var preval = 0, sign=0;
    preval = f.ans_screen.value;
    sign = preval.charAt(preval.length-1);
    // alert(sign);
    if(sign == '+' || sign == '-' || sign == '/' || sign =='*'){
        f.ans_screen.value=preval.substring(0,preval.length-1);
        f.ans_screen.value+='*';
    }else{
        f.ans_screen.value+='*';
    }
}