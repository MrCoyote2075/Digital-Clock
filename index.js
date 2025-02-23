const clock = document.getElementById("clock");
setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    let meridiem = hour < 12 ? "AM" : "PM";
    hour = String(hour % 12 || 12).toString().padStart(2,0);
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);
    let time = `${hour}:${minutes}:${seconds} ${meridiem}`;
    clock.textContent = time;
    console.log(time);
},1000);
