class vehicle{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('it can move anywhere');
    }
}

class Bus extends vehicle{
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }
    route() {
        console.log("Bangladesh to London");    
    }
}