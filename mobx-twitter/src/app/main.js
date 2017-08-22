import React from 'react';
import {observer} from'mobx-react';

const Main = observer(({twitterStore})=>{
  return (
    <div className= 'twitterBox'>{twitterStore.getTweet.text}</div>
  )
});

export default Main;
