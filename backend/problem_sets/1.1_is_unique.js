// 1.1 Is Unique: implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures? 
// ASCII or Unicode? 256 characters? 
const is_unique_set = function(input_string) {
    
    if (input_string.length > 128) return false; // assuming ASCII 

    const seen = new Array(128).fill(false); // boolean set

    for (let i = 0; i < input_string.length; i++){
        const code_value = input_string.charCodeAt(i);
        if (seen[code_value]) return false;
        seen[code_value] = true 
    }
    return true; 
}

const is_unique_bitmask = function(input_string) {
    if (input_string.length > 26) return false;
    
    let checker = 0; 

    for (let i = 0; i < input_string.length; i++){
        const value = input_string.charCodeAt(i) - 'a'.charCodeAt(0);
        if ((checker & (1 << value)) > 0) return false;
        checker |= (1 << value);
    }
    return true 
}

const is_unique_nested_loops = function(input_string) {
    for (let i = 0; i < input_string.length; i++) {
        for (let j = i + 1; j < input_string.length; j++) {
            if (input_string[i] === input_string[j]) return false;
        }
    }
    return true;
};

const is_unique_sort = function(input_string){
    const chars = [...input_string].sort();

    for (let i = 0; i < input_string.length; i++){
        if (chars[i] === chars[i + 1]) return false;
    }

    return true;
}

module.exports = {
    is_unique_set, 
    is_unique_bitmask,
    is_unique_nested_loops,
    is_unique_sort
};