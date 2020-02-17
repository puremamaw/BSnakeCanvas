class Dimension {
    width;
    height;

    static get Zero() {
        let d = new Dimension();
        d.width = 0;
        d.height = 0;
        return d;
    }
}