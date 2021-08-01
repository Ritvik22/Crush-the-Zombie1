class Stone {

    constructor(x, y, width, height) {

        var options = {

            isStatic: false,

        };

        this.r = 80;

        this.body = Bodies.circle(x, y, this.r, options);

        World.add(world, this.body);

        this.width = width;
        this.height = height;

    }

    display() {

        var pos = this.body.position;
         push();

         rectMode(CENTER);
         fill("grey");
         ellipse(pos.x, pos.y, this.width, this.height);

         pop();

    }


}