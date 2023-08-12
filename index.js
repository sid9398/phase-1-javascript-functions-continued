function saturdayFun(activity){
    if (activity === undefined){
        return 'This Saturday, I want to roller-skate!'
    }
}
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity){
    if (activity === undefined){
        activity = 'go to the office'
}
return `This Monday, I will ${activity}.`
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }