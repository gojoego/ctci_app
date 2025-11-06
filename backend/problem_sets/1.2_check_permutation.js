const check_permutation_sort = function(s, t) {
    if (s.length != t.length) return false;

    const sorted_s = s.split('').sort().join('');
    const sorted_t = t.split('').sort().join('');

    return sorted_s === sorted_t;
}

const check_permutation_counts = function(s, t) {
    if (s.length != t.length) return false;

    const counts = new Array(128).fill(0);

    for (let i = 0; i < s.length; i++){
        counts[s.charCodeAt(i)]++;
    }

    for (let i = 0; i < t.length; i++){
        counts[t.charCodeAt(i)]--;
        if (counts[t.charCodeAt(i)] < 0) return false;
    }

    return true;
}

module.exports = {
    check_permutation_counts,
    check_permutation_sort
};