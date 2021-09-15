const casual = require('casual');
const NumberOfPeople = 2000;

casual.define('profile', function() {
    return {
        name: casual.name,
        city: casual.city,
        email: casual.email,
        phone: casual.phone
    };
});

// Generate object with random data
// const profile = casual.profile('public');

// Pass generator as callback
const times = function(times, generator) {
    const result = [];

    for (let i = 0; i < times; ++i) {
        result.push(generator());
    }

    return result;
};

// Will generate array of five random timestamps
const profiles = times(NumberOfPeople, casual._profile);

module.exports = profiles;
