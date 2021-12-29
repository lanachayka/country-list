const length = 6;
let delta = Math.PI * 2 / length;
const position = [];
let angle = 0;

for (let i=0; i<=5; i++){
    const x = 280 * Math.cos(angle);
    const y = 210 * Math.sin(angle);
    position.push({left:x, top:y});
    angle += delta;
}

export default position;