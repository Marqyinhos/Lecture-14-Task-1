let user = { name: "John", years: 30 };
let {name: n, years: y, isAdmin = false } = user;
alert(n);
alert(y);
alert(isAdmin);