import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentances",
        type: "input",
        message: "Enter your sentance to count the words."
    }
]);
const word = answer.Sentances.split(" ");
console.log(word);
console.log(`Your word count is ${word.length}`);
