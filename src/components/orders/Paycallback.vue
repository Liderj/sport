<template>
    <div class="pay_callback">
        <div class="pay_img">
            <img src="../../../static/img/icon/gouxuan@2x.png" alt="">
            <p>支付成功</p>
        </div>
        <div class="pay_info">
            <ul>
                <Li>
                    <label for="">场馆</label>{{details.train.venue.name}}</Li>
                <Li>
                    <label for="">培训名称</label>
                    <span>{{details.train.title}}</span>
                </Li>
                <Li>
                    <label for="">日期</label>{{details.train.start_date}}</Li>
            </ul>
            <div class="shaer_btn">
                <a>分享培训</a>
                <router-link :to="{path:'/orders/Detail/'+details.id}">查看订单详情</router-link>
            </div>
        </div>
        <div class="share_tips">
            您的付款在您培训完成后才会支付给发起者，在订单详情中查看发起人联系方式等更多信息！
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            details: {}
        }
    },
    mounted() {
        this.getdetails()
    },
    methods: {
        getdetails() {
            var self = this;
            axios.get('/api/orders/trains/' + self.$route.params.id + '/detail').then(function (response) {
                self.details = response.data;
                self.details.train.start_date = dateFormat.datef('YYYY-MM-dd', response.data.train.start_date * 1000)
            }).catch(function (err) {
                self.$vux.toast.text(err.response.data.message, 'top')
            });
        }
    }

}
</script>
<style>
.pay_callback {
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 10px;
}

.pay_img {
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.pay_img p {
    color: #73DA71;
    margin-top: 10px;
}

.pay_info {
    flex: 1;
}

.pay_info ul li {
    display: block;
    line-height: 22px;
    color: #2E2C2F;
}

.pay_info ul li label {
    display: inline-block;
    width: 80px;
    color: #878787;
}

.shaer_btn a {
    border: 1px solid #FEC958;
    display: inline-block;
    width: 45%;
    padding: 10px 0;
    text-align: center;
}

.shaer_btn {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.shaer_btn a {
    border: 1px solid #FEC958;
    display: inline-block;
    width: 45%;
    padding: 7px 0;
    text-align: center;
    border-radius: 20px;
}

.shaer_btn a:first-child {
    background-color: #FEC958;
    color: #fff;
}

.shaer_btn a:last-child {
    color: #FEC958;
}

.share_tips {
    height: 70px;
    padding: 0 10px;
}
</style>