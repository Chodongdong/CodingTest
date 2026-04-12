function solution(box, n) {
    let wid = Math.floor(box[0]/n);
    let len = Math.floor(box[1]/n);
    let hei = Math.floor(box[2]/n);
    
    return wid*len*hei;
}