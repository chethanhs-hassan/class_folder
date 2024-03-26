class Queue{
    constructor(capacity){
        this.array=[];
        this.capacity=capacity;
    }

    Enqueue(element){
        if(this.array.length<this.capacity){
            this.array.push(element);
        }
        else{
            return console.log("Queue is full")
        }
    }

    Dequeue(){
        if(this.array.length>0){
            this.array.shift();
        }
        else{
            return console.log("Queue is empty")
        }
    }

    print(){
        return console.log(this.array)
    }
}

let myqueue = new Queue(4);
myqueue.Enqueue(1);
myqueue.Enqueue(2);
myqueue.Enqueue(3);
myqueue.Enqueue(4);
myqueue.Enqueue(5);
myqueue.Dequeue();
myqueue.print();