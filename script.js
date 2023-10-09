document.getElementById("lenbtn").onclick = function () {
    let len = document.getElementById("length").value;
    let arrlen = len.split(",");
    document.getElementById("arrlen").innerHTML = arrlen.length;
}

document.getElementById("strbtn").onclick = function () {
    let str = document.getElementById("tostring").value;
    let arrstr = str.split(",");
    document.getElementById("arrstr").innerHTML = arrstr.toString();
}

document.getElementById("popbtn").onclick = function () {
    let poP = document.getElementById("pop").value;
    let arrpop = poP.split(",");
    arrpop.pop()
    document.getElementById("arrpop").innerHTML = arrpop;
}

document.getElementById("pushbtn").onclick = function () {
    let push = document.getElementById("push").value;
    let arrpush = push.split(",");
    arrpush.push(document.getElementById("newpush").value);
    document.getElementById("arrpush").innerHTML = arrpush;
}

document.getElementById("shiftbtn").onclick = function () {
    let shift = document.getElementById("shift").value;
    let arrshif = shift.split(",");
    arrshif.shift()
    document.getElementById("arrshift").innerHTML = arrshif;
}

document.getElementById("unshiftbtn").onclick = function () {
    let unshift = document.getElementById("unshift").value;
    let arrunshif = unshift.split(",");
    arrunshif.unshift(document.getElementById("newunshift").value);
    document.getElementById("arrunshift").innerHTML = arrunshif;
}

document.getElementById("delbtn").onclick = function () {
    let del = document.getElementById("delete").value;
    let arrdel = del.split(",");
    delete arrdel[document.getElementById("newdel").value];
    document.getElementById("arrdel").innerHTML = arrdel;
}

document.getElementById("joinbtn").onclick = function () {
    let joinning = document.getElementById("join").value;
    let joi = joinning.split(",");
    arrjoi = joi.join([document.getElementById("newjoin").value])
    document.getElementById("arrjoin").innerHTML = arrjoi;
}

document.getElementById("slibtn").onclick = function () {
    let slicing = document.getElementById("slice").value;
    let slic = slicing.split(",");
    let val1 = document.getElementById("slival1").value;
    let val2 = document.getElementById("slival2").value;
    document.getElementById("arrslice").innerHTML = slic.slice(val1,val2);
}

document.getElementById("splibtn").onclick = function () {
    let splicing = document.getElementById("splice").value;
    let splic = splicing.split(",");
    let val1 = document.getElementById("splival1").value;
    let val2 = document.getElementById("splival2").value;
    splic.splice(val1,val2);
    document.getElementById("arrsplice").innerHTML = splic;
}

