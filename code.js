class Beer{
    // static property
    static availableBeers = 50;

    // constructor for beer instances
    constructor(brand, serialNumber){
        this.brand = brand;
        this.serialNumber = serialNumber;
    }

    // static method to sell beer || Beer is only available when in stock
    static sellBeer(){
        if(Beer.availableBeers > 0){
            Beer.availableBeers--;
            console.log("Beer is brewing!!, Kindly wait a moment");
           }else{
            console.log("Unavailable, Thanks for your patronage!");
           }
    }

    // static method to check stock
    static checkStock(){
        console.log(`We have ${Beer.availableBeers} beers in stock`);
    }


}



class Customer{
    //static property
    static totalCustomers =  0;

    // constructor for customer instances
    constructor(name, age){
        this.name = name;
        this.age = age;
        Customer.totalCustomers++;
    }
    
    // static method to check total customers
    static totalCustomers(){
        console.log(`We have ${Customer.totalCustomers} customers in total`);
    }

    // instance method to register customer
register(){
    console.log(`${this.name}, Welcome to the family`);
}

    // instance method to order beer || Persons below 18 are not eligible to order beer
orderBeer(){
    console.log(`${this.name} your order is being processed...`);
    if(this.age < 18){
        console.log("Sorry, you are not eligible to order beer");
    }else{Beer.sellBeer();
    }
    console.log("Thanks for your patronage")
}

}
