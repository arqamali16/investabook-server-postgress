const payments = []

class Payment {
    constructor(date,amount,reciever,payer){
        this.date = date;
        this.amount = amount;
        this.reciever =  reciever;
        this.payer = payer;
    }

    add = () =>{
        console.log(this)
        payments.push(this)
    }

    static getPayments = () => {
        return payments
    }

    static getPaymentsById = (product_id) =>{
        console.log(product_id)
    }
}


module.exports = Payment