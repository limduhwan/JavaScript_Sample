String.prototype.byteLength = function() {
    var l= 0;

    for(var idx=0; idx < this.length; idx++) {
        var c = escape(this.charAt(idx));

        if( c.length==1 ) l ++;
        else if( c.indexOf("%u")!=-1 ) l += 2;
        else if( c.indexOf("%")!=-1 ) l += c.length/3;
    }

    return l;
};

console.log("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstu".byteLength());        // 3
console.log("동해물과백두산이마르고닳도록하느님이보우하사우리나라만세동해물과백두산이마르고닳도록하느님이보우하사우리나라만세동해물과백두산이마르고닳도록하느님이보우하사우리나라만세동해물과백두산이마르고닳도록하느님이보우하사우리나라만세동해물과백두산이마르고닳도록하".byteLength());      // 6

