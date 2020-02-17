class Vector2D {
    x;
    y;

    static get Zero() {
        let v = new Vector2D();
        v.x = 0;
        v.y = 0;
        return v;
    }
}