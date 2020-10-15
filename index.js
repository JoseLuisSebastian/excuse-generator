let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


let iWho;
let iAction;
let iWhat;
let iWhen;
let theExcuse;

function onLoad() {

        iWho = Math.floor(Math.random()*who.length);
        iAction = Math.floor(Math.random()*action.length);
        iWhat = Math.floor(Math.random()*what.length);
        iWhen = Math.floor(Math.random()*when.length);

        theExcuse =  who[iWho] + " " + action[iAction] + " " + what[iWhat] + " " + when[iWhen];
    
        return theExcuse

}

onLoad();
document.querySelector("#excuse").innerHTML= onLoad();