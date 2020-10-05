/** Amy Finlay - G00360784
 *  Lab 2 - Exercise 2
 */


class BMI { //A blueprint for creating projects
    constructor(height, weight) { //Starting point of the class, first method called
        this.height = height; //Arugments height and weight
        this.weight = weight;

    }

    calBMI() { //Method in which BMI will calculated

        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}

//Instance which will invoke the method calculate BMI
let MyBmi = new BMI (2, 90);
let calBMI = MyBmi.calBMI();

console.log(calBMI) //Will call output