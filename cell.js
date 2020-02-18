class Cell {
    position = Vector2D.Zero;
    dimension = Dimension.Zero;
    drawingContext;
    color = "gray";
    absoluteX = 0;
    absoluteY = 0;

    constructor(x, y, w, h, ctx) {
        this.position.x = x;
        this.position.y = y;
        this.dimension.width = w;
        this.dimension.height = h;
        this.drawingContext = ctx;
        this.absoluteX = x * w;
        this.absoluteY = y * h;
    }

    draw() {
        this.drawingContext.lineWidth = 1;
        this.drawingContext.strokeStyle = this.color;
        this.drawingContext.strokeRect(
            this.absoluteX,
            this.absoluteY,
            this.dimension.width,
            this.dimension.height);

        if (this.cellSlotOccupied) {
            this.drawingContext.fillStyle = this.color;
            this.drawingContext.fillRect(
                this.absoluteX,
                this.absoluteY,
                this.dimension.width,
                this.dimension.height);
        }
    }

    update() {
        this.absoluteX = this.position.x * this.dimension.width;
        this.absoluteX = this.position.y * this.dimension.height;
    }

}