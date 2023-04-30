const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
] 

for (const info of students) {

    const {name, city} = info
    const details = `${name} lives in ${city}`
    // console.log(details)
}

const shoppingList = ["eggs", "milk", "butter"];


function opetator(num) {

    console.log('nums',num)
    console.log('arguments', arguments)

}

function operator(...num){

    console.log('rest operator',num)

} 

// opetator(4,5,6,2,45,5,2)
// operator(4,5,6,2,45,5,2)


const edible = ( food = "something") => {

const result = `I'm going to buy ${food} from the grocery shop`

console.log(result)

}

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

const makeCake = () => {

    if (listIngredients.includes("chocklate")){
    console.log("lets make chocklate cake")}
    else{
        console.log("let make another cake")
    }


}

class Player {
    constructor(name , country) {
        this.name = name
        this.country = country
    }

    printDetails() {

        console.log(`${this.name} was born in ${this.country}`)
    }
}

const messi = new Player ('messi', 'argentina')


class TennisPlayer extends Player {

    constructor(name, country, age){
        super(name, country)
        this.age = age
    }

    plays() {
        console.log(`${this.name} is an asset to ${this.country} and he is ${this.age}`)

    }
}

const roger = new TennisPlayer('roger' , 'italy' , '15')

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

// buyFlightTicket()
// .then( (success) => console.log(success))
// .catch( (error) => console.log(error) );

const getUserData = () => {

    return new Promise(( resolve, reject) => {

        const getRequest = true

        if (getRequest) {
             resolve({
                name: "house",
                job: "doc",
                stay: "hospital"
             });
        }else{
            reject("error");
        }
        

    })

}

// getUserData().then(data => console.log(data)).catch( error => console.log(error))

// fetch('https://jsonplaceholder.typicode.com/comments/1')
// .then(response => response.json())
// .then(data => console.log(data))



const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = await uploadStatus;
    
    console.log(result);
    console.log(photos.length);
}


const apiUrl = "https://api.chucknorris.io/jokes/random";

const  fetchApi = async () => {

    const response  = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.value);

}
console.log(fetchApi())
