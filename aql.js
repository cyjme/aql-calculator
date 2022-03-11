// AQL Tables Data
var lotSizeArray = [
    { levels: { 'I': 'A', 'II': 'A', 'III': 'B', 'S1': 'A', 'S2': 'A', 'S3': 'A', 'S4': 'A' }, min: 2, max: 8 },
    { levels: { 'I': 'A', 'II': 'B', 'III': 'C', 'S1': 'A', 'S2': 'A', 'S3': 'A', 'S4': 'A' }, min: 9, max: 15 },
    { levels: { 'I': 'B', 'II': 'C', 'III': 'D', 'S1': 'A', 'S2': 'A', 'S3': 'B', 'S4': 'B' }, min: 16, max: 25 },
    { levels: { 'I': 'C', 'II': 'D', 'III': 'E', 'S1': 'A', 'S2': 'B', 'S3': 'B', 'S4': 'C' }, min: 26, max: 50 },
    { levels: { 'I': 'C', 'II': 'E', 'III': 'F', 'S1': 'B', 'S2': 'B', 'S3': 'C', 'S4': 'C' }, min: 51, max: 90 },
    { levels: { 'I': 'D', 'II': 'F', 'III': 'G', 'S1': 'B', 'S2': 'B', 'S3': 'C', 'S4': 'D' }, min: 91, max: 150 },
    { levels: { 'I': 'E', 'II': 'G', 'III': 'H', 'S1': 'B', 'S2': 'C', 'S3': 'D', 'S4': 'E' }, min: 151, max: 280 },
    { levels: { 'I': 'F', 'II': 'H', 'III': 'J', 'S1': 'B', 'S2': 'C', 'S3': 'D', 'S4': 'E' }, min: 281, max: 500 },
    { levels: { 'I': 'G', 'II': 'J', 'III': 'K', 'S1': 'C', 'S2': 'C', 'S3': 'E', 'S4': 'F' }, min: 501, max: 1200 },
    { levels: { 'I': 'H', 'II': 'K', 'III': 'L', 'S1': 'C', 'S2': 'D', 'S3': 'E', 'S4': 'G' }, min: 1201, max: 3200 },
    { levels: { 'I': 'J', 'II': 'L', 'III': 'M', 'S1': 'C', 'S2': 'D', 'S3': 'F', 'S4': 'G' }, min: 3201, max: 10000 },
    { levels: { 'I': 'K', 'II': 'M', 'III': 'N', 'S1': 'C', 'S2': 'D', 'S3': 'F', 'S4': 'H' }, min: 10001, max: 35000 },
    { levels: { 'I': 'L', 'II': 'N', 'III': 'P', 'S1': 'D', 'S2': 'E', 'S3': 'G', 'S4': 'J' }, min: 35001, max: 150000 },
    { levels: { 'I': 'M', 'II': 'P', 'III': 'Q', 'S1': 'D', 'S2': 'E', 'S3': 'G', 'S4': 'J' }, min: 150001, max: 500000 },
    { levels: { 'I': 'N', 'II': 'Q', 'III': 'R', 'S1': 'D', 'S2': 'E', 'S3': 'H', 'S4': 'K' }, min: 500001, max: -1 }
],
    sampleSizes = {
        'A': 2, 'B': 3, 'C': 5, 'D': 8, 'E': 13, 'F': 20, 'G': 32, 'H': 50, 'J': 80,
        'K': 125, 'L': 200, 'M': 315, 'N': 500, 'P': 800, 'Q': 1250, 'R': 2000
    },
    AQLnumbers = [
        {
            sampleSize: 2,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 0, re: 1, ss: 32 }, '0.65': { ac: 0, re: 1, ss: 20 }, '1.0': { ac: 0, re: 1, ss: 13 },
                '1.5': { ac: 0, re: 1, ss: 8 }, '2.5': { ac: 0, re: 1, ss: 5 }, '4.0': { ac: 0, re: 1, ss: 3 }, '6.5': { ac: 0, re: 1 }
            }
        },
        {
            sampleSize: 3,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 0, re: 1, ss: 32 }, '0.65': { ac: 0, re: 1, ss: 20 }, '1.0': { ac: 0, re: 1, ss: 13 },
                '1.5': { ac: 0, re: 1, ss: 8 }, '2.5': { ac: 0, re: 1, ss: 5 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 0, re: 1, ss: 2 }
            }
        },
        {
            sampleSize: 5,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 0, re: 1, ss: 32 }, '0.65': { ac: 0, re: 1, ss: 20 }, '1.0': { ac: 0, re: 1, ss: 13 },
                '1.5': { ac: 0, re: 1, ss: 8 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1, ss: 3 }, '6.5': { ac: 1, re: 2, ss: 8 }
            }
        },
        {
            sampleSize: 8,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 0, re: 1, ss: 32 }, '0.65': { ac: 0, re: 1, ss: 20 }, '1.0': { ac: 0, re: 1, ss: 13 },
                '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1, ss: 5 }, '4.0': { ac: 1, re: 2, ss: 13 }, '6.5': { ac: 1, re: 2 }
            }
        },
        {
            sampleSize: 13,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 0, re: 1, ss: 32 }, '0.65': { ac: 0, re: 1, ss: 20 }, '1.0': { ac: 0, re: 1 },
                '1.5': { ac: 0, re: 1, ss: 8 }, '2.5': { ac: 1, re: 2, ss: 20 }, '4.0': { ac: 1, re: 2 }, '6.5': { ac: 2, re: 3 }
            }
        },
        {
            sampleSize: 20,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 0, re: 1, ss: 32 }, '0.65': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1, ss: 13 },
                '1.5': { ac: 1, re: 2, ss: 32 }, '2.5': { ac: 1, re: 2 }, '4.0': { ac: 2, re: 3 }, '6.5': { ac: 3, re: 4 }
            }
        },
        {
            sampleSize: 32,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 0, re: 1 }, '0.65': { ac: 0, re: 1, ss: 20 }, '1.0': { ac: 1, re: 2, ss: 50 },
                '1.5': { ac: 1, re: 2 }, '2.5': { ac: 2, re: 3 }, '4.0': { ac: 3, re: 4 }, '6.5': { ac: 5, re: 6 }
            }
        },
        {
            sampleSize: 50,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 0, re: 1 }, '0.40': { ac: 0, re: 1, ss: 32 }, '0.65': { ac: 1, re: 2, ss: 80 }, '1.0': { ac: 1, re: 2 },
                '1.5': { ac: 2, re: 3 }, '2.5': { ac: 3, re: 4 }, '4.0': { ac: 5, re: 6 }, '6.5': { ac: 7, re: 8 }
            }
        },
        {
            sampleSize: 80,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 0, re: 1 },
                '0.25': { ac: 0, re: 1, ss: 50 }, '0.40': { ac: 1, re: 2, ss: 125 }, '0.65': { ac: 1, re: 2 }, '1.0': { ac: 2, re: 3 },
                '1.5': { ac: 3, re: 4 }, '2.5': { ac: 5, re: 6 }, '4.0': { ac: 7, re: 8 }, '6.5': { ac: 10, re: 11 }
            }
        },
        {
            sampleSize: 125,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 0, re: 1 }, '0.15': { ac: 0, re: 1, ss: 80 },
                '0.25': { ac: 1, re: 2, ss: 200 }, '0.40': { ac: 1, re: 2 }, '0.65': { ac: 2, re: 3 }, '1.0': { ac: 3, re: 4 },
                '1.5': { ac: 5, re: 6 }, '2.5': { ac: 7, re: 8 }, '4.0': { ac: 10, re: 11 }, '6.5': { ac: 14, re: 15 }
            }
        },
        {
            sampleSize: 200,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1 }, '0.10': { ac: 0, re: 1, ss: 125 }, '0.15': { ac: 1, re: 2, ss: 125 },
                '0.25': { ac: 1, re: 2 }, '0.40': { ac: 2, re: 3 }, '0.65': { ac: 3, re: 4 }, '1.0': { ac: 5, re: 6 },
                '1.5': { ac: 7, re: 8 }, '2.5': { ac: 10, re: 11 }, '4.0': { ac: 14, re: 15 }, '6.5': { ac: 21, re: 22 }
            }
        },
        {
            sampleSize: 315,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 0, re: 1, ss: 200 }, '0.10': { ac: 1, re: 2, ss: 500 }, '0.15': { ac: 1, re: 2 },
                '0.25': { ac: 2, re: 3 }, '0.40': { ac: 3, re: 4 }, '0.65': { ac: 5, re: 6 }, '1.0': { ac: 7, re: 8 },
                '1.5': { ac: 10, re: 11 }, '2.5': { ac: 14, re: 15 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22, ss: 200 }
            }
        },
        {
            sampleSize: 500,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 1, re: 2, ss: 800 }, '0.10': { ac: 1, re: 2 }, '0.15': { ac: 2, re: 3 },
                '0.25': { ac: 3, re: 4 }, '0.40': { ac: 5, re: 6 }, '0.65': { ac: 7, re: 8 }, '1.0': { ac: 10, re: 11 },
                '1.5': { ac: 14, re: 15 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22, ss: 315 }, '4.0': { ac: 21, re: 22, ss: 315 }, '6.5': { ac: 21, re: 22, ss: 200 }
            }
        },
        {
            sampleSize: 800,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 1, re: 2 }, '0.10': { ac: 2, re: 3 }, '0.15': { ac: 3, re: 4 },
                '0.25': { ac: 5, re: 6 }, '0.40': { ac: 7, re: 8 }, '0.65': { ac: 10, re: 11 }, '1.0': { ac: 14, re: 15 },
                '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22, ss: 500 }, '4.0': { ac: 21, re: 22, ss: 315 }, '6.5': { ac: 21, re: 22, ss: 200 }
            }
        },
        {
            sampleSize: 1250,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 2, re: 3 }, '0.10': { ac: 3, re: 4 }, '0.15': { ac: 5, re: 6 },
                '0.25': { ac: 7, re: 8 }, '0.40': { ac: 10, re: 11 }, '0.65': { ac: 14 }, '1.0': { ac: 21, re: 22 },
                '1.5': { ac: 21, re: 22, ss: 800 }, '2.5': { ac: 21, re: 22, ss: 500 }, '4.0': { ac: 21, re: 22, ss: 315 }, '6.5': { ac: 21, re: 22, ss: 200 }
            }
        },
        {
            sampleSize: 2000,
            numbers: {
                '0': { ac: 0, re: 0 }, '0.065': { ac: 3, re: 4 }, '0.10': { ac: 5, re: 6 }, '0.15': { ac: 7, re: 8 },
                '0.25': { ac: 10, re: 11 }, '0.40': { ac: 14, re: 15 }, '0.65': { ac: 21, re: 22 }, '1.0': { ac: 21, re: 22, ss: 1250 },
                '1.5': { ac: 21, re: 22, ss: 800 }, '2.5': { ac: 21, re: 22, ss: 500 }, '4.0': { ac: 21, re: 22, ss: 315 }, '6.5': { ac: 21, re: 22, ss: 200 }
            }
        }
    ];






