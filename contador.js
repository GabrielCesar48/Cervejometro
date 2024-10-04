// Inicializando os contadores
let beerCount = 0;
let skewerCount = 0;
let totalBill = 0;

// Elementos do DOM
const beerPlusButton = document.getElementById('beer-plus');
const beerMinusButton = document.getElementById('beer-minus');
const skewerPlusButton = document.getElementById('skewer-plus');
const skewerMinusButton = document.getElementById('skewer-minus');
const beerCountDisplay = document.getElementById('beer-count');
const skewerCountDisplay = document.getElementById('skewer-count');
const totalBillDisplay = document.getElementById('total-bill');
const beerPriceInput = document.getElementById('beer-price');
const skewerPriceInput = document.getElementById('skewer-price');
const beerError = document.getElementById('beer-error');
const skewerError = document.createElement('div'); 


// Criação do elemento de erro para espeto
skewerError.classList.add('text-danger'); // Adiciona a classe de texto vermelho
skewerError.style.display = 'none'; // Oculta inicialmente
skewerError.innerText = 'Falta inserir um valor para o espeto.'; // Mensagem de erro para espeto
document.querySelector('.total').appendChild(skewerError); // Adiciona o elemento de erro ao DOM

// Função para atualizar o total da conta
function updateTotal() {
    totalBillDisplay.innerText = totalBill.toFixed(2);
    localStorage.setItem('totalBill', totalBill);
    localStorage.setItem('beerCount', beerCount);
    localStorage.setItem('skewerCount', skewerCount);
}

// Event Listeners para os botões da cerveja
beerPlusButton.addEventListener('click', () => {
    const beerPrice = parseFloat(beerPriceInput.value) || 0;
    
    if (beerPriceInput.value === '') {
        beerError.style.display = 'block'; // Exibe a mensagem de erro
        return; // Não adiciona cerveja
    }
    
    beerError.style.display = 'none'; // Oculta a mensagem de erro
    if (confirm('Tem certeza que deseja tomar mais uma cerveja?')) {
        beerCount++;
        totalBill += beerPrice; // Soma o valor ao total
        beerCountDisplay.innerText = beerCount;
        updateTotal();
    }
});

beerMinusButton.addEventListener('click', () => {
    if (beerCount > 0) {
        if (confirm('Tem certeza que deseja diminuir uma cerveja da conta?')) {
            const beerPrice = parseFloat(beerPriceInput.value) || 0;

            if (beerPriceInput.value === '') {
                beerError.style.display = 'block'; // Exibe a mensagem de erro
                return; // Não diminui a cerveja
            }
            beerCount--;
            totalBill -= beerPrice; // Subtrai o valor do total
            beerCountDisplay.innerText = beerCount;
            updateTotal();
        }
    }
});

// Event Listeners para os botões do espeto
skewerPlusButton.addEventListener('click', () => {
    const skewerPrice = parseFloat(skewerPriceInput.value) || 0;
    
    if (skewerPriceInput.value === '') {
        skewerError.style.display = 'block'; // Exibe a mensagem de erro
        return; // Não adiciona espeto
    }
    
    skewerError.style.display = 'none'; // Oculta a mensagem de erro
    if (confirm('Tem certeza que deseja comer mais um espeto?')) {
        skewerCount++;
        totalBill += skewerPrice; // Soma o valor ao total
        skewerCountDisplay.innerText = skewerCount;
        updateTotal();
    }
});

skewerMinusButton.addEventListener('click', () => {
    if (skewerCount > 0) {
        if (confirm('Tem certeza que deseja diminuir um espeto da conta?')) {
            const skewerPrice = parseFloat(skewerPriceInput.value) || 0;

            if (skewerPriceInput.value === '') {
                skewerError.style.display = 'block'; // Exibe a mensagem de erro
                return; // Não diminui o espeto
            }
            skewerCount--;
            totalBill -= skewerPrice; // Subtrai o valor do total
            skewerCountDisplay.innerText = skewerCount;
            updateTotal();
        }
    }
});

// Recuperar os dados do localStorage ao carregar a página
window.onload = function() {
    const savedTotal = localStorage.getItem('totalBill');
    const savedBeerCount = localStorage.getItem('beerCount');
    const savedSkewerCount = localStorage.getItem('skewerCount');
    
    if (savedTotal) {
        totalBill = parseFloat(savedTotal);
    }
    if (savedBeerCount) {
        beerCount = parseInt(savedBeerCount);
        beerCountDisplay.innerText = beerCount;
    }
    if (savedSkewerCount) {
        skewerCount = parseInt(savedSkewerCount);
        skewerCountDisplay.innerText = skewerCount;
    }

    updateTotal(); // Atualiza o total ao carregar a página
};

// Evento para o botão Nova Comanda
const newOrderButton = document.getElementById('new-order');

newOrderButton.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja criar uma nova comanda? Isso irá zerar todos os valores.')) {
        // Zera os contadores e o total
        beerCount = 0;
        skewerCount = 0;
        totalBill = 0;

        // Atualiza a interface do usuário
        beerCountDisplay.innerText = beerCount;
        skewerCountDisplay.innerText = skewerCount;
        updateTotal();

        // Limpa o localStorage
        localStorage.removeItem('totalBill');
        localStorage.removeItem('beerCount');
        localStorage.removeItem('skewerCount');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('cervejometro');
    
    // Criar várias bolhas distribuídas ao longo do texto
    for (let i = 1; i <= 9; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble', `bubble-${i}`);
      container.appendChild(bubble);
    }
  });