const annihilateDifferentCaps = (strOG) =>{
    console.log(strOG);
    var strArray = strOG.split("");
    for(let i=0;i<strArray.length-1;i++){
        if(strArray[i] != strArray[i+1] && strArray[i] == strArray[i+1].toUpperCase() || strArray[i] == strArray[i+1].toLowerCase()){
            strArray.splice(i,2);
            console.log(strArray.join(''));
        }
        if(i>0){
            if(strArray[i] != strArray[i-1] && strArray[i] == strArray[i-1].toUpperCase() || strArray[i] == strArray[i-1].toLowerCase()){
                strArray.splice(i-1,2);
                console.log(strArray.join(''));
            }
        }
    }
}
console.log(annihilateDifferentCaps("AbBPaD"));
