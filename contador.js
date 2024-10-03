// Inicializando contadores com valores do LocalStorage ou 0
let beerCount = localStorage.getItem('beerCount') ? parseInt(localStorage.getItem('beerCount')) : 0;
let skewerCount = localStorage.getItem('skewerCount') ? parseInt(localStorage.getItem('skewerCount')) : 0;

// Função para atualizar total
function updateTotal() {
    const beerPrice = parseFloat(document.getElementById('beer-price').value) || 0;
    const skewerPrice = parseFloat(document.getElementById('skewer-price').value) || 0;
    const total = (beerCount * beerPrice) + (skewerCount * skewerPrice);
    document.getElementById('total-bill').textContent = total.toFixed(2);
}

// Atualizar contadores na tela
function updateDisplay() {
    document.getElementById('beer-count').textContent = beerCount;
    document.getElementById('skewer-count').textContent = skewerCount;
}

// Ações de Cerveja
document.getElementById('beer-plus').addEventListener('click', () => {
    if (confirm('Deseja aumentar 1 cerveja na conta?')) {
        beerCount++;
        localStorage.setItem('beerCount', beerCount);  // Salvar no LocalStorage
        updateDisplay();
        updateTotal();
    }
});

document.getElementById('beer-minus').addEventListener('click', () => {
    if (beerCount > 0 && confirm('Deseja diminuir 1 cerveja na conta?')) {
        beerCount--;
        localStorage.setItem('beerCount', beerCount);  // Salvar no LocalStorage
        updateDisplay();
        updateTotal();
    }
});

// Ações de Espeto
document.getElementById('skewer-plus').addEventListener('click', () => {
    if (confirm('Deseja aumentar 1 espeto na conta?')) {
        skewerCount++;
        localStorage.setItem('skewerCount', skewerCount);  // Salvar no LocalStorage
        updateDisplay();
        updateTotal();
    }
});

document.getElementById('skewer-minus').addEventListener('click', () => {
    if (skewerCount > 0 && confirm('Deseja diminuir 1 espeto na conta?')) {
        skewerCount--;
        localStorage.setItem('skewerCount', skewerCount);  // Salvar no LocalStorage
        updateDisplay();
        updateTotal();
    }
});

// Atualizar total quando o preço é inserido
document.getElementById('beer-price').addEventListener('input', updateTotal);
document.getElementById('skewer-price').addEventListener('input', updateTotal);

// Inicializar display com valores salvos
updateDisplay();
updateTotal();
