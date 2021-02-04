function wakeDog(){
    console.log(`Wake ${dogName} the ${dogBreed}.`)
    return `Wake ${dogName} the ${dogBreed}.`
}

function leashDog(){
    console.log(`Leash ${dogName} the ${dogBreed}.`)
    return `Leash ${dogName} the ${dogBreed}.`
}

function walkToPark(){
    console.log(`Walk ${dogName} the ${dogBreed} to the park.`)
    return `Walk ${dogName} the ${dogBreed} to the park.`
}

function throwFrisbee(){
    console.log(`Throw a frisbee to ${dogName} the ${dogBreed}.`)
    return `Throw a frisbee to ${dogName} the ${dogBreed}.`
}

function walkHome(){
    console.log(`Walk ${dogName} the ${dogBreed} home.`)
    return `Walk ${dogName} the ${dogBreed} home.`
}

function unleashDog(){
    console.log(`Unleash ${dogName} the ${dogBreed}.`)
    return `Unleash ${dogName} the ${dogBreed}.`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    return routine.map(fn => fn(dog, dogBreed))
}