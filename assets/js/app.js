let sum = +prompt("Ваш годовой доход");

let arrSingle = [0, 9950, 40525, 86376, 164925, 209425, 523600, Infinity,];

let arrRate = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

const deductSingle = 12550;

let federalTaxe = 0;

let sumDeduct = sum - deductSingle;


if (sumDeduct <= 0) {
    federalTaxe = 0;
}
else {
    for (let i = 0; i < arrSingle.length; i++) {
        let singleLimit = arrSingle[i];
        let endTaxe = arrSingle[i + 1];
        let percent = arrRate[i];


    if (sumDeduct > endTaxe) {
            federalTaxe = federalTaxe + ((endTaxe - singleLimit) * percent);
    } else {
            federalTaxe =federalTaxe + ((sumDeduct - singleLimit) * percent);
        }
        console.log(federalTaxe);
    }
}

