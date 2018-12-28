document.write("<br /> <br /> <br />"+"Notes for JavaScript");
//Function carried as variables.
pow = function(base,exp)
{
    //Use "let" for re-assginable, non-overiddable local field.
    let output = 1;

    for(let i=0; i<exp; i++)
        output *= base;

    return output;
};
//Try power function.
console.log(pow(2,6));

function useless(mess)
{
    console.log(mess);
}

//Functions may be passed around by their declared names.
useless(typeof useless);

//OOP

//Old functional construct of objects.
/**
 * In this mode, it is advisable that all members of the class, fields and methods, instance or static, be declared
 * external to the function body, which is executed per creation of object. Static members, succeeding this declaration,
 * can be invoked directly. While instance fields may be directly reset in constructor or externally with an object
 * reference, and instance methods, since they deploy instance data, can be invoked with a proper object reference to
 * account for the internal this.fields.
 *
 * This way of initializing fields entails, nonetheless, that there exist static copies with default values of instance
 * fields and methods in class.prototype.
 *
 * The malady of this idiom is that weak compartmentalization is necessary--initializations as well as major declaration
 * of methods must be external to the function body. This idiom,indicates that the structural difference between static
 * and non-static members are indeed the need for subjective instance data.
 */

/* Add a static field to the class. Functions and fields added to the prototype may effectively serve as static entities
in that no instance fields or methods are invoked in such invocations.
 */
BankAccount.prototype.createdBAccounts = [];
//Add a static method. Methods and fields should be added external to the constructor declaration so the execution is
//but once carried.
BankAccount.prototype.displayBAccounts = function()
{
    return BankAccount.prototype.createdBAccounts.toString();
};

//Initialize instance variables for the class. These instance fields can later be appropriated in the constructor when
//referred to as this.field .
BankAccount.prototype.name = "AccountHead";
BankAccount.prototype.balance = 0;


/*Define a class as a function. The function body is the equivalent of a constructor in that it is executed per each
construction. Therefore, initializations of members, fields and methods, instance or static, should be added external to
this function.
 */
function BankAccount(name, deposit)
{
    /* Conjunction with "new" keyword in construction. See later note.
    This mode of initializing fields or methods does not register the fields or methods themselves in the functions, but
    only append them in each individual object.*/
    this.name = name;
    this.balance = deposit;
    //Define a deposit method. This method will be re-created and stored in each construction and will not be stored in
    //the profile of the class in general. Nevertheless, if the functions is created with a name, the mode of
    //initialization will not keep a static copy in class.prototype. And as long as all objects are treated with these
    //initializations, accesses to these members would be viable.
    this.deposit = function(dep)
    {
        this.balance += dep>0?dep:0;
    }
    //Add to all instances.This field will apply to all BankAccount objects. These lines are executed per-construction
    //though, inefficient.
    BankAccount.prototype.password = "Must Be Set!";
    BankAccount.prototype.createdBAccounts.push(this);
}

//Non-violational late initialization.
ba1 = new BankAccount();
ba1.name = "Derek";
ba1.balance = 1000;
ba1.password = "derek's password";

//Initialization without "new" entails supposed instance fields stored in the global scope.
//ba2 = BankAccount("Matthew",100);
ba2 = new BankAccount("Matthew",100);
//Objects treated as associative arrays.
ba2["password"] = 'Matthew1225';
console.log(ba2.password);

//Append external function to class.
BankAccount.prototype.withdraw = function(wtd)
{
    this.balance -= wtd;
};

//Try added function.
ba1.withdraw(100);
console.log(ba1.balance);

//Field and method added to one instance alone.
ba2.privilege = function()
{
    this.balance += pow(10,5);
};

ba2.privilege();
//Observe effect.
console.log(ba2.balance);
//Won't do for other instances.
console.log("privilege" in ba1);


