"use strict";
const button = document.querySelector('button');
button.addEventListener("click", () => {
    console.log('Clicked');
});
/// ...
const address = ['ThanhHoa'];
const addressNew = ['HaNoi', 'HoChiMinh'];
address.push(...addressNew);
const addNumber = (...numbers) => {
    return numbers.reduce((curResult, number) => {
        return curResult + number;
    }, 0);
};
console.log('[+] Add number', addNumber(1, 2, 3));
//# sourceMappingURL=app.js.map