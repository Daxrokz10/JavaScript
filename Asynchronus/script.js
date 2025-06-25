// callback

// function helloFromCallBack(cb) {
//     console.log('Hello from callback');
//     cb(); // call the callback function
// }

// function hello() {
//     console.log('hello');
// }

// // Pass hello as a callback to helloFromCallBack
// helloFromCallBack(hello);

//promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // throw an error to reject the promise
        resolve("Promise fulfilled");
        reject('Ah hell na');
    }, 2000);
});

promise
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('sugoma');
});