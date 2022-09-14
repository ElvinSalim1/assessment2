// Task 2 a
function reverseString(str, cb) {
    const str1 = str.split("").reverse().join("");
    setTimeout(() => {
        cb(str1);
    }, 5000);
}

reverseString("hello", (str) => {
    console.log(str);
})

// task 2 b
async function getBattery(){
    let battery = await navigator.getBattery();
    return `${battery.level * 100}%`;
}
getBattery().then(battery=>console.log(battery));