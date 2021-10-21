const add = (...objects) => {
    const newObj = new Object();
    let arrayGeneralProperties = Object.keys(objects[0]);

    for (let index = 1; index < objects.length; index++) {
        const arrayCurrentProperties = Object.keys(objects[index - 1])
            .filter({}.hasOwnProperty.bind(objects[index]));

        arrayGeneralProperties = arrayGeneralProperties
            .filter(value => arrayCurrentProperties.includes(value));
    }

    arrayGeneralProperties.forEach(property => {
        let value = null;

        objects.forEach(obj => {
            value += obj[property];
        });
        newObj[property] = value;
    });

    return newObj;
};

/* //For quick test
const a = { c: 3, x: 2, y: 7 };
const b = { x: 2, y: 4, z: Symbol('foo') };
const c = { r: 0, b: true, z: null, x: 1 };
console.log(add(a, b, c));
 */
