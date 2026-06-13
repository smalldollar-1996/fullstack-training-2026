const getAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

console.log(getAge(2006));