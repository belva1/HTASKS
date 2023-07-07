//function packs_of_paper(weeksAmount=8) {
//    const sheetsInReamPaper = 500
//    const consumptionPerWeek = 1200
//    let reamPaper = 0
//
//    for (let papers = 0; papers < consumptionPerWeek * weeksAmount; papers+=sheetsInReamPaper){
//        reamPaper++
//    }
//    return reamPaper
//}
//
//console.log(packs_of_paper(8))


function packs_of_paper(weeksAmount=8) {
    const sheetsInReamPaper = 500
    const consumptionPerWeek = 1200
    let reamPaper = 0
    let papers = 0

    while(papers < consumptionPerWeek * weeksAmount){
        papers+=sheetsInReamPaper
        reamPaper++
    }
    return reamPaper
}

console.log(packs_of_paper(8))