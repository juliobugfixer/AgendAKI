    // Função para controlar o clique nas estrelas
    const stars = document.querySelectorAll('.rating-star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-value');
            document.getElementById('ratingValue').value = rating;
            updateStarRating(rating);
        });
    });

    // Função para atualizar a visualização das estrelas
    function updateStarRating(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= rating) {
                star.classList.add('checked');
            } else {
                star.classList.remove('checked');
            }
        });
    }

    // Lógica de envio do formulário
    document.getElementById('avaliacaoForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const rating = document.getElementById('ratingValue').value;
        const comentario = document.getElementById('comentario').value;

        if (rating > 0 && comentario) {
            // Simulando envio dos dados ao servidor (você pode integrar com seu back-end aqui)
            alert('Avaliação enviada! Nota: ' + rating + ', Comentário: ' + comentario);
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });