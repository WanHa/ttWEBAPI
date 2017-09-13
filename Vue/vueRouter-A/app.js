var routes=[
    {
        path:'/',
        component:{
            template:`
            <div>
                <h1>首页</h1>
            </div>
            `,
        },
    },
    {
        path:'/about',
        component:{
            template:`
            <div>
                <h1>关于我们</h1>
            </div>
            `,
        },
    },
    {
        path:'/user/:name',
        component:{
            template:`
            <div>
                <h1>我叫:{{$route.params.name}}</h1>
                <!--<router-link to="more" append>更多信息</router-link>-->
                <router-link :to="$route.params.name + '/more'">更多信息</router-link>
                <router-view></router-view>
            </div>
            `,
        },
        children:[
            {
                path:'more',
                component:{
                    template:`
                        <div>
                            用户：{{$route.params.name}}的相信信息</br>
                            hello world!</br>
                            hello {{$route.params.name}}

                        </div>
                    `,
                }
            },
        ]
    }
]

var router=new VueRouter({
    routes:routes,
});

var app=new Vue({
    el:'#app',
    router:router,
})
