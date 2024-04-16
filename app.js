// forEach

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val*2);
    })
    return newArr;
    }

function onlyEvenValues(arr){
    let evens = [];
    arr.forEach(function(val){
        if (val %2 === 0){
            evens.push(val);
        }
    });
    return evens;
}

function showFirstAndLast (arr){
    let newArr = [];
    arr.forEach(function(word){
    let first = word[0];
    let last = word[word.length-1];
    let firstAndLast = `${first}${last}`;
    newArr.push(firstAndLast);
    })
    return newArr;
}

function addKeyAndValue(arr, key, value){
    arr.forEach(function(entry){
    entry[key] = value;
    })
    return arr;
}

function vowelCount(str){
    let arr = str.split("");
    let vowels = {};
    const reference = "aeiou";
    arr.forEach(function(letter){
        let lowerCased = letter.toLowerCase();
        if (reference.indexOf(lowerCased) !== -1){
            if (vowels[lowerCased]){
                vowels[lowerCased]++;
            }
            else {
                vowels[lowerCased] = 1;
            }
        }
    })
    return vowels;
}

// map 

function doubleValuesWithMap (arr){
   return arr.map(function(val){
       return val*2;
    })
}

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    })
}

function extractKey(arr, key){
    return arr.map(function (val){
        return val[key];
    })
}

function extractFullName(arr){
    return arr.map(function(val){
        return val.first + ' ' + val.last;
    })
}

// filter

function filterByValue (arr, condition){
    return arr.filter(function(val){
        return val[condition] !== undefined;
    })
}

function find (arr, value){
    return arr.filter(function(val){
       return val === value;
    }) [0];
}

function findInObj (arr, key, value){
    return arr.filter(function(val){
        return val[key] === value;
    }) [0];
}

function removeVowels(str){
    const vowels = 'aeiou';
    let lowerCaseArr = str.toLowerCase().split('');
    return lowerCaseArr.filter(function(letter){
        return vowels.indexOf(letter) === -1;
    }).join("");
}

function doubleOddNumbers(arr){
    return arr
    .filter(function(val){
        return val % 2 !== 0;
    })
    .map(function(val){
        return val*2;
    })
}