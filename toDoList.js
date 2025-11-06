import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {
@track task='';
@track tasks=[];

handletaskchange(event){
    this.task=event.target.value;

}
addtask(){
    if(this.task){
//add task to array
        this.tasks.push({
            id:new Date().getTime().toString(),
            name:this.task
        } );
        //clear tge input field
        this.task='';

    }
}


}