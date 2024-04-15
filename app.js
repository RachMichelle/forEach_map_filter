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