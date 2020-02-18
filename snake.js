class Snake {

    drawingContext;
    color = "black";
    snake = [];
    keyDirection = "R";

    constructor(x, y, width, height, context) {
        this.drawingContext = context;

        this.snake[0] = new SnakeCell(x, y, width, height, context);
        this.snake[0].color = this.color;
    }


    get head() {
        return this.snake[0];
    }

    get tail() {
        return this.snake[this.snake.length - 1];
    }

    draw = () => {
        for (let x = 0; x < this.snake.length; x++) {
            this.snake[x].draw();
        }
    }

    update = () => {
        this.updatePosition();
        for (let x = 0; x < this.body.length; x++) {
            this.body[x].update();
        }
    }
}