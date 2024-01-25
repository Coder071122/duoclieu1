
new Vue({
    el: '#app',
    data: {
        questions: [],  
        currentQuestion: 1,
        userAnswers: Array(12).fill(''),
    },
    created() {
        this.questions = this.shuffleQuestions();
    },
    methods: {
        shuffleQuestions() {
            const allQuestions = Array.from({ length: 39 }, (_, index) => index + 1);
            const shuffledQuestions = this.shuffleArray(allQuestions);
            return shuffledQuestions.slice(0, 12);
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
        nextQuestion() {
            if (this.userAnswers[this.currentQuestion - 1] !== '') {
                this.currentQuestion++;
            } else {
                alert('Vui lòng nhập đáp án trước khi chuyển sang câu tiếp theo.');
            }

            if (this.currentQuestion > 12) {
            }
        },
    },
});
