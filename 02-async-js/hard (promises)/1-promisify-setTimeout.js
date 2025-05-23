/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve,reject)=>{
        if (n < 0) {
            reject(new Error("Negative time is not allowed"));
        } else {
            setTimeout(() => {
                resolve();
            }, n * 1000);
        }
    })
    return p;
}


// Example usage:
wait(2).then(() => {
    console.log("Waited 2 seconds");
}).catch((error) => {
    console.error(error.message);
});

wait(-1).then(() => {
    console.log("Waited -1 seconds");
}).catch((error) => {
    console.error(error.message);
});