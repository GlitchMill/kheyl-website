document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq .question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isOpen = this.classList.contains('open');
            
            // Close all answers and remove the open class
            document.querySelectorAll('.faq .answer').forEach(ans => {
                ans.classList.remove('show');
            });
            document.querySelectorAll('.faq .question').forEach(q => {
                q.classList.remove('open');
            });

            if (!isOpen) {
                // Open the clicked question and show the answer
                answer.classList.add('show');
                this.classList.add('open');
            }
        });
    });
});
