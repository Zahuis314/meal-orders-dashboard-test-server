module.exports = () => {
    var moment = require('moment')
    function rand(min,max){
        return Math.floor(Math.random() * max)+min
    }
    const data = { meals: []}
    var day = moment().startOf('year')
    for (let i = 0; i <= 365; i++){
        data.meals.push({id: i, 
            day: day.date(), month: day.month(), year: day.year(),
            // m: day.clone(),
            meals: rand(0,30),
            costumers: rand(0,30),
            lunches: rand(0,30),
            dinners: rand(0,30),
            special_request: rand(0,30),
            is_in_service: day.isoWeekday()<6,
            is_blocked: !Boolean(Math.floor(Math.random() * 10)),
            is_stopped: !Boolean(Math.floor(Math.random() * 10))
        })
        day = day.add(1,'days')
    }
    return data
}