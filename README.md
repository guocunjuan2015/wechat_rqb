1、 webpack-dev-server --inline --hot --port 4000 热更新
2、 安装scss的步骤
》1、
{

   test: /\.scss$/,
   loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
 }

 》2、导入页面 import ""

 》3、安装node-sass
3、两个组件之间使用彼此的方法、属性和样式问题
>1、第一步在withdraw.js组件中导入 Dirlog【import Dirlog from './dirlog';】
>2、第二步在withdraw.js组件中加入<Dirlog ref="dirlog" />即可使用里面的模板
如果想用dirlog.js中的方法和属性需要例如:
componentDidMount(){

          this.refs.certTemplate.isrealName();

},
然后<CertTemplate ref="certTemplate" />
4、追加图片问题
  let _this = this;
        let list = this.state.themedata.map((item,i) => (
            <li key={i}>
                <div className={style.img}><img src={require("./images/"+item.src+".jpg")} /></div>
                <List>
                    <Item extra={ <Button className={style.used} type={item.isUsing?"primary":"ghost"} size="small" inline onClick={ _this.clickButton.bind(this, i, item.isUsing) }>{item.isUsing ? "使用中" : "使用"}</Button> }>{item.name}</Item>
                </List>
            </li>
        ));
		
5、map报错问题
解决方法[

这个页面加载出来后，是还没有发送请求的。但是页面加载出来React就开始渲染了。所以this.state.invest_data里是空数据就直接进行渲染了，就会出现undefined这样的
getinitila{
或者你初始化state的时候给一个正确的数据结构，但是里面可以没有数据，让视图是空的，然后等数据回来后再填充数据
}
]
6、打断点问题 [已解决]
7、React中es6的箭头函数问题
1)https://segmentfault.com/q/1010000007729839
8、上拉刷新加载数据	
1)npm install react-touch-loader mySubject上拉加载刷新.js
2)
9、router多个参数传递productDetails.js  
1)<input type="text" ref="u"  value={this.state.u} /> 
this.refs.u.value
data : {
        u:this.refs.u.value,
        p:this.refs.p.value
} 
10、react登录跳转问题整理[browserHistory.push('/userCenter');]
11、bind(this)绑定问题
1>如果使用ES6的Class extends写法 如果onClick绑定一个方法 需要bind(this), 
而使用React.createClass方法 就不需要. 
2>React.createClass 是es5的写法默认是绑定了bind方法，而es6中 新增加了class，绑定的方法需要绑定this，如果是箭头函数就不需要绑定this，用箭头的方式

12、ES6 with React, can't setState - 'Cannot read property 'setState' of undefined'?
答：在ES6的class中React是不会自动绑定this的，所以需要自己绑定
