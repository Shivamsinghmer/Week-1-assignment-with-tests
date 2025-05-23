let count = 0;

function updateCounter() {
    count++;
    console.log(count);
}

const intervalId = setInterval(updateCounter, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Counter stopped");
}, 10000);