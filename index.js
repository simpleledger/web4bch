var Web4Bch = require('./lib/web4bch');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
    window.Web4Bch = Web4Bch;
}

module.exports = Web4Bch;
