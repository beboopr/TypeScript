function debug(message: any): void{
    function getFruit(index: number): string{
        return fruits[index]
    }
    // console.log(`you choose a ${getFruit(0)}`)

    // console.log("Hello Captin ED")

let firstname: string = "ED";
let age: number = 25;
let good: boolean = true;
let fruits: string[] = ["banana", "apple"];

// console.log(`
// First Name: ${firstname}
// Your Age: ${age}
// You have many ${fruits}
// `);

enum taxForm{
    standard = 1040,
    childCredit = 1065,
    Scorp = 1121,
    Ccorp = '1020s'
}
console.log(`you need from ${taxForm.childCredit}`)
//

   //no return here
    // console.log(message)
}

debug("No return")


interface teacher {
    name: string,
    years: number,
    subject: string[],
    age: number
}
let damian: teacher = {
    name: "damian",
    years: 20,
    subject: ["javascript","typescript"],
    age: 49
}

console.log(damian)