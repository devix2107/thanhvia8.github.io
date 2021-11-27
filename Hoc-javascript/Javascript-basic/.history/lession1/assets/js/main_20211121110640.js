function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var author = new User("thanh", "vĩ", "avatar1");
var user = new User("văn", "thanh", "avatar2");

console.log(author);
console.log(user);
