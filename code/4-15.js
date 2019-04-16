function age(fatherAge, childAge) {
    // if (2 * childAge > fatherAge) {
    //     return 2 * childAge - fatherAge;
    // }
    // if (2 * childAge < fatherAge) {
    //     return fatherAge - 2 * childAge;
    // }
    // return 0;

    return Math.abs(2 * childAge - fatherAge);
    // abs 返回 一个数值（绝对值）
}

console.log(age(36, 19));
console.log(age(39, 19));
console.log(age(38, 19));