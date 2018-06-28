/**
 * Created by luckyGUO on 2018/3/21.
 */
/**
 * 公共js工具类
 * */

var utils={
    //版本
    version:function(){
        return "Version 1.0 create  by luckyGUO";
    },

    /**
     * 获取ajax json的信息
     * @param url
     * @param data
     * @param callback
     */
    getJsonback:(url,data,callback)=>{
    		$.ajax({
    			 url:url,
    			 type:'post',
    			 data: data,
    	         async: false,
    	         dataType:'json',
    	         success:(res)=>{
    	        	 callback.apply(this,res);
    	         }

    		})


    },

    //post-json请求
    getPostJsonCallBack:(url,data,callback)=>{
        $.ajax({
            url: url,
            data: data,
            method:"post",
            async: false,
            dataType:'json',
            success: function(data) {
                var  func=eval(callback);
                new func(data);
            },error:function() {
                alert("服务器忙，请稍后重试!");
            }
        });
    },



    /**
     * 去我的优惠
     */
    getMyGift:function(){
    	 if (isAndroidOrIos()) {
             IOSModel.investFinishToMyGift();
             appFunction('investFinishToMyGift');
           } else {
         	  window.location.href =basePath + "/sys/user/award/myGift.jsp#/voucher";
        }

    },
    /**
     * 去登陆
     */
    getToLogin:function(activeName) {
		 if (isAndroidOrIos()) {
			IOSModel.login();
			appFunction('login');
		} else {
			window.location.href = basePath + "/login.jsp?active="+activeName;
		}
    },

    /**
     * 去出借
     */
    toProject:function() {
		if (isAndroidOrIos()) {
			IOSModel.toIosInvest();
			toIosInvest();
			appFunction('invest');
		} else {
			window.location.href = basePath +"/project.jsp";
		}
	},

  	/**
  	 * 去个人中心
  	 */
	toUserCenter:function(){
			if (isAndroidOrIos()) {
				IOSModel.investFinishToUserCenter();
				//toIosInvest();
				appFunction('investFinishToUserCenter');
			} else {
				//toIosInvest();
				window.location.href = basePath + "/personal_center.jsp";
			}
		}


}
