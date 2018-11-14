//setTimeout(function(){console.log("2 seconds passed")} ,2000);
function callback(value=2,callbackfun)
{
    callbackfun(value);
    console.log(value+22);
}
callback(10,function(data){console.log(data)});