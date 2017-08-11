<template>
    <div style=" position:relative;height:100%">
        <div class="enroll_desc">
            <img :src="details.train.venue.image" alt="">
            <p class="enroll_desc_name">
                {{details.train.title}}
            </p>
            <div class="enroll_desc_price clearfix">
                <span>价格
                </span>
                <span class="number">￥
                    <label>{{details.train.price*0.01}}</label>
                </span>
            </div>
        </div>
        <div class="pay_type">
            <group>
                <radio v-model="channel" :options="pay_type"></radio>
            </group>
        </div>
        <div class="agreement">
            <img src="../../../static/img/icon/tongyi@2x.png" width="12" height="12"> 我已同意
            <a>荷尔蒙用户协议</a>
        </div>
        <div class="apply clearfix">
            <div class="tips">
                <img src="../../../static/img/icon/tishi@2x.png" width="15" height="15"> 请在{{time}}分钟内完成付款，否则订单会自动取消
            </div>
            <span class="apply_price">
                <span style="color:#000">合计</span>￥
                <i>{{details.train.price*0.01}}</i>元
            </span>
            <a @click="pay">确认支付</a>
        </div>
    </div>
</template>
<script>
import { Radio, Group } from 'vux'
export default {
    components: {
        Radio, Group
    },
    data() {
        return {
            time: 10,
            nowTime: 600000,
            channel: 'alipay_wap',
            pay_type: [
                {
                    icon: '../../../static/img/icon/zhifubao@2x.png',
                    value: '支付宝支付',
                    key: 'alipay_wap'
                },
                {
                    icon: '../../../static/img/icon/weixn@2x.png',
                    value: '微信支付',
                    key: 'wx_wap'
                }
            ],
            details: {
                train: {
                    created_at: 0,
                    price: 0,
                    venue: {
                        image: ''
                    }
                }

            }
        }
    },
    mounted() {
        this.getDetails()
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) != 'micromessenger') {
            this.pay_type = this.pay_type.splice(0, 1)
        }
    },
    methods: {
        timer() {
            var self = this
            this.nowTime = 10 * 60 * 1000 - (new Date().getTime() - self.details.created_at * 1000)
            if (this.nowTime > 0) {
                this.time = dateFormat.datef('mm:ss', self.nowTime)
            }
            else {
                self.$vux.alert.show({
                    title: '提示',
                    content: '订单已过期，请重新下单',
                    onHide() {
                        self.$router.go(-1)
                    }
                })
            }
        },
        getDetails() {
            var self = this;
            axios.get('/api/orders/trains/' + self.$route.params.id + '/detail').then(function (response) {
                self.details = response.data;
                self.timer()
            }).catch(function (err) {
                self.$vux.toast.text('网络错误', 'top')
            });
        },
        pay() {
            var self = this
            axios.post('/api/charge/trains',
                {
                    paymentable_id: self.details.id,
                    channel: self.channel,
                    success_url: 'http://www.heermengsport.com/page/orders/success/' + self.details.id
                }
            ).then(function (response) {
                pingpp.createPayment(response.data.charge, function (result, err) {
                    if (result == "fail") {
                        self.$vux.toast.text('支付失败，请从新支付', 'top')
                    }
                });
            }).catch(function (error) {
                self.$vux.toast.text(error.response.data.message, 'middle')
            })
        }
    },
    watch: {
        nowTime: function (val, oldVal) {
            var self = this
            if (val > 0) {
                var t = setTimeout(function () {
                    self.timer()
                }, 1000);
            }
            else {
                clearTimeout(t)
            }
        }
    }

}
</script>
<style>
.pay_type {
    background-color: #fff;
    margin-top: 10px;
}

.pay_type .vux-radio-label {
    font-size: 14px;
}

.pay_type .weui-cell__ft .weui-icon-checked {
    background: url('../../../static/img/icon/weixuan@2x.png') no-repeat;
    background-size: 14px 14px;
    width: 14px;
    height: 14px;
}

.weui-cells {
    width: 100%;
}

.weui-cells_radio .weui-check:checked+.weui-icon-checked:before {
    content: "" !important;
    background: url('../../../static/img/icon/gouxuan@2x.png') no-repeat;
    background-size: 14px 14px;
    width: 14px;
    height: 14px;
    margin-left: 0;
    margin-right: 0;
}

.agreement {
    margin-top: 16px;
    text-align: center;
    color: #EDA031;
}

.agreement a {
    text-decoration: underline;
    color: #EDA031;
}

.tips {
    position: absolute;
    width: 100%;
    top: -35px;
    padding: 5px 0;
    text-align: center;
    background-color: #FFF3DB;
}

.tips img {
    vertical-align: text-bottom;
}
</style>
