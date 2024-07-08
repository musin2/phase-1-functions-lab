function distanceFromHqInBlocks(location){
    if(location > 42){
        return location - 42 ;
    } else{
        return 42 - location;
    }
}

let distanceInBlocks = distanceFromHqInBlocks(34);


function distanceFromHqInFeet(location){
    return Math.abs(location - 42) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
    return (Math.abs(startBlock - endBlock)) * 264;
}

function calculatesFarePrice(start, destination){
    let fareDistance = distanceTravelledInFeet(start, destination);
    let farePrice;

    if(fareDistance <= 400){
        farePrice = 0;
    } else if(fareDistance > 400 && fareDistance <= 2000){
        farePrice = (fareDistance - 400) *0.02;
    } else if(fareDistance > 2000 && fareDistance < 2500){
        farePrice = 25;
    } else if(fareDistance > 2500){
        farePrice = "cannot travel that far";
    }
   
    return farePrice;
}
