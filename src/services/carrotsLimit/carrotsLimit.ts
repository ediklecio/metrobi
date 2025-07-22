
export function getMaxValue(carrotTypes: { kg: number; price: number }[], capacity: number): number {

    const L = capacity;
    const m = carrotTypes.length;

    const prices = carrotTypes.map(carrot => carrot.price);
    const weights = carrotTypes.map(carrot => carrot.kg);    
    const vector = Array.from({ length: carrotTypes.length + 1 }, () => new Array(capacity + 1).fill(0));
    
    const G = (i, X) => vector[i][X];

    for (let j = 0; j <= L; j++) {
        vector[0][j] = 0;
    }

    for (let i = 1; i <= m; i++) { // Y axis
        for (let j = 0; j <= L; j++) { // X axis 
            const carrot = carrotTypes[i - 1];

            if (carrot.kg <= j && carrot.price + G(i - 1, j - carrot.kg) > G(i - 1, j)) {
                vector[i][j] = carrot.price + G(i - 1, j - carrot.kg);
            } else {
                vector[i][j] = G(i - 1, j);
            }
        }
    }

    const lastRow = vector[vector.length - 1];
    const highestPrice = lastRow[lastRow.length - 1];
    console.log(`Max value is: ${highestPrice}`);
    

    return highestPrice;
}

