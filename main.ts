import inquirer from "inquirer";

const answer: {
    Sentances: string
} = await inquirer.prompt([
    {
        name: "Sentances",
        type: "input",
        message: "Enter your sentance to count the words."
    }
]);

const word = answer.Sentances.trim().split(" ");
console.log(word);
console.log(`Your word count is ${word.length}`);