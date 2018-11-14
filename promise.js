var promise =new Promise(function(response,reject){
    response(2);
      })

promise.then(first).then(second).then(thrid).then(function (response){console.log("final value  " + response);})

function first (value=5)
{
    return new Promise((resolve,reject) =>{resolve(value+2);} 
    );
}
function second(value)
{
    return new Promise((resolve,reject) =>{resolve(value+2);} 
    );
}
function thrid (value)
{
    return new Promise((resolve,reject) =>{resolve(value+2);} 
    );
 }





// var promise =new Promise(function(response,reject){
//     response(2);}
//     )

// promise.then(first).then(second).then(thrid).then(function (response){console.log("final value  " + response);})

// function first (value)
// {
//     return value+2;
// }
// function second(value)
// {
//     return value+2;
// }
// function thrid (value)
// {
//     return value+2;
// }