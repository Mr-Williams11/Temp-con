document.addEventListener('DOMContentLoaded', function () {
    var toFahrenheitBtn = document.getElementById('toFahrenheitBtn');
    var toCelsiusBtn = document.getElementById('toCelsiusBtn');

    toFahrenheitBtn.addEventListener('click', function () {
        convert('celsius');
    });

    toCelsiusBtn.addEventListener('click', function () {
        convert('fahrenheit');
    });
});

function convert(unit) {
    if (unit === 'celsius') {
        var celsius = parseFloat(document.getElementById('celsius').value);
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (unit === 'fahrenheit') {
        var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
}
