getRandomColor = () => {
    let letters = ['0','1','2','3','4','5','6','7','8','9',"A","B","C","D","E","F"] ;
    let color = '#';

    for (let value = 0; value <  6; value++) {
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

console.log(getRandomColor());