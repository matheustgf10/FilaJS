class DynamicQueue{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    enqueue(element) {
        let node = new Node(element);
        let current = null;
        let tete =0;
       
            if(this.head === null){
                this.head = node;
                this.tail = node;
                current = node;
            }else{
                current = this.tail;
                current.next = node;
                node.previous = current;
                this.tail = node;
            }      
        this.front();
        this.length++;
    }
    dequeue(){
        let current = this.head;
        this.head = current.next;
        return current.element;

    }
    front() {return this.head.element;}
    back(){return this.tail.element;}
    isEmpty() {
        return this.length === null;
    }
    size() {
        return this.length;
    }

    clear() {
        let current = null;
        return this.head = current;
    }

    print(separator=" - ") {
        if(this.isEmpty()) return "";
        
         let string = '',
         current = this.head;
         if(current!=null){
            string+=current.element;
            while(current.next){
                current=current.next;
                string+= separator+current.element;
            }
        }
        return string;

    }
}