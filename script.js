// Sistema de Like/Deslike e Comentários
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        const likeCount = this.nextElementSibling;
        let currentCount = parseInt(likeCount.textContent, 10);
        currentCount++;
        likeCount.textContent = currentCount;
    });
});

document.querySelectorAll('.toggle-comments-btn').forEach(button => {
    button.addEventListener('click', function() {
        const commentsSection = this.parentElement.nextElementSibling;
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    });
});

document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio real do formulário

        const commentInput = this.querySelector('textarea');
        const commentOutput = this.nextElementSibling;
        
        // Exibe o comentário
        const newComment = document.createElement('p');
        newComment.textContent = commentInput.value;
        commentOutput.appendChild(newComment);
        
        // Limpa o campo de comentário
        commentInput.value = '';

        // Cria uma notificação de sucesso
        const notification = document.createElement('div');
        notification.textContent = "Comentário enviado com sucesso!";
        notification.className = 'notification';
        this.parentElement.appendChild(notification);

        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.remove();
        }, 3000);
    });
});
