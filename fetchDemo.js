import { LightningElement } from 'lwc';

export default class FetchDemo extends LightningElement {
    imgurl ;
    endpoint='https://some-random-api.ml/endpoints/animal/dog'

   //async  getimagehandler(){

      //  const response=await fetch(this.endpoint,{method:'GET'});
       //  const resp= await response.json();
       // this.imgurl=resp.img;}


       get imghandler(){
        fetch(this.endpoint, {method:'GET'})
        .then(resp=>resp.json())
        .then(resp=>
            {
                this.imgurl=resp.image;

            }
            
           
        )
       }


}