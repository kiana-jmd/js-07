"use strict";
const usersList = [];
const creatUser = (user) => {
    usersList.push(user);
};
creatUser({
    id: "1-uhubjsnvl-01",
    fullName: "melika moradi",
    age: 21,
    job: "student",
    maritalStatus: "single",
    gender: "female",
    height: 165,
    weight: 65,
    number: 9210000252,
});
creatUser({
    id: "1-uhubjsnvl-02",
    fullName: "sara sedaghat",
    age: 23,
    job: "student",
    maritalStatus: "married",
    gender: "female",
    height: 160,
    weight: 60,
    number: 92100008454,
});
creatUser({
    id: "1-uhubjsnvl-02",
    fullName: "mohadese bagheri",
    age: 22,
    job: "student",
    maritalStatus: "single",
    gender: "female",
    height: 155,
    weight: 50,
    number: 9275567128,
});
console.log(usersList);
const updateUser = (id, user) => {
    const userIndex = usersList.findIndex((item) => item.id === id);
    usersList[userIndex] = Object.assign(Object.assign({}, usersList[userIndex]), user);
};
updateUser("1-uhubjsnvl-01", { age: 40 });
console.log(usersList);
const deleteUser = (id) => {
    const userIndex = usersList.findIndex((item) => item.id === id);
    usersList.splice(userIndex, 1);
};
deleteUser("1-uhubjsnvl-02");
console.log(usersList);
function sortByName() {
    usersList.sort();
}
console.log(usersList);
