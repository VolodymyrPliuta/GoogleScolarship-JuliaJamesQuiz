var x = 1;

while (x <= 20) {
   var y = (x % 3) === 0 && (x % 5) === 0 ? "JuliaJames":(x % 3) === 0?"Julia": (x % 5) === 0?"James":x;
            console.log(y);
   x++;
}
