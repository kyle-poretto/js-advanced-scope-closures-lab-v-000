function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){

    let startPoint = parseInt(startingBlock);
    let endPoint = parseInt(endingBlock);
    let travelDistance = Math.abs(endPoint - startPoint);
    let difference = blockRange - travelDistance;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

  function produceTipCalculator(tipRate){
    return function(amount){
      return tipRate * amount
    }
  }

  