function computeAQL(qty, inspLvl, critAQL, majAQL, minAQL) {
    if (Number.isInteger(qty) && qty > 0) {
        var codeLetter = getSampleSizeCodeLetter(qty, inspLvl);
        var defaultSampleSize = getSampleSize(codeLetter);
        var criticalNumbers = getAQLNumbers(defaultSampleSize, critAQL);
        var majorNumbers = getAQLNumbers(defaultSampleSize, majAQL);
        var minorNumbers = getAQLNumbers(defaultSampleSize, minAQL);

        if (defaultSampleSize > qty) {
            defaultSampleSize = qty;
        }

        var criticalSampleSize = (typeof (criticalNumbers.ss) == 'undefined' ? defaultSampleSize : criticalNumbers.ss);
        if (criticalSampleSize > qty) {
            criticalSampleSize = qty;
        }

        var majorSampleSize = (typeof (majorNumbers.ss) == 'undefined' ? defaultSampleSize : majorNumbers.ss);
        if (majorSampleSize > qty) {
            majorSampleSize = qty;
        }

        var minorSampleSize = (typeof (minorNumbers.ss) == 'undefined' ? defaultSampleSize : minorNumbers.ss);
        if (minorSampleSize > qty) {
            minorSampleSize = qty;
        }

        return {
            isInputValid: true,
            criticalSampleSize: criticalSampleSize,
            criticalAcceptPoint: criticalNumbers.ac,
            criticalRejectPoint: criticalNumbers.re,
            majorSampleSize: majorSampleSize,
            majorAcceptPoint: majorNumbers.ac,
            majorRejectPoint: majorNumbers.re,
            minorSampleSize: minorSampleSize,
            minorAcceptPoint: minorNumbers.ac,
            minorRejectPoint: minorNumbers.re
        };

    } else {
        return { isInputValid: false };
    }
}

function getSampleSizeCodeLetter(qty, inspLvl) {
    var codeLetter;

    if (qty < 2) {
        codeLetter = 'A';
    } else if (qty > 500000) {
        codeLetter = lotSizeArray[14].levels[inspLvl];
    } else {
        for (var i = 0, len = lotSizeArray.length; i < len; i++) {
            if (lotSizeArray[i].min <= qty && lotSizeArray[i].max >= qty) {
                codeLetter = lotSizeArray[i].levels[inspLvl];
                break;
            }
        }
    }

    return codeLetter;
}

function getSampleSize(codeLetter) {
    return sampleSizes[codeLetter];
}

function getAQLNumbers(sampleSize, aql) {
    var numbers;

    for (var i = 0, len = AQLnumbers.length; i < len; i++) {
        if (sampleSize === AQLnumbers[i].sampleSize) {
            numbers = AQLnumbers[i].numbers[aql];
            break;
        }
    }
    return numbers;
}
