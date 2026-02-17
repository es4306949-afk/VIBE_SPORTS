// CONFIGURAÇÃO DA LOJA
const WHATSAPP_NUMBER = "5599999999999"; // SUBSTITUA PELO SEU NÚMERO COM DDD

// LISTA DE PRODUTOS
const produtos = [
    {
        id: 1,
        nome: "Camiseta Dry-Fit Vibe Black",
        preco: "99,90",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500",
    },
    {
        id: 2,
        nome: "Conjunto Moletom Slim",
        preco: "189,90",
        img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
    },
    {
        id: 3,
        nome: "Shorts Treino Performance",
        preco: "79,90",
        img: "https://images.unsplash.com/photo-1591129026118-206775f0a05a?q=80&w=500",
    },
    {
        id: 4,
        nome: "Tênis Vibe Runner v1",
        preco: "349,90",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
    }
];

// FUNÇÃO PARA RENDERIZAR O CATÁLOGO
function renderProducts() {
    const catalog = document.getElementById('catalog');
    
    produtos.forEach(p => {
        // Criar a mensagem personalizada para o WhatsApp
        const mensagem = encodeURIComponent(`Olá Vibe Sports! Gostaria de saber sobre o produto: ${p.nome} (R$ ${p.preco})`);
        const linkWhats = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

        catalog.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.nome}" class="product-img">
                <div class="product-info">
                    <h3>${p.nome}</h3>
                    <p class="price">R$ ${p.preco}</p>
                    <a href="${linkWhats}" target="_blank" class="btn-whatsapp">
                        <i class="fa-brands fa-whatsapp"></i> EU QUERO ESSE
                    </a>
                </div>
            </div>
        `;
    });
}

// Iniciar a página
document.addEventListener('DOMContentLoaded', renderProducts);