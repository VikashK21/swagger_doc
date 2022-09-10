/**
 * This is the function to test jsdoc
 * This is getting in users page
 * @param {string} a represents name
 * @param {string} b represents email
 * @param {number} c represents phone
 * @returns {Object} an obj with phone, email and phone
 */
function test (a, b, c) {
    return {
        name: a, email: b, phone: c
    }
}

let ans = test('vikash', "vikash@gmail.com", 234234234)
console.log(ans);

