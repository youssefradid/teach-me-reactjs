class Learner {
    constructor(firstname, lastname, email, phone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }
    
    
    get getEmail() {
        return this.email;
      };

    

}

export default  Learner;