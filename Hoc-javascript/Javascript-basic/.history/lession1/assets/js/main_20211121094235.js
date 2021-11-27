function User(firstName, lastName, email, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.avatar = avatar;
}

var author = new User("Thanh", "Vi", "tui217@gmail.com", "con mèo");
var user = new User("Thanh", "Van", "abcatui217@gmail.com", "con heo");

author.title = "nguyễn hoài thanh vĩ";
console.log(author);
console.log(user);
