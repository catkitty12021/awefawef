let die = false;
let p = 1e5 + 3;
// some constant equal to 100003
let lsw = (f, g) => localStorage[f] = g;
// stores a pair in cookies
let lsr = f => localStorage[f];
// gets the value of the stored pair in cookies
let e = (f, g) => document.getElementById(f).innerHTML += g;
// changes the HTML elements
let inv = x => {
    if (x % p == 0) return 0;
    for (let i = 1; i < p; i++)
        if ((x * i) % p == 1) return i;
};
// returns the modular inverse? idk, this might return nothing
let jsf32 = (a, b, c, d) => {
        return () => {
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
    rngsus = jsf32(1, 2, 3, 4);
let j = lsr("i"),
    k = lsr("lost"),
    l = lsr("the"),
    m = lsr("game");
if (j != undefined && k != undefined && l != undefined && m != undefined) {
    die = true;
    if ((inv(j) + inv(k) + inv(l)) % p != inv(m)) {
        console.log("smh stop trying you failur"); // checks if the numbers have been modified somehow
        localStorage.clear();
    } else if (inv(j) * 1e10 + inv(k) * 1e5 + inv(l) + 2.7e6 > Date.now()) alert("You have not reached your cooldown yet! Please come back later."); // checks if cooldown has not yet passed
    else {
        die = false; // won't return error
        rngsus = jsf32(j, k, l, m);
    }
}
if (die) throw new Error("die you opportunistic little cannoli!!!! -wist"); // stops the program
let t = Date.now() , // gets current date
    a = Math.floor(t / 1e10), // cuts off the last 10 digits of the date (currently, the date is 13 digits long)
    b = Math.floor((t % 1e10) / 1e5), // cuts off the first 3 digits and the last 5 digits
    c = t % 1e5, // cuts off the first 8 digits
    d = a + b + c; // adds them together
lsw("i", inv(a));
lsw("lost", inv(b));
lsw("the", inv(c));
lsw("game", inv(d));
// inverts the numbers for some reason
let arr = [],
    heads = 0,
    ac = 0;
// weird coin flip code
for (let i = 0; i < 100; i++) {
    if (rngsus() > 0.5) {
        arr.push("heads");
        heads++;
        ac++;
    } else arr.push("tails");
    ac *= 2;
    ac %= p;
}
e("results", Math.floor(1000 * 1.1 ** (heads - 50)));
e("specific", arr);
e("anticheat", (ac + p * Math.floor(rngsus() * (1e5 - 3))) + ", " + (0 + c * 1e5 + d));
