//creates an object to keep track of values.
    const Calculator = {
        //this displays 0 on the screen
        Display_Value: '0',
        //this will hold the first operand for any experssions, we set it to null for now.
        First_Operand: null,
        //this checks whether or not the second operand has been input.
        Wait_Second_Operand: false,
        //this holds the operator, set to null for now.
        operator: null,
    };
    //this modifies values each time a button is clicked.
    function Input_Digit(digit) {
        const { Display_Value, Wait_Second_Operand } = Calculator;
        //checking truth statement on Wait_second value
        //Setting display value to clicked item
        if (Wait_Second_Operand === true) {
            Calculator.Display_Value = digit;
            Calculator.Wait_Second_Operand = false;
        } else {
            //overwrites Display value if current value is 0
            //otherwise it adds to it
            Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
        }
    }
    //this function handles decimal points
    function Input_Decimal(dot) {
        //ensures accidental clicking of decimal
        //doesnt cause bugs
        if (Calculator.Wait_Second_Operand === true) return;
        if (Calculator.Display_Value.indludes(dot)) {
            //if display value doesnt contain a decimal then add one
            Calculator.Display_Value += dot;
        }
    }

    //handling operators
    function Handle_Operator(Next_Operator) {
        const { First_Operand, Display_Value, operator } = Calculator
        //when an operator key is pressed, we convert the current number displayed
        //on the screen to a number and then store the result in Calculator.First_Operand if it doesnt exist
        const Value_of_Input = parseFloat(Display_Value);
        //checks if operator exists anf if Wait_Second is true, then updates operator and exits function.
        if (operator && Calculator.Wait_Second_Operand) {
            Calculator.operator = Next_Operator;
            return;
        }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if operator exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calculator object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //add fixed amount of numbers after decimal.
        result = Number(result).toFixed(9)
        //removes trailing 0;s
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//this function updates the screen with contents of Display Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target variable is object that represents element that was clicked
    const { target } = event;
    //if element that wasnt clicked isnt a button then exit function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
            return;
    }

    //ensures AC clears the numbers from Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})