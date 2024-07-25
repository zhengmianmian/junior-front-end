var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var xPos, yPos,xDiv,yDiv;

function getCoor(event){
    xPos = event.pageX;
    yPos = event.pageY;
    xDiv = event.offsetX;
    yDiv = event.offsetY;
    var coor = "Page x : " + xPos + ", y: " + yPos+ "<br>div x is: "+xDiv+" div y is: " + yDiv;
    coor = coor + "<br> screen x : " + event.screenX + " y : "+event.screenY;
    d2.innerHTML = coor;
};
d1.onclick = getCoor;
d3.onclick = getCoor;

// setInterval(show,2000);


// var arr=Object.values(person);
// 显示对象中的数据：
// d4.innerHTML = arr;

function Person(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        return firstName + lastName;
    };
};

var person1 = new Person("Nike","Black", 18);
// console.log(Object.__proto__)
// console.log(Object.prototype)
// console.log(person1.__proto__);
// console.log(Person.prototype);
// console.log(person1.getFullName())

const myObj = {
    a: 'aaa',
    b: 'bbb'
}
console.log('get value through attribute name string',myObj['a']);