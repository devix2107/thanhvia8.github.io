function User(firstName, lastName, email, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.avatar = avatar;
}

var admin = new User("Thanh", "Vĩ", "thanhvi@gmail.com", "con heo");
var user = new User("Thanh", "Nam", "thanhnam@gmail.com", "con chó");

console.log(admin);
console.log(user);
