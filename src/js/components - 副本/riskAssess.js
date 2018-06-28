import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
var SriskAssess = React.createClass({
      render(){
            return (

              <div className="mr10">
                  <h4 className="h_title ">风险控制</h4>
                  <section className="new_hand_details  clearfix">
                        <p>1、持有合法的户口簿（不限本市）、身份证或营业执照，法人代表证明或合法居留证、护照，在本市购买银行指定发展商的商品房；</p>
                        <p>２、在银行开立存款专户，存款余额不少于拟购住房款的３０％；</p>
                        <p>３、具有有效的购房合同，协议和其他证明文件；</p>
                        <p>４、同意以购房合同项下的房屋物业作抵押；</p>
                        <p>５、愿意履行贷款合同的全部条款；</p>
                        <p>６、银行规定的其他条件。</p>
                  </section>
              </div>
            )


      }

})

export default SriskAssess;
