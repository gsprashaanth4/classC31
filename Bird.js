class Bird extends BaseClass 
{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.dot = loadImage("sprites/smoke.png"); 
    this.track = [];
}

  display() 
  {
    super.display();
    
    if(this.body.velocity.x>5 && this.body.position.x>200)
    {
    var tr1 =  [this.body.position.x,this.body.position.y];
    this.track.push(tr1);
    }
      for(var i = 0; i<this.track.length; i++)
      {
        image(this.dot, this.track[i][0],this.track[i][1]);
      } 
   
  }
}
