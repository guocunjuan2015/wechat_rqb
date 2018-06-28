import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';
import Footer from './footer'

class  ProductDetails extends React.Component{


      render(){

            return (
              <div className="mr10">
                  {this.props.params.id}
                    {this.props.params.projectType}
              </div>
            )

      }




}

export default ProductDetails;
