<template>
    <div>
        <div class="enroll_desc">
            <img src="http://pic31.photophoto.cn/20140403/0020032841623151_b.jpg" alt="">
            <p class="enroll_desc_name">
                收到回复可见的还是客户反馈说的疯狂大家数据库分类和卡号发的苦和客服会卡死
            </p>
            <div class="enroll_desc_price clearfix">
                <span>已报名
                    <i>0</i>/150</span>
                <span class="number">￥
                    <label>2356.99</label>
                </span>
            </div>
        </div>
        <div style="background-color:#fff;">
            <group>
                <x-input title="姓名" placeholder="请填写" :min="1" :show-clear="true" text-align="right" placeholder-align="right"></x-input>
                <x-input title="手机" placeholder="请填写" name="mobile" keyboard="number" is-type="china-mobile" :show-clear="true" text-align="right" placeholder-align="right"></x-input>
                <selector direction="rtl" value="男" title="性别" :options="['男','女']"></selector>
                <x-input title="年龄" placeholder="请填写" name="age" type="number" text-align="right" placeholder-align="right"></x-input>
                <x-input title="备注" placeholder="请填写" :show-clear="true" text-align="right" placeholder-align="right"></x-input>
    
            </group>
        </div>
    
        <group>
            <group-title slot="title">
                <i style="color:#FEC958;font-style:normal;">*</i>为必填项目
            </group-title>
            <div class="submit_btn">
                <x-button>提交</x-button>
            </div>
        </group>
    </div>
</template>
<script>
import {
    XInput,
    Group,
    XButton,
    Selector,
    GroupTitle,
    Cell
} from 'vux'
export default {
    components: {
        XInput,
        XButton,
        Group, GroupTitle,
        Selector,
        Cell
    }
}
</script>
<style>
.enroll_desc {
    background-color: #fff;
}

.enroll_desc img {
    width: 100%;
    height: 145px;
}

.enroll_desc_name {
    padding: 15px 10px;
    color: #424242;
    font-size: 14px;
}

.enroll_desc_price {
    color: #AEAEAE;
    padding: 0 10px
}

.enroll_desc_price span {
    float: left;
    vertical-align: middle;
    line-height: 27px;
}

.enroll_desc_price span i {
    color: #414141;
    font-style: normal;
    font-size: 13px;
}

.enroll_desc_price .number {
    float: right;
    color: #FA342C;
    vertical-align: text-bottom;
}

.enroll_desc_price .number label {
    font-size: 17px;
}

.weui-label {
    padding-left: 10px;
    font-size: 14px;
}

.weui-label::before {
    content: '*';
    color: #FEC958;
    margin-right: 5px;
    position: absolute;
    top: 14px;
    left: 10px;
}

.submit_btn {
    width: 70%;
    margin: 0 auto;
    background-color: transparent;
}

.submit_btn button {
    background-color: #FEC958;
    border-radius: 20px;
    color: #2E2C2F;
    border: none;
}

.submit_btn button::after {
    border: none;
}

.weui-cells {
    background-color: transparent !important;
}
</style>