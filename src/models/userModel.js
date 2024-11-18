export default class userModel{

                constructor(id,name,email,password){

                        this.id=id;
                        this.nam=name;
                        this.email=email;
                        this.password=password;

                }

  static add(name, email, password) {
    const newUser = new userModel(
      users.length + 1,
      name,
      email,
      password
    );
    users.push(newUser);
  }

  static isValidUser(email, password) {
    const result = users.find(
      (u) =>
        u.email == email && u.password == password
    );
    return result;
  }

}
var users=[{email:'abc@aa.com',password:'1111'}];