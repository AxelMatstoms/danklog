//TEST CASES
danklog({"dank":"memes"})
danklog({
    "array": [1, "string", ["a", "r", "r"]],
    "obj": {
        "dank": "memes",
        "array": [1, 2, 3]
    }
})

function danklog(obj, depth, startstring, endstring) {
    if (!depth) depth = 0;
    if (!startstring) startstring = "";
    if (!endstring) endstring = "";
    if (obj instanceof Array) {
        console.log("  ".repeat(depth) + startstring +  "[");
        for (i = 0; i < obj.length; i++) {
            danklog(obj[i], depth + 1, "", ",")
        }
        console.log("  ".repeat(depth) + "]" + endstring);
    } else if (typeof obj == "object") {
        keys = Object.keys(obj);
        console.log("  ".repeat(depth) + startstring + "{");
        for (k = 0; k < keys.length; k++) {
            danklog(obj[keys[k]], depth + 1, keys[k] + ": ", "");
        }
        console.log("  ".repeat(depth) + "}" + endstring);
    } else if(typeof obj == "string") {
        console.log("  ".repeat(depth) + startstring + "\"" + obj + "\"" + endstring)
    } else {
        console.log("  ".repeat(depth) + startstring + obj + endstring);
    }
}

if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
        'use strict';
        if (this == null) {
            throw new TypeError('can\'t convert ' + this + ' to object');
        }
        var str = '' + this;
        count = +count;
        if (count != count) {
            count = 0;
        }
        if (count < 0) {
            throw new RangeError('repeat count must be non-negative');
        }
        if (count == Infinity) {
            throw new RangeError('repeat count must be less than infinity');
        }
        count = Math.floor(count);
        if (str.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += str;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            str += str;
        }
        // Could we try:
        // return Array(count + 1).join(this);
        return rpt;
    }
}
