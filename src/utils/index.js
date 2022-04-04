/**
 * Formats a phone number.
 * @param {String} n a phone number
 * @returns {String} formatted phone number
 */
export function phoneNumFormat(n){
    switch(n.length){
        case(11): // Phone number with single digit country code.
            return `+${n.slice(0, 1)} (${n.slice(1, 4)}) ${n.slice(4, 7)}-${n.slice(7)}`;
        case(10): // Country code ommitted
            return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`
        default: // idk I guess it's fine at that point.
            return n;
    }

}