function User(email, password){
    this._email = email;
    this._password = password;



    Object.defineProperty(this, 'email', {

        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const chai = new User("chai@ch.com", "chai@123")
console.log(chai.email);
