// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(star = "*") {
    return function (word = "a hard worker") {
        return `You are ${star}${word}${star}!` 
    }
}