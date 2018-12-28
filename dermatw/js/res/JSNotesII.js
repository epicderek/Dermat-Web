document.write("<br /> <br /> <br />"+" Notes for JavaScript II: Miscelaneous Namespaces");

//Empty associative array, map, or object.
ns1 = {};
//Different references can be used to access the fields of the same object.
ns1.id = 5;
ns2 = ns1;
ns2.id = 10;
console.log(ns1.id,ns2.id);

//Contain functions in an object container.
ns2["accessId"] = function()
{
    return this.id;
};
console.log(ns1.accessId());
//this. reference to the container needed. Reference needed for invokation.
let assignFunFromContainer = ns1.accessId;
console.log(assignFunFromContainer());

/**
 * Links related to namespaces.
 */
document.write("<br /> <br /> <br /> <br /> Links and Resources <br />");
document.write(
    "<a href = 'https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/' target = _blank>"
    + "Modes of Packaging and Encapsulation. </a> <br />");
document.write(
    "<a href = 'http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html' target = _blank>"
    + "Modules. </a> <br />");




