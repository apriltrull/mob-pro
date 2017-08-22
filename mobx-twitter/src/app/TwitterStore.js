import {observable, computed, action} from 'mobx';
import {get, post} from 'axios';

export class TwitterStore{
  @observable tweet;

  constructor(){
    this.tweet = "No tweets";
    this.stream();
  }

  //entire ajax call here
@action stream(){
  setInterval(()=>{
  get('stream').then((res)=> {
    this.tweet = res.data;
  })
},
   500
);
}


@computed get getTweet(){
  return this.tweet;

}
}
