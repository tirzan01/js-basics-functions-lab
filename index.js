// Code your solution in this file!
function distanceFromHqInBlocks(userLocation){

    if(userLocation>=42){
        return userLocation-42
    }else{
        return 42-userLocation

    }
}

function distanceFromHqInFeet(userLocation){

if(userLocation>=42){
    return (userLocation-42)*264
}else{
    return (42-userLocation)*264
}

}

function distanceTravelledInFeet(userLocation, userDestination){

    if(userLocation>=userDestination){
        return (userLocation-userDestination)*264
    }else{
        return (userDestination-userLocation)*264
    }
}

function calculatesFarePrice(start, destination){

    if(start-destination===1 || destination-start===1){
        return 0
    }else if(start>destination && ((start-destination)*264<2000)){
        return ((start-destination)*264-400)*0.02
    }else if(start<destination && ((destination-start)*264<2000)){
        return ((destination-start)*264-400)*0.02
    }else if(start>destination && ((start-destination)*256>2500)){
        return 'cannot travel that far'
    }else if(start<destination && ((destination-start)*256>2500)){
        return 'cannot travel that far'
    }else{
        return 25
    }
}