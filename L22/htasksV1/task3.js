//1)1200*8=9600 - sheets in 8 weeks.
//2) 9600:500=19,2.
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const sheets_in_8_weeks = consumptionPerWeek * weeksAmount
const packs_for_8_weeks = ((sheets_in_8_weeks / sheetsInReamPaper) | 0) + 1
console.log(packs_for_8_weeks)


//1200/500=2,4 - number of packs per week.
//2.4*8=19,2.
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const packs_of_sheets_per_week = consumptionPerWeek / sheetsInReamPaper
const packs_of_sheets_per_8_weeks =  ((packs_of_sheets_per_week * weeksAmount) | 0) + 1
console.log(packs_of_sheets_per_8_weeks)