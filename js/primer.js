/*
1. Composite function
Write a function called "rokket" which produces the following output when called:
console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16
This function must work for any three integer numbers.
*/

function rokket1(var1,var2,var3){
    return (var1*var2)*var3;
}

console.log(rokket1(2,5,3));

/*
2. Longest string
Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array.
Example:
const list = ['best', 'company', 'ever']
console.log(rokket(list)) // this outputs 'company'
*/

var var4 = ["a55","ss","d"];

function rokket2(var5){
    var dato1 = "";
    for(i=0;i<var5.length;i++){
        if(dato1.length<var5[i].length){
            dato1=var5[i];
        }
    }
    return dato1;
}

console.log(rokket2(var4));

/* 
3. String repetition
Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.
Example:
console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'
*/

function rokket3(var6,var7){
    var x="";
    for(i=0;i<var7;i++){
        x=x+var6;
    }
    return x;
}
console.log(rokket3("hola",5));

/*
4. Only last names
Write a function called "rokket" which receives a list of names from a contact book. Each name is an object consisting of a first name and last name. Return a list that
shows only the last names.
Example:
const contacts = [
{ firstName: 'Juanito', lastName: 'Rokket' },
{ firstName: 'James', lastName: 'Bond' },
{ firstName: 'Harry', lastName: 'Potter' }
]
console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']
*/

const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ];

function rokket4(varx){
       var x=[];
       for(i=0;i<varx.length;i++){
            x.push(varx[i].lastName);
        }
        return x;
}
console.log(rokket4(contacts));
/*
5. Unique numbers
Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
arrays).
Example:
console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
*/

function rokket5(var8,var9){
    var x=[];
    for(i=0;i<var8.length;i++){
        if (x.length == 0) {
            x.push(var8[i]);
        }else{
            esta = false;
            for(j=0;j<x.length;j++){
                if (x[j]==var8[i]) {
                    esta = true;
                    break;
                }
            }
            if (!esta) {
                x.push(var8[i]);
            }
        }
    }
    for(i=0;i<var9.length;i++){
        esta = false;
        for(j=0;j<x.length;j++){
            if (x[j]==var9[i]) {
                esta = true;
                break;
            }
        }
        if (!esta) {
            x.push(var9[i]);
        }
        
    }
    x.sort();
    return x;
}

console.log(rokket5([1,5,2,4],[7,2,1,6]));
/*



do{
    var valor1 = prompt("incerta el primer numero", "");
    /*console.log(typeof(valor1));
    valor1= parseInt(valor1);// si no es numero devuelve NaN
    console.log(typeof(valor1));*
    var valor2 = prompt("incerta el segundo numero", "");
    var valor3 = prompt("incerta el tercer numero", "");

    console.log(rokket(valor1,valor2,valor3));

    var ok = confirm("¿Decea repetir?");
}while(ok){
    console.log("gracias");
}**/