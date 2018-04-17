<template>
    <div id="city">
        <div class="box1">
            <h2>
                <i @click='backHome' class="icon iconfont icon-zuojiantou1"></i>
                选择城市</h2>
            <p @click='Address'>
                <span>您的上牌地址</span>
                <span>
                    <i class="icon iconfont icon-zuojiantou"></i>
                </span>
            </p>
        </div>
        <div class="box">
            <h5>您已选择城市</h5>
            <ul class="city-ui">
                <li @click='(e)=>{delCity(e,item.city)}' v-for="(item, index) in cityUI" :key='index' v-html='item.city'></li>
            </ul>
            <div class="list-all" v-for='(item, index) in listUI' :key='index' v-if="item.city.length">
                <h3 v-html='item.letter'></h3>
                <ul class="list-ui">
                    <li @click='(e)=>{giveCity(e,item1)}' v-for="(item1, ind) in item.city" :key="ind" v-html="item1" v-default></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import '@/static/font/iconfont.css'
import '@/css/detail.css'
import axios from 'axios'
export default {
    name: 'detail',
    data() {
        return {
            cityUI: [{ city: returnCitySN['cname'].split('市')[0] + '市' }],
            listUI: null
        }
    },
    beforeRouteEnter(el, from, next) {
        axios('/api/city')
            .then((data) => {
                next((vm) => {
                    vm.listUI = data.data
                })
            })
    },
    directives: {
        default: {
            bind(el) {
                if (el.innerHTML === returnCitySN['cname'].split('市')[0] + '市') {
                    el.className = 'active'
                }
            }
        }
    },
    methods: {
        Address() {
            this.$router.push('/city')
        },
        backHome() {
            this.$router.push('/home?city=' + this.cityUI[0].city)
        },
        giveCity(e, v) {
            if (e.target.className != 'active') {
                e.target.className = 'active'
                this.cityUI.forEach((val, ind) => {
                    if (val.city == v) {
                        this.cityUI.splice(ind, 1)
                    }
                })
                this.cityUI.push({ city: v, dom: e.target })
            } else {
                if (this.cityUI.length < 2) return false;
                e.target.className = ''
                this.foreach(v)
            }
        },
        delCity(e, v) {
            this.foreach(v)
        },
        foreach(v) {
            if (this.cityUI.length < 2) return false;
            this.cityUI.forEach((val, ind) => {
                if (val.city == v) {
                    this.cityUI.splice(ind, 1)
                    if (val.dom) {
                        val.dom.className = ''
                    }
                }
            })
        }
    }
}
</script>
