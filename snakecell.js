class SnakeCell extends Cell {
    constructor(x, y, w, h, ctx) {
        super(x, y, w, h, ctx);
        this.cellSlotOccupied = true;
    }
}