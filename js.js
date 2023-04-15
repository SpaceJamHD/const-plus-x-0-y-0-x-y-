const plus = (x = 0, y = 0) => x + y;
const plusRes = plus(1, 2);
console.log(plusRes);
// function plusFoo(x, y) {
//     return x + y;
// }

const withoutArgs = () => console.log('Hello world');
const singleArg = (x = 1) => x * 2;
const oreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
};

const returnObj = (str = '') => ({
    value: str,
    length: str.length,
});


function plusFoo(x, y) {
    console.log(arguments);
    returnx + y;
}

// plusFoo(1, 2 ,3, 'hello');

const obj = {
    firstName: 'Den',
    age: 30,
    getFirstName() {
        console.log(this);
    },
    getAgeArrow: null,
    getAge() {
        // this.getAgeArrow = () => console.log(this);
        setTimeout(() => console.log(this));
    },
};

obj.getAge();
obj.getAgeArrow();