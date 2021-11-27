function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var user1 = new User("thanh", "vĩ", "avatar1");
var user2 = new User("văn", "thanh", "avatar2");

console.log(user1);
console.log(user2);
