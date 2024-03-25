class Node{
    constructor(name,phone_number,next=null){
        this.name =name;
        this.phone_number=phone_number;
        this.next = next;
    }
}


class linkedlist{
    constructor(){
        this.head =null;
        this.size =0;
    }
//insert first 
insertfirst(name,phone_number)
{
    this.head =new Node(name,phone_number,this.head)
    this.size++

}

//insert end
insertend(name,phone_number){
   let contact = new Node(name,phone_number)
   let current;
   if(!this.head){
    this.head =node
   }
   else{
    current=this.head
    while(current.next){
        current =current.next;
    }
    current.next=contact;
   }

   this.size++;


}
//print all list
printlist(){
    let current =this.head;
    while(current){
        console.log(current.name)
        console.log(current.phone_number)
        current =current.next
    }
}

//insert at index
insertAt(name,phone_number,index){
if(index>0 && index>this.size){
    return;
}
if(index ===0){
    this.head=new Node(name,phone_number,this.head)
    return;
}
let node =new Node(name,phone_number)
let current,previous;
current =this.head
let count =0;
while(count!=index){
    previous=current;
    current=current.next;
    count++;
}
previous.next=node;
node.next=current;
this.size++ 


}

//get at index
getAt(index)
{
    let current=this.head
let count =0;
while(count!=index){
current=current.next;
count++;
}
console.log(current.name)
console.log(current.phone_number)
}
//remove at index
remove(index){
    let current,previous;
    let count=0;
    current =this.head
    while(count!=index){
        previous=current;
        current=current.next;
        count++;

    }
    previous.next=current.next;
    this.size--;


}
//clear list
clear(){
     this.head=null;
}


}

let ll = new linkedlist();
ll.insertfirst("chethan",8746904781)
ll.insertfirst("Akhil",8822442211)
ll.insertend("raki",88882222)
ll.insertAt("goku",2228883338,0)
ll.printlist();
ll.remove(2)
ll.printlist();


