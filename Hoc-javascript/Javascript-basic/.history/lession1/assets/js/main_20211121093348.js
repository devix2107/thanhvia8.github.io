function User(firstName, lastName, email, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.avatar = avatar;
}

var author = new User("Thanh", "Vi", "vilatui217@gmail.com", "con mèo");
var user = new User("Thanh", "Van", "abcatui217@gmail.com", "con heo");

console.log(author);
console.log(user);
