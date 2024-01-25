new Vue({
    el: '#app',
    data: {
        questions: [],  // Danh sách câu hỏi
        currentQuestion: 1,
        userAnswers: Array(12).fill(''),
    },
    created() {
        // Tạo danh sách câu hỏi ngẫu nhiên khi component được tạo
        this.questions = this.shuffleQuestions();
    },
    methods: {
        shuffleQuestions() {
            // Lấy ngẫu nhiên 12 câu hỏi từ danh sách có sẵn
            const allQuestions = Array.from({ length: 39 }, (_, index) => index + 1);
            const shuffledQuestions = this.shuffleArray(allQuestions);
            return shuffledQuestions.slice(0, 12);
        },
        shuffleArray(array) {
            // Hàm trộn mảng
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
                // Hiển thị kết quả
                // Bạn có thể thực hiện xử lý khác ở đây tùy thuộc vào yêu cầu cụ thể
            }
        },
    },
});
