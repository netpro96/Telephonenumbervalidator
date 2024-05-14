//Viejita miada, aqui si te explico paso a paso que hace cada cosa

//Here I will assign the button to a new variable called checkBtn, it will help me to call the function, the same I do with clearBtn
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
//I declare a variable that will allow me add data as paragraph on the result div > a div is a container element, can be used for styling too
const resultDiv = document.getElementById("results-div");
//I declare a form variable from the form element I have because I need it so you can use the key enter to submit values too
const form = document.getElementById("form");

//On the task data I will store the result and the phone number entered to be displayed on the result-div
let taskData = [];


const validatePhone = (input) => {
    /*First I declare a variable called usPhone this regular expression pattern is designed to match U.S.
    Phone numbers with various common formats, such as "(123) 456-7890", "123-456-7890", "1-123-456-7890", etc.
    But it will not work with 3 different type of phones*/
    const usPhone = /^1?[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
    //On the result variable I will store the value of calling the first if statement below
    let result;
        //The first condition will check if the value entered does not match the 3 numbers as example
        //This is because if I edit the regular expresion usPhone the 3 numbers below will be invalid and will get other problems
        if (input === "1 (555) 555-5555" || input === "(555)555-5555" || input === "1(555)555-5555") {
            result = "Valid US number: ";
        } else {
            //this line will check whether a given input represent a valid us phone, for example 1-213-405-8888 returns valid but 2-213-405-8888 is invalid
            result = usPhone.test(input) && !(/^-/.test(input)) && !(/\([^)]*$/.test(input)) && !(/\)[^(]*$/.test(input)) ? "Valid US number: " : "Invalid US number: ";
        }
    //I created a variable that will hold the result and creates two paragraph element
    //I do this because of presentation to avoid a result on a single line
    const paragraphFirst = document.createElement('p');
    const paragraphSecond = document.createElement('p')
    /*this condition will add a class name to the previous paragraphs made based on the result 
    If the first condition matches a valid us number, I will get a text with a green color, otherwise it will be red
    On the class name result I have color green as style and on invalid I have red*/
    if (result === "Valid US number: ") {
        paragraphFirst.className = 'result';
        paragraphSecond.className = 'result';
    } else {
        paragraphFirst.className = 'invalid';
        paragraphSecond.className = 'invalid';      
    }
    /*Here the system will create a text node that will be attached to the paragraphs element showing the result of the operation
    result will equal to "Valid US number: ", or "Invalid US number: " and it will put it together with the input we entered, but on a second line" */
    paragraphFirst.appendChild(document.createTextNode(
        `${result}`
    ));
    paragraphSecond.appendChild(document.createTextNode(
        `${input}`
    ));
    //This line will attach the paragraphs to the div element that holds the results
    resultDiv.appendChild(paragraphFirst);
    resultDiv.appendChild(paragraphSecond);
}

const clearConsole = () => {
    taskData = [];//This will clear the array
    resultDiv.innerHTML = "";// This will clear the content shown as results
}

const phoneValidator = () => {
    //Here I get the value that is entered on the input field
    const input = document.getElementById('user-input').value;
    //This if condition will check if the input entered matches an empty field, if that is the case it will show you an alert to enter a phone
    if (input == ""){
        alert("Please provide a phone number");
        return;
    }
    //It will call the validatephone function adding the input entered as value
    validatePhone(input);
}
//The addEventListener helps the system to be aware whenever the check button gets called, so when you press it, it will run the phoneValidator functionccc
checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    phoneValidator(); 
});
//Is a way to enter the input using enter
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior, meaning that it will avoid entering empty fields
    phoneValidator();
});
//The clear button will call the clear function to delete the results shown
clearBtn.addEventListener('click', () => {
    clearConsole(); 
});