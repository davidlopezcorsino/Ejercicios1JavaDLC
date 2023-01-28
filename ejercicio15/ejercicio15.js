const users = [
    {username: "ppc90", age:30, premium:false},
    {username: "lu65", age:24, premium:false},
    {username: "maria3", age:36, premium:false},
    {username: "abc123", age:20, premium:true},
    {username: "sergio58", age:26, premium:true}
]

const premiumUsers = users.filter(function(user) {
    return user.premium === true
    
});

console.log(premiumUsers)

const nopremiumUsers = users.filter(function(user) {
    return user.premium !== true
    
});
let arrayNopremium = [];
arrayNopremium.push(nopremiumUsers)
console.log(arrayNopremium)