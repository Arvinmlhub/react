const name ="Jhon";

const age =20;

const person ={name , age};

console.log(person)

function createProcedureES6(id1, name1, price1) {
    return {
        id: id1,
        name: name1,
        price: price1
    };
}

console.log(createProcedureES6(1, 'hello',100))


function createProcedureES6(id1, name1, price1) {
    return {
        id: id1,
        name: name1,
        price: price1,
        printDetails: function () {
            console.log("id ", id);
            console.log("id1 ", id1);
            
        }
    };
}
createProcedureES6(1, 'hello',100).printDetails();
//Error : VM238:7 Uncaught ReferenceError: id is not defined

function createProcedureES6(id1, name1, price1) {
    return {
        id: id1,
        name: name1,
        price: price1,
        printDetails: function () {
            console.log("id ", this.id);
            console.log("id1 ", id1);
            
        }
    };
}


//
function createProcedureES6(id, name, price) {
    return {
        id,
        name,
        price,
        printDetails() {
            console.log("id ", id);
            console.log("id ", this.id);
            
        }
    };
}
createProcedureES6(1,'abc',1000).printDetails();


//--------------------------------------------

const person1={
    name:"jhon",
    greet(){
        console.log(name);
    }
}

person.greet();


//------------------------

const person2={
    name1: "phone",
    id: 10, 
    address: {
        state:"UP", 
        distict:"Ayodhya",
        city: "Ayodhya",
        country:"India"
    }
}

const {id, name1, address: {state}}=person;


const data=[
    {name:"Laptop Hp" , price:50000},
    {name:"Laptop Dell" , price:45000},
    {name:"iphone" , price:55000},
    {name:"i pad" , price:105000}
    
]


data.filter(product=>product.price>50000).map(product=>product.price*0.1).reduce((total,discount)=>total+discount,0);



