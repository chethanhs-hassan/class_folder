class stack{
    constructor(capacity){
        this.array=[];
        this.capacity=capacity;
    }

    push(element){
        if(this.array.length<this.capacity){
            this.array.push(element);
        }
        else{
            console.log("Stack is full")
        }
    }

    pop(){
        if(this.array.length>0){
            this.array.pop();
        }
 
        else{
            return console.log("stack in empty")
        }
    }
    
    print(){
        console.log(this.array)
    }
}

let mystack = new stack(5);
mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.push(4);
mystack.push(5);
mystack.push(6);
mystack.pop()
mystack.print()

