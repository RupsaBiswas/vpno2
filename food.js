class  Food{
    constructor(){
        this.foodStock=0;
        this.lastFed
        this.image=loadImage("Milk.png");

        
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
           }

    display(){

        var x= 50
        for (var i= 0; i<this.foodStock; i++){
            image(this.image,x,100,50,50);
            x=x+20
        }
       
       
    }

    getFoodStock(){
        return this.foodStock;
    }
    

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }


    deductFood(){
        this.foodStock=foodStock-1
    }
}



