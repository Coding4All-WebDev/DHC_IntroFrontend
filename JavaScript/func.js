// 1..
// function  factorial(x)
// {
//     var  i, fact=1
//     for(i=1;i<=x;i++)
//     {
//         fact=fact*i;

//     }
//     return fact;

// }

// console.log(factorial(5))


function Sort(arr){
    
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < ( arr.length - i -1 ); j++)
        {
            if(arr[j] > arr[j+1])
            {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }   
        }
    }
    return arr;
   }
   var arr = [234, 43, 55, 63,  5,77];
   console.log(Sort(arr));