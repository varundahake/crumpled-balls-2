class Paper{
    
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=70;
		this.image = loadImage("Images/paper.png");
		this.image.scale=0.1;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			imageMode(CENTER)
			image(this.image, 0, 0, this.x, this.r/2, this.r/2);
			//strokeWeight(4);
			fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}









