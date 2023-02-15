function longestChar(str) {
    let num = 0
    let array = []
    let numArray = []
    for (let i = 0; i < str.length; i++) {



        if (!array.includes(str[i])) {
            array.push(str[i])

            if (i == str.length - 1) {
                numArray.push(array.length)
            }
            // num++
        } else {

            numArray.push(array.length)
            array = []
        }


    }

    numArray.sort((a,b) => b-a)

    return numArray[0]
}


console.log(longestChar("pwwkew"));
console.log((longestChar("bbbbbb")));
console.log((longestChar("abcabcbb")));
