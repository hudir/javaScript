class ToDos {
    //###### SET PROPERTIES ######
    //1- Set toDosStore prop array in the constructor method
    // toDosStore = ["Shopping", "Meet with PR department", "Pay bills"];
  constructor(store){
      this.toDoStore = store;
  }
    //###### READ ######
    /**
     2- Create `renderToDosListTemplate` method to read todos and render in the following format:
  
      ToDo List: 
      1- Shopping 
      2- Meet with PR department 
      3- Pay bills 
     */
    renderToDosListTemplate() {
        if (!this.toDoStore[0]) {
            return 'ToDos list is empty';
        } else return this.toDoStore.reduce((acc, el, i)=> acc + `${i+1}- ${el}. \n` , 'ToDo List: \n'); 
        
    }
  }
  
  class Actions extends ToDos {
      constructor(store) {
          super(store);
      }
    //##### CREATE ######
    //3- Create a method named `addOne` to add new item to toDosStore.
    addOneOrMany(...plansArr) {
        this.toDoStore.push(...plansArr);
    }
  
    //4- Create a method named `addMany` to add many new items to toDosStore.
    // addMany(...plansArr) {
    //     // plansArr.forEach(el=> this.toDoStore.push(el));

    //     // this.toDoStore = this.toDoStore.concat(plansArr);
    // }
  
    //##### DELETE ######
    //5- Create a method named `deleteOne` to remove any item by order number. Passing the item order number as argument.
    deleteOneOrMulti(...del) {
        // del.sort((a,b)=>b-a).forEach(i=>this.toDoStore.splice(i-1,1));

        // del.sort().map((currentOrder,i)=>{
        //     let currentIndex = currentOrder - 1 - i;
        //     this.toDoStore.splice(currentIndex,1)
        // });


        let updateArr = this.toDoStore.filter((item, index) => {
            return !del.includes(index+1);
        });
        this.toDoStore = updateArr;
    };
  
    //##### EDIT ######
    //6- Create a method named `editOne` to edit any item by order number. Passing the item order number as a first argument and the new value as a second argument.
    editOne(order, str) {
        this.toDoStore[order-1] = str;
    }

    // what will the input looks like? 
    editMany(...input){
        
        // input can only be array 
        if (Array.isArray(input[0]) && input.length===2) { // input is two arr of orders and strings 
            input[0].forEach((order, index)=> this.toDoStore[order-1] = input[1][index]);

        } else if (typeof input[0] === 'object')  {   // dealing with Object like {'1': 'shopping', '2': 'cook dinner'}
            for (let key in input[0]) {
                this.toDoStore[+key-1] = input[0][key];
            };

        } else if (!Array.isArray(input[0])) {  // input is seperate strings like 1,'a',2,'b'
            input.forEach((el,i)=>{
                if (i%2==0) this.toDoStore[el-1] = input[i+1];
            });   
        }  else return 'error, unknown data';     
    };

  }
  
  const actions = new Actions(["Shopping", "Meet with PR department", "Pay bills"]);


  actions.addOneOrMany('Sports')
  actions.addOneOrMany('Clean room')
  actions.addOneOrMany('a','b','c')
  actions.editOne(3, 'action!')
  actions.addOneOrMany('bbq')

  actions.deleteOneOrMulti(2,1)


  actions.editMany([4,5],['aa','bb'])
  actions.editMany(6,'cc',7,'bbqq',9,'3')
  actions.editMany({'1': 'shopping', '2': 'cook dinner'});
  console.log(actions.renderToDosListTemplate());

  