import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
var Footer = React.createClass({

        render(){

              return (

                      <section className="myHome">
                        	<footer>
                        		<ul>
                        			<li><Link to={`/financeList`}><font className="financeIcon"></font><span className="homeSpan">理财</span></Link></li>
                        			<li><Link to={`/`}><font className="homeIcon"></font><span  className="certiSpan">首页</span></Link></li>
                        			<li><Link to={`/usercenter`}><font className="personalIcon"></font><span  className="personalSpan">我</span></Link></li>
                        		</ul>
                        	</footer>
                      </section>


              )

        }

})

export default Footer;
