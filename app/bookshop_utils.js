function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function makeHalfPrice(price) {
    return price * 0.5;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice
};