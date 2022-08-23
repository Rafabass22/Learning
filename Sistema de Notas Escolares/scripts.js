//Sistema de notas escolares
let score = 100

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Recuperação"
    }
return scoreFinal



}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(70))
console.log(getScore(56))
console.log(getScore(65))
console.log(getScore(71))
console.log(getScore(72))
console.log(getScore(40))
console.log(getScore(95))