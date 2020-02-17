class GameBoard {

    backgroundColor = "#0606a0";
    width = 800;
    height = 800;
    size = 40;
    canvasElement;
    gameObjects = [];
    cells = [];
    maxFPS = 20;
    gameSpeed = 100;
    drawingContext;

    constructor() {
        this.canvasElement = document.querySelector("canvas");
        this.drawingContext = this.canvasElement.getContext("2d");
        this.drawingContext.fillStyle = this.backgroundColor;
        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;

        // this.snake = new Snake(4, 20, this.width / this.size, this.width / this.size, this.drawingContext);
        // this.gameObjects.push(this.snake);


        // setInterval(this.draw, 1000 / this.maxFPS);

        this.generateCells();
        console.log(this.gameObjects);
    }


    generateCells = () => {
        let w = this.width / this.size;
        let h = this.height / this.size;
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                let newCell = new Cell(x, y, w, h, this.drawingContext);

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

    clearScreen = () => {
        this.drawingContext.fillStyle = this.backgroundColor;
        this.drawingContext.fillRect(0, 0, this.width, this.height);
    }
}