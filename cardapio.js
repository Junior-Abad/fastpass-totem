// =========================================================================
// FASTPASS - BANCO DE DADOS E CONFIGURAÇÃO DO ESTABELECIMENTO
// =========================================================================

const CONFIG_LOJA = {
    nome: "FASTPASS BURGER V1",
    moeda: "R$",
    tempoPixExpiracao: 300, // Tempo em segundos (5 minutos)
    
    // --- CREDENCIAIS DE INTEGRAÇÃO DO MERCADO PAGO ---
    // NOTA: Para testes locais, inserimos o Token de Teste fornecido pelo Mercado Pago.
    // No dia da entrega na loja, basta colar o token real do lojista aqui.
    mercadoPagoToken: "TEST-7946251834901582-082412-c2b84a56d7812bc8f4a3e7219c0b12f4-12345678"
};

const PRODUTOS_BANCO = [
    { id: 1, nome: "Burgers", preco: 28.90, imagem: "imagens/hamburguer.png" },
    { id: 2, nome: "Chicken & Fish", preco: 24.00, imagem: "imagens/frango.png" },
    { id: 3, nome: "Fries & Sides", preco: 14.50, imagem: "imagens/batata.png" },
    { id: 4, nome: "Beverages", preco: 6.00, imagem: "imagens/bebida.png" }
];
