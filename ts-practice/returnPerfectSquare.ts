const returnPerfectSquare = (numOG) =>{
    if(numOG % Math.sqrt(numOG) == 0){
        var ans = Math.sqrt(numOG);
    }
    else {
        var numFloor = Math.sqrt(numOG);
        var ans = Math.floor(numFloor);
    }
    console.log(ans);
}

console.log(returnPerfectSquare(55));