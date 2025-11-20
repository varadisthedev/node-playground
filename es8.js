const calculatorFunction=()=>{
    return 32;
}

async function getData(){
    const result = await calculatorFunction()
    .then(data=>console.log("data fetched"))
    .then(data=>console.log(result));

    console.log("this will run first");
}
getData();
