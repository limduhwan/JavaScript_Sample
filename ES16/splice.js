var jbAry1 = [ 'One', 'Two', 'Three', 'Four', 'Five', 'Six' ];
var jbSplice1 = jbAry1.splice( 2, 3 );
console.log(jbSplice1);


var jbAry2 = [ 'One', 'Two', 'Three', 'Four', 'Five', 'Six' ];
var jbSplice2 = jbAry2.splice( 1, 2, 'Seven', 'Eight' );
console.log(jbSplice2);
console.log(jbAry2);

var jbAry3 = [ 'One', 'Two', 'Three', 'Four', 'Five', 'Six' ];
var jbSplice3 = jbAry3.splice( 1, 0, 'Seven' );
console.log(jbSplice3);
console.log(jbAry3);
