class GameBoard {

    backgroundColor = "#0606a0";
    canvasSize = 800;
    size = 40;
    canvasElement;
    gameObjects = [];
    cells = [];
    maxFPS = 20;
    gameSpeed = 100;
    drawingContext;
    cellSize = 0;
    food;
    snake;


    constructor() {
        this.canvasElement = document.querySelector("canvas");
        this.drawingContext = this.canvasElement.getContext("2d");
        this.drawingContext.fillStyle = this.backgroundColor;
        this.canvasElement.width = this.canvasSize;
        this.canvasElement.height = this.canvasSize;

        this.cellSize = this.canvasSize / this.size;

        this.attachEventHandlers();

        this.snake = new Snake(4, 20, this.cellSize, this.cellSize, this.drawingContext);
        this.gameObjects.push(this.snake);


        setInterval(this.draw, 1000 / this.maxFPS);


        this.generateCells();
        this.generateFood();
        console.log(this.gameObjects);
    }


    attachEventHandlers = () => {
        document.addEventListener("keydown", this.onArrowKeysPressed);
    }

    onArrowKeysPressed = (e) => {
        let key = e.KeyCode;
        if (key == 37 && this.snake.keyDirection != 'R')
            this.snake.keyDirection = 'L';
        if (key == 38 && this.snake.keyDirection != "D")
            this.snake.keyDirection = 'U';
        if (key == 39 && this.snake.keyDirection != "L")
            this.snake.keyDirection = 'R';
        if (key == 40 && this.snake.keyDirection != "U")
            this.snake.keyDirection = 'D';

    }

    generateCells = () => {
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                let newCell = new Cell(x, y, this.cellSize, this.cellSize, this.drawingContext);

                if (!this.cells[x])
                    this.cells[x] = [];

                this.cells[x][y] = newCell;
                this.gameObjects.push(newCell);
            }
        }
    }

    draw = () => {
        this.clearScreen();
        for (let x = 0; x < this.gameObjects.length; x++) this.gameObjects[x].draw();
    }

    update = () => {
        for (let x = 0; x < this.gameObjects.length; x++) this.gameObjects[x].update();
        this.snakeHasEatenTheFood();
    }

    clearScreen = () => {
        this.drawingContext.fillStyle = this.backgroundColor;
        this.drawingContext.fillRect(0, 0, this.canvasSize, this.canvasSize);
    }

    generateFood = () => {
        var x = this.randomNumberGenerator(0, this.size - 1);
        var y = this.randomNumberGenerator(0, this.size - 1);

        this.food = new Food(x, y, this.cellSize, this.cellSize, this.drawingContext);
        this.food.color = "#ff2800";

        this.gameObjects.push(this.food);

        this.food.position.x = x;
        this.food.position.y = y;

    }

    randomNumberGenerator = (min, max) => {
        return Math.floor(Math.random() * (max + 1)) + min;
    }

    snakeHasEatenTheFood = () => {
        if (this.snake[0].position.x = this.food.position.x && this.snake[0].position.y == this.food.position.y) {
            alert("kaon na");
            this.generateFood();
        }
    }
}