import React from 'react';
import ReactDOM from 'react-dom';
import MyGift from './components/myGift';
import MyGift_touch_loader from './components/myGift_touch_loader';
import {Router, Route, Link, browserHistory} from 'react-router';
class ParentComponents extends React.Component{
      constructor(props){
          super(props);
          this.state = {

          }

      }
      render(){
          return (

                  <div>

                      <MyGift userid={123456} />
                      <MyGift_touch_loader currentIndex={1}/>

                  </div>


          )


      }

}
export default ParentComponents;
