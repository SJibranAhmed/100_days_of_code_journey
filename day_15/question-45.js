// Sheikh Jibran Ahmed   18 / april / 2024
// function for car details
function carsDetail(name, architect, ...options) {
    let features = {
        name,
        architect
    };
    options.forEach(([key, value]) => features[key] = value);
    return features;
}
// calling nad print function wtih parameters
console.log(carsDetail('sportage', 'KIA', ['color', 'silver'], ['model', 2021]));
console.log(carsDetail('corolla', 'Toyata', ['color', 'white'], ['model', 2018]));
export {};
