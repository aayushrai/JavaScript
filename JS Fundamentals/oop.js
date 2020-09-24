let user = {
    firstName:"aayush",
    lastName:"rai",
    fullName:(user) =>{
        return `${user.firstName} ${user.lastName}`
    }
} 

class User{
    constructor(firstName,lastName,hobbies,password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.hobbies = hobbies;
        this.password = password;
    }
    fullName = () => {
        return `${this.firstName} ${this.lastName}`
    }
}
class AdminUser extends User{
    setPassword = (password) => {
        this.password = password;
    }
}

let aayush = new User('aayush','rai',['coding','listen song'],"1234");
let admin = new AdminUser('edith','stark',["ai"],"1234")
admin.setPassword("edith1234");
console.log(admin.password);
console.log(aayush.fullName( ))
console.log(user.fullName(user));