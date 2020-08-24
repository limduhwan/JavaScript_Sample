const myURL1 = new URL('https://example.org/workspaces/');
const myURL2 = new URL('https://example.org/workspaces/members/234234');
const myURL3 = new URL('https://example.org/workspaces/members/1234/auth-check');
console.log(myURL1.pathname);
console.log(myURL2.pathname);
console.log(myURL3.pathname);
console.log(myURL3.origin);