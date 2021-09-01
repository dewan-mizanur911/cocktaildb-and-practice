// 1
const student = {
    name: 'Sabbir',
    isActive: false,
    id: 111,
    friends: ['mizan', 'rahad'],
    bestFriend: {
        name: 'Zillur'
    },
    attendExam: function () {
        return `Exam of id no. ${this.id}`;
    }
}
// 2
const studentDetails = `The name of the student is ${student.name}. His second friend name is ${student.friends[1]}. And his best friend name is ${student.bestFriend.name}. Sir is calling him for a exam like ${student.attendExam()}`;

// 3.1
const number1 = () => 89;

// 3.2
const number2 = number => number / 7;

// 3.3
const number3 = (num1, num2) => (num1 + num2) / 2;

// 3.4
const number4 = (num1, num2) => {
    const newN1 = num1 + 7;
    const newN2 = num2 + 7;
    return (newN1 + newN2) / 2;
}

// 4
const numbers = [2, 4, 6, 8, 10, 12, 14, 16];
const newNumbers = numbers.map(num => (num / 7).toFixed(2));

// 5
/*
map-> map is used to return each element as separate as an array.
forEach -> almost l ike map, but when you don't need any return value use forEach instead of map
filter -> filter method is used to filter items with function and condition
exm: const newNumbers2 = numbers.filter(n => n > 7);
find -> find method is almost like same as filter method, but it returns only the first item
*/

// 6
const { name } = student;
const [first, balance] = numbers;
