const Animation = document.getElementById
('Animation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement
    ('div');
    colorBox.classList.add('colorBox');
    Animation.append(colorBox)
}