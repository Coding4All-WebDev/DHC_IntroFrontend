function dict()
{
    // called Object in JavaScript (dictionary in python)
    
    let a ={
        college:"vivek",
        name:"martin",
        languages:['c','c++','python']
    }

    // printing typeof a
    console.log(typeof a);
    
    // How to make new keys and assign values
    a["name"]="john";

    for(let i = 0; i < Object.keys(a); i++) {
        console.log(a[i]);
    }
    // console.log(Object.values(a))
    return a

}
console.log(dict())