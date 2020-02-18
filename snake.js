class Snake {

    drawingContext;
    color = "black";
    snake = [];
    keyDirection = "R";

    constructor(x, y, width, height, context) {
        this.drawingContext = context;

        this.snake.push(new SnakeCell(x, y, width, height, context));
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
        for (let x = 0; x < this.snake.length; x++) {
            this.snake[x].update();
        }
    }


    move = (d) => {
        if (this.keyDirection == "R" && d == "L")
            return

        if (this.keyDirection == "L" && d == "R")
            return

        if (this.keyDirection == "D" && d == "U")
            return

        if (this.keyDirection == "U" && d == "D")
            return

        this.keyDirection = d;
        console.log(this.keyDirection);
    }

    updatePosition = () => {

        let lastPosition = new Vector2D();
        lastPosition.x = this.head.position.x;
        lastPosition.y = this.head.position.y;

        switch (this.keyDirection) {
            case 'U':
                this.head.position.y--;
                break;
            case 'D':
                this.head.position.y++;
                break;
            case 'L':
                this.head.position.x--;
                break;
            case 'R':
                this.head.position.x++;
                break;
        }

        for (let x = 1; x < this.snake.length; x++) {
            let tempPosition = new Vector2D();
            tempPosition.x = this.snake[x].position.x;
            tempPosition.y = this.snake[x].position.y;
            this.snake[x].position.x = lastPosition.x;
            this.snake[x].position.y = lastPosition.y;
            lastPosition = tempPosition;
        }
    }

    // eat = () => {
    //     let x = this.tail.position.x;
    //     let y = this.tail.position.y;

    //     if (this.keyDirection == 'D')
    //         y++;
    //     if (this.keyDirection == 'U')
    //         y--;
    //     if (this.keyDirection == 'R')
    //         x++;
    //     if (this.keyDirection == 'L')
    //         x--;

    //     let newCell = new SnakeCell(x, y, this.tail.dimension.width, this.tail.dimension.height, this.drawingContext);
    //     newCell.color = "gray";
    //     this.snake.push(newCell);
    // }
}