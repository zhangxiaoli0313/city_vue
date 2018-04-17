<template>
    <div class="shopCar">
        <h1>购物车</h1>
        <ul>
            <li v-for="site in list">
                <div class="single">
                    <input type="checkbox" v-model='site.isCheck' @click='singleCheckFn(site)'>
                </div>
                <div class="text">
                    <div class="left">
                        <span>{{site.name}}</span>
                        <span>￥{{site.price}}</span>
                    </div>
                    <div class="right">
                        <span @click='cut(site)'>-</span>
                        <span>{{site.count}}</span>
                        <span @click='add(site)'>+</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="fott">
            <div class="single">
                <input type="checkbox" class="all" v-model="flag" @click='allCheckFn'>
                <label for="">全选</label>
            </div>
            <div class="text">
                <div class="sum">
                    <span>总价: ￥<b>{{totalPrice.total}}</b></span>
                </div>
                <div class="count">
                    <span>数量: (<b>{{totalPrice.sum}}</b>)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../css/shopping.css'
    export default{
        name:'two',
        data() {
            return {
                "list": [
                    {
                        "name": "Cold roast",
                        "price": 40,
                        "isCheck": false,
                        "count": 1
                    },
                    {
                        "name": "battercake",
                        "price": 50,
                        "isCheck": false,
                        "count": 1
                    },
                    {
                        "name": "Lamb shashlik",
                        "price": 40,
                        "isCheck": false,
                        "count": 1
                    },
                    {
                        "name": "Fish Tofu",
                        "price": 44,
                        "isCheck": false,
                        "count": 1
                    },
                    {
                        "name": "Baked gluten",
                        "price": 55,
                        "isCheck": false,
                        "count": 1
                    }
                ],
                sum: 0,
                num: 0,
                sumCount: 0,
                flag: false
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                let sum = 0;
                this.list.forEach((val) => {
                    if (val.isCheck) {
                        total += val.price * val.count;
                        sum += val.count;
                    }
                });
                return { total: total, sum: sum };
            }
        },
        methods: {
            // 单选
            singleCheckFn(item) {
                // 对复选框本身的属性 isCheck 取反
                item.isCheck = !item.isCheck;
                if (item.isCheck) {
                    this.num++;
                } else {
                    this.num--;
                }
                // 用单选控制全选
                if (this.list.length == this.num) {
                    this.flag = true;
                } else {
                    this.flag = false;
                }
            },
            // 全选
            allCheckFn() {
                this.flag = !this.flag;
                this.list.forEach((val) => {
                    val.isCheck = this.flag;
                    if (val.isCheck) {
                        this.num = 5;
                    } else {
                        this.num = 0;
                    }
                })
            },
            // 减商品
            cut(item) {
                item.count--;
                if (item.count < 1) {
                    // item.count = 1;
                    let bol = confirm('您确定要讲此商品删除吗？')
                    if(bol){
                        
                    }
                }
            },
            // 加商品
            add(item) {
                item.count++
            }
        }
    }
</script>