setInterval(clock, 1000)
let span = document.getElementById("time");
console.log(span);
function clock() {
    const date = new Date()
    // console.log(date);
    let Second = date.getSeconds()
    let Minute = date.getMinutes()
    let Hour = date.getHours()
    span.innerText = `${Hour}:${Minute}:${Second}`
}
clock()