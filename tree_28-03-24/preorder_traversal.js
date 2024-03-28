class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}


class tree{
    constructor(){
        this.root=null;
    }
   
     insertion(value){
        let node=new Node(value);
        if(this.root==null){
            this.root=node;
            return;
        }

        let current = this.root;
        while(true){
            if(value<current.data){
                if(current.left==null){
                    current.left=node;
                    return;
                }
                  current=current.left;

            }

            else{
                if(current.right==null){
                    current.right=node;
                    return;
                }
                current=current.right;
            }

        }

     }

     preorder(root){
        console.log(root.data);
        root.left && this.preorder(root.left)
       root.right && this.preorder(root.right)
      }

}

let mytree=new tree();
mytree.insertion(20);
mytree.insertion(15);
mytree.insertion(25);
mytree.insertion(13);
mytree.insertion(30);
mytree.insertion(18);
if(mytree.root!==null){mytree.preorder(mytree.root);}

