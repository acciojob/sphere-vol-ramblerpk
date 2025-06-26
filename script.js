function volume_sphere(event) {
    event.preventDefault();

    let radius = parseFloat(document.getElementById('radius').value);

    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}
