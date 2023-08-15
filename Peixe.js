class Peixe extends BaseClass{
    constructor(x, y){
        super(x, y, 30, 30);
        this.image = loadImage("Peixe.png");
        this.Visibility = 255;
    }

    display(){
        if(this.body.speed < 1.2 ){
            super.display();
        }else{
            push();
            this.Visiblity = this.Visbility - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }
}
  