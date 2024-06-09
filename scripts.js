// scripts.js

// Spustí se po načtení DOM
document.addEventListener('DOMContentLoaded', function() {
    // Výběr hlavičky
    let header = document.querySelector('header');
    
    // Pole s barvami
    let colors = ['#6a994e', '#a7c957', '#f2e8cf', '#bc4749'];
    
    // Počáteční index
    let i = 0;
    
    // Funkce pro změnu barvy
    function changeColor() {
        header.style.backgroundColor = colors[i]; // Nastavení nové barvy
        i = (i + 1) % colors.length; // Posun na další barvu, vrácení na začátek
    }
    
    // Interval pro změnu barvy každé 2 sekundy
    setInterval(changeColor, 2000);
});
