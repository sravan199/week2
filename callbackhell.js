
first(2,function(data,error){
    if(!error) {
          console.log(data);
          second(data,function(data,error){
            if(!error)
               {console.log(data);
                  third(data,function(data,error){
                      if(!error)
                        {console.log(data);}
                    });
                }
            });
        }
});

function first(value,callback)
{ callback(value,false);}
function second(value,callback)
{ callback(value+2,false);}
function third(value,callback)
{ callback(value+2,false);}

