
function getDayName(dateString) {
    const day = new Date(dateString);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    return weekDays[day.getDay()];

}
let date = getDayName("2/9/2022")
console.log(date)
