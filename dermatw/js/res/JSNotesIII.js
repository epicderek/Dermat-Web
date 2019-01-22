document.write("Notes for JavaScript III: Miscellaneous Notations");

//Order of compiling.
/*
    All variables and non-anonymous functions are compiled first. When invokation occurs, the code is executed.
    The order of compilation for function supercedes that of variables.
 */

function processVarFirst()
{
    //This would not throw an error as the variable a is first pre-processed before execution.
    console.log(a);
    var a;
}

/*
    Bitwise operators.
 */
//<< shifts the effective digits to the left by a given number of digits.
console.log(8<<2);
//>> shifts the effective digits to the right while padding the very left with the "sign" digit.
console.log(-3>>1);
//>>> shifts all digits to the right and pads zeros on the left.
console.log(-3>>>1);
console.log(~5);

/*
    Addition will attempt to convert operands to strings or numbers, among which the former is prioritized.
    Subtraction will always attempt to convert to numbers.
    The process follows from .valueOf() to .parseFloat(.toString()) to direct conversion.
 */

/*
    Relational operators.
 */
//Chained comparisons allowed.
number = 4;
console.log(4<=number<10<=100);
//String compares by consecutive comparison of letters.
console.log('abc'>'Abc');
//Prioritize to number.
console.log(3>"2");
console.log("1"<10);

/*
    Assignments.
 */
let a = b = c = 10;
//Cannot delete local elements.
console.log(delete a);
//Assignment returns last value.
console.log((d=2,a=4));

//Boolean evaluations.
//Assignments? Must be global or declared variable.
if(assign = 1)
    console.log('Assignment evaluates to true!');
//Empty array can be equivalent to false.
console.log([]==false);
//If first converted to boolean by land, it can be equated with true.
console.log(Boolean([])==true);
//[] evaluates to true in if statements as an object.
if([])
    console.log("Empty Array Evaluated to True!");
else
    console.log("Empty Array Evaluated to False!");
//Numbers, strings, and null.
console.log(0==false);
console.log(''==false);
//Null or undefined is not true or false.
console.log(null==false);
console.log(undefined==false);
//Empty object is not true or false either.
console.log(new Object()==true);
console.log(new Object()==false);
//Mysterious indeed!
console.log([]==![]);
//[] is evaluated to true.
console.log(undefined || [] || '');
console.log(undefined || '' || 0);
//Boolean object passes for true.
if(new Boolean(false))
    console.log("Boolean false object evaluates to true.");
//! forces evaluation.
if(!Boolean(false))
    console.log("Boolean false evaluates to false.");
//!!converts the original type to boolean.
console.log(!!a);
//Composite boolean statements (&&, ||, ^).
//Composite and operator returns the first false statement or the last statement.
console.log(3 && 5);
//Composite or operator returns the first true or the final statement.
console.log(1 || 2);
console.log('' || 2);
//And expression is evaluated first.
//Example of an imitated if-elseif statement.
console.log(a==0&&alert('false first statement') || b==10&&alert('true second statement'));
//Assignment with and statements happen succeeding the evaluation of both expressions.
let u;
console.log(u = 5&&u);
//Assignment without knowledge of previous declaration can be carried this way.
var undeclared = undeclared?undeclared:1;
console.log(undeclared);
//XOR returns true if and only if one of the expression evaluates to true.
console.log(new Number(1)==new Number(1)^1==new Number(1));


/*
    Objects.
 */
//Type of is invoked dynamically, so no error is thrown.
console.log(typeof undeclaredvariable);
//But instanceof is not.
//console.log(undeclaredvariable instanceof Object);

//Initialization is identical under such two forms.
map1 = {a:1, b:2};
map2 = {'a':1, 'b':2};
//.toString automatically invoked, so is integer conversion for arrays.
let obj = {toString: ()=>'a'};
console.log(map1[obj]);
//Cannot append properties to a non-object datatype.
num = 5;
//Autoboxing.
num.poss = 1;
console.log(num);
console.log(num.poss);

//Can be appended to arrays.
arr = [1,2,3];
arr.poss = 1;
console.log(arr.1);
console.log(arr.poss);
//Primitive.
prim = 5;
//Wrapper.
prime = new Number(5);
wra = new Number(5);
//Evaluated equal when a wrapper is unboxed to compare with a primitive.
console.log(prim==prime);
//Not so when two wrappers are compared.
console.log(prime==wra);
//Wrapping primitives.
//Can't do 10.toString();
//Can
console.log((10).toString());
//Null appears to be an object type but is not an instance of Object.
console.log(null instanceof Object);
console.log(typeof null);