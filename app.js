const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const electronicWatch = document.querySelector(".current-watch")
const currentDay = document.querySelector(".current-day")
const currentMounth = document.querySelector(".current-mounth")
const currentYear=document.querySelector(".current-year")
const currentDate = document.querySelector(".current-date")
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const currentTime = function () {
  const now = new Date()
  const getHour = now.getHours()
  const getMinute = now.getMinutes()
  const getSecond=now.getSeconds()
  const getYear = now.getFullYear()
  const getMounth = now.getMonth()
  const getDay = now.getDate()
    console.log(getDay);
  const hourDeg = (getHour*360/12)+(getMinute*360/12/60)
  const minuteDeg = (getMinute*360/60) + (getSecond*360/60/60)
  const secondDeg =(getSecond*360/60)
  
  hour.style.transform = `rotate(${hourDeg}deg)`
  minute.style.transform = `rotate(${minuteDeg}deg)`
  second.style.transform = `rotate(${secondDeg}deg)`
  electronicWatch.innerHTML = `${getHour}:${getMinute}`
currentDate.innerHTML=`${getDay},${monthNames[getMounth]},${getYear}`
}
currentTime()
setInterval(currentTime,1000)