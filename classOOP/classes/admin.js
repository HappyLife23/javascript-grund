// här skapar vi en child klass till vår parent klass socialMedia

class Admin extends socialMedia {
    constructor(adminName, adminAge, city) {
        super(city);
        this.adminName = adminName;
        this.adminAge = adminAge;
        
    }

    adminProfile(){
    return `${this.adminName} is ${this.adminAge} years old and livs in ${this.city}`;
    

    } 
}


