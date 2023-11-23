/*
Points earned from run: 683

Specific results: heads,heads,heads,tails,heads,tails,heads,heads,tails,heads,tails,tails,tails,tails,heads,heads,tails,heads,tails,heads,tails,heads,heads,tails,tails,tails,tails,tails,tails,tails,tails,tails,heads,heads,heads,heads,heads,tails,tails,tails,heads,tails,tails,tails,heads,heads,tails,tails,tails,tails,heads,heads,heads,heads,heads,heads,tails,tails,tails,tails,heads,heads,heads,heads,tails,heads,tails,tails,heads,heads,tails,heads,heads,heads,tails,tails,heads,heads,tails,heads,tails,tails,tails,tails,heads,tails,heads,tails,tails,tails,tails,tails,tails,heads,heads,heads,tails,tails,tails,heads

Verification code: 8307654979, 4734954576
*/

/*
a = "170"
b = "7057"
c = "47349"
d = "54576"

*/

let p = 1e5 + 3

let inv = x => {
    if (x % p == 0) return 0;
    for (let i = 1; i < p; i++)
        if ((x * i) % p == 1) return i;
};

let e = (f, g) => document.getElementById(f).innerHTML += g;
// changes the HTML elements

let jsf32 = (a, b, c, d) => {
        return () => { // returns a function lol
            a |= 0;
            b |= 0;
            c |= 0;
            d |= 0;
            // this shouldn't change anything??
            let t = a - (b << 27 | b >>> 5) | 0;
            a = b ^ (c << 17 | c >>> 15);
            b = c + d | 0;
            c = d + t | 0;
            d = a + t | 0;
            return (d >>> 0) / 4294967296;
        };
    },
    rngsus = jsf32(1, 2, 3, 4); // if user is first-time player, the configuration is set to a specific function

