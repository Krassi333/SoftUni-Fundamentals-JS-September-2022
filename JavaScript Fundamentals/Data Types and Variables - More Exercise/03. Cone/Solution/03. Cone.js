function Cone(radius, height) {
    //V = (1/3)πr2h
    //A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))

    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
Cone(3.3,

    7.8)