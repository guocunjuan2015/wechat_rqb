import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
var CertTemplate = React.createClass({
      getInitialState(){

        return {
          realNametf: false,
          bankCodetf: false

        }

      },
      /**
       * 判断是否实名认证
       * [isrealName description]
       * @return {[type]} [description]
       */
      isrealName(){
        let _this = this;
        $.ajax({
            url: "http://test.rqbao.com/rqb/cg/user/getRegisterInfo.do", // 是否实名、绑卡
            type: "post",
            dataType: "json",
            async : false,
            success:(response) => {
                var data_ = $.parseJSON(response.result);
                var info =data_.resultObject;
                if(data_.result == "1"){
                    if(info.realName == ''){
                        this.setState({
                          realNametf : false
                        })


                    } else {
                      this.setState({
                        realNametf : true
                      })

                    };
                    if(info.bankCardNo == '') {
                      this.setState({
                        bankCodetf : false
                      })
                    } else {
                      this.setState({
                        bankCodetf : true
                      })

                    }
              } else {

                    //  alert("111");

              }
            },
          error:(data) =>{
            realNametf = false;
            bankCodetf = false;
          }
        });
      },

      render(){

          return (

              <div>

              </div>


          )


      }

})

export default CertTemplate;
