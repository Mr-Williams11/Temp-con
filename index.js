document.addEventListener('DOMContentLoaded', function () {
    let toFahrenheitBtn = document.getElementById('toFahrenheitBtn');
    let toCelsiusBtn = document.getElementById('toCelsiusBtn');

    toFahrenheitBtn.addEventListener('click', function () {
        convert('celsius');
    });

    toCelsiusBtn.addEventListener('click', function () {
        convert('fahrenheit');
    });
});

function convert(unit) {
    if (unit === 'celsius') {
        let celsius = parseFloat(document.getElementById('celsius').value);
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (unit === 'fahrenheit') {
        let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
}
