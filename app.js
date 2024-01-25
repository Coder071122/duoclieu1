new Vue({
    el: '#app',
    data: {
        currentQuestion: 1,
        userAnswers: Array(12).fill(''),
    },
    methods: {
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
