// Calculadora de binários
function calculateBinary() {
    const firstBinary = $('#first-binary').val();
    const secondBinary = $('#second-binary').val();
    const operation = $('#operation').val();

    if (isValidBinary(firstBinary) && isValidBinary(secondBinary)) {
        let result;
        switch (operation) {
            case 'add':
                result = addBinary(firstBinary, secondBinary);
                break;
            case 'subtract':
                result = subtractBinary(firstBinary, secondBinary);
                break;
            case 'multiply':
                result = multiplyBinary(firstBinary, secondBinary);
                break;
            case 'divide':
                result = divideBinary(firstBinary, secondBinary);
                break;
        }
        $('#calculator-result').empty();
        $('#calculator-result').append(result);
    } else {
        Swal.fire({
            title: 'Erro',
            text: 'Por favor, insira valores binários válidos (apenas 0 e 1, até 8 dígitos).',
            icon: 'error'
        });
    }
}

function addBinary(bin1, bin2) {
    const sum = binaryToDecimal(bin1) + binaryToDecimal(bin2);
    return sum.toString(2).padStart(8, '0');
}

function subtractBinary(bin1, bin2) {
    const difference = binaryToDecimal(bin1) - binaryToDecimal(bin2);
    return difference.toString(2).padStart(8, '0');
}

function multiplyBinary(bin1, bin2) {
    const product = binaryToDecimal(bin1) * binaryToDecimal(bin2);
    return product.toString(2).padStart(8, '0');
}

function divideBinary(bin1, bin2) {
    const quotient = Math.floor(binaryToDecimal(bin1) / binaryToDecimal(bin2));
    return quotient.toString(2).padStart(8, '0');
}

// Conversor de decimal para binário
function convertDecimalToBinary() {
    const decimalInput = $('#decimal-input').val();
    if ($.isNumeric(decimalInput)) {
        const result = parseInt(decimalInput, 10).toString(2).padStart(8, '0');
        $('#binary-conversor-result').empty();
        $('#binary-conversor-result').append(result);
    } else {
        Swal.fire({
            title: 'Erro',
            text: 'Por favor, insira um número decimal válido.',
            icon: 'error'
        });
    }
}

// Conversor  de binário para complemento de 2
function convertBinaryToComplementTwo() {
    const binaryInput = $('#binary-input').val();

    if (isValidBinary(binaryInput)) {
        const num = binaryToDecimal(binaryInput);
        const complement = (~num & 0xFF) + 1;
        const result = complement.toString(2).padStart(8, '0');

        $('#complement-two-result').empty();
        $('#complement-two-result').append(result);
    } else {
        Swal.fire({
            title: 'Erro',
            text: 'Por favor, insira um valor binário válido (apenas 0 e 1, até 8 dígitos).',
            icon: 'error'
        });
    }
}

// Conversor de binário pra octal e hexadecimal
function convertBinaryToHexAndOctal() {
    const binaryInput = $('#binary-hex-input').val();

    if (isValidBinary(binaryInput)) {
        const num = binaryToDecimal(binaryInput);
        console.log(num);

        const hex = num.toString(16);
        const oct = num.toString(8);

        $('#hex-octal-result').empty();
        $('#hex-octal-result').append(`<p> Hexadecimal: ${hex}</p>`);
        $('#hex-octal-result').append(`<p> | Octal: ${oct} </p>`);
    } else {
        Swal.fire({
            title: 'Erro',
            text: 'Por favor, insira um valor binário válido (apenas 0 e 1, até 8 dígitos).',
            icon: 'error'
        });
    }
}

// Conversor de binário para decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

// Validador de binários
function isValidBinary(binary) {
    // Expressão regular para validar o binário
    return /^[01]{1,8}$/.test(binary);
}


