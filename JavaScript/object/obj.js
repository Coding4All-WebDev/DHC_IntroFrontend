
let y = new Object();

y.name = "john";

y.getName = function getName() { return this.name; }


// how to use this object


y.getName();