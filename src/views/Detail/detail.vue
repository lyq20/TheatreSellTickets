<template>
  <div>
    <div class="tick-xin-top">
      <h1>
        国家大剧院歌剧节·2019/献礼新中国成立70周年：国家大剧院原创中国史诗歌剧《长征》
        <span>【开票】</span>
      </h1>
      <div class="fl xin-top-left">
        <p>
          <img :src="imgUrl" width="288" height="384" alt data-bd-imgshare-binded="1">
        </p>
      </div>
      <div class="fl xin-top-right">
        <ul class="xin-top-t">
          <li>
            <p class="xin-top-right-tit">演出时间：</p>
            <p>
              <input type="hidden" id="endDate" value="2019-08-04">
              2019.07.30 - 2019.08.04
            </p>
          </li>
          <li>
            <p class="xin-top-right-tit">演出剧场：</p>
            <p>
              <a href="#" style="cursor:default">{{ name }}</a>
            </p>
            <p></p>
          </li>
          <input type="hidden" id="psxx" value>
          <li>
            <p class="xin-top-right-tit">演出时长：</p>
            <p>{{ time }}</p>
          </li>
        </ul>
        <div class="xin-top-cent">
          <div class="tit">特惠信息</div>
          <dd>
            <span style="font-size:12px;color:#ff0000;">跨场套票：1200/1600元可兑换350-380/500-600元演出票4张</span>
            <br>
            <span style="font-size:12px;color:#ff0000;">套票优惠：本场演出680、600、550三档票价尽享2张85折，3张及以上8折。</span>
            <br>
            <span
              style="font-size:12px;color:#ff0000;"
            >银联补贴：即日起白金、钻石信用卡（62开头），周六、日享8折优惠，最高优惠100元！每月限1000名</span>
            <br>
            <span
              style="font-size:12px;color:#ff0000;"
            >工行补贴：即日起理财金账户、财富理财金（62开头），周日、一享8折优惠，最高优惠100元！每月限1000名</span>
            <br>
            <span style="font-size:12px;color:#ff0000;">
              会员优惠：注册购票即享98折，等级会员最低可享9折,购票享更多优惠。
              <br>1.2米以下儿童谢绝入场。
            </span>
            <br>
            <span style="font-size:12px;color:#ff0000;">学生优惠：学生持证件于前台购票享优惠，详情66550000。</span>
          </dd>
        </div>
        <div class="productnew-header-price">
          <div class="productnew-header-pricea clearfloat">
            <div class="productnew-header-pricea1">日期场次：</div>
            <div class="productnew-header-pricea2">
              <div class="fl">
                <el-radio-group v-model="cartDay">
                  <el-radio-button label="07.20 19：00">
                    07.20
                    <br>19：00
                  </el-radio-button>
                  <el-radio-button label="07.21 19：00">
                    07.21
                    <br>19：00
                  </el-radio-button>
                  <el-radio-button label="07.22 19：00">
                    07.22
                    <br>19：00
                  </el-radio-button>
                  <el-radio-button label="07.23 19：00">
                    07.23
                    <br>19：00
                  </el-radio-button>
                  <el-radio-button label="07.24 19：00">
                    07.24
                    <br>19：00
                  </el-radio-button>
                  <el-radio-button label="07.25 19：00">
                    07.20
                    <br>19：00
                  </el-radio-button>
                </el-radio-group>
              </div>
              <div class="productnew-header-priceb">
                <a style="cursor: pointer;display:none;" class="productnew-header-m1" title="收起"></a>
                <a style="cursor: pointer;" class="productnew-header-m2" title="更多日期/场次"></a>
              </div>
            </div>
          </div>
          <div style="clear: both"></div>
          <div class="productnew-header-pricec clearfloat" style="margin-top:20px;">
            <div class="price-cont"></div>
            <div class="productnew-header-pricec1">座位类型：</div>
            <div class="productnew-header-pricea2-ul clearfloat">
              <div class="fl">
                <el-radio-group v-model="price">
                  <el-radio-button label="160"></el-radio-button>
                  <el-radio-button label="220"></el-radio-button>
                  <el-radio-button label="280"></el-radio-button>
                  <el-radio-button label="380"></el-radio-button>
                  <el-radio-button label="550(套票优惠)"></el-radio-button>
                  <el-radio-button label="600(套票优惠)"></el-radio-button>
                  <el-radio-button label="680(套票优惠)"></el-radio-button>
                  <el-radio-button label="800"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button type="primary" @click="addOrderBtn()">提交订单</el-button>
  </div>
</template>
<script>
import { addOrder } from "../../api/http";
export default {
  name: "Detail",
  data() {
    return {
      imgUrl: this.$route.params.img
        ? this.$route.params.img
        : "http://s1.chncpa.org//upload/2019/03/19/P020190319426556828324.jpg",
      name: this.$route.params.name,
      time: this.$route.params.time,
      cartDay: "07.20 19：00",
      price: "160"
    };
  },
  methods: {
    addOrderBtn() {
      addOrder({
        address: this.imgUrl,
        address_detail: this.time,
        geohash: "31.22299,121.36025",
        name: this.name,
        phone: "18237096233",
        phone_bk: this.cartDay,
        poi_type: this.cartDay,
        sex: 1,
        tag: this.price,
        tag_type: 4
      }).then(res => {
        if (res.status === 200) {
          this.$message({
            message: "添加订单成功,请到我的订单查看!",
            duration: "3000",
            type: "success"
          });
          this.$router.push({
            name: "List"
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tick-xin-top {
  overflow: hidden;
  .xin-top-left {
    padding: 10px;
    border: 1px solid #ccc;
  }
  .xin-top-right {
    margin-left: 20px;
    .xin-top-right-tit {
      color: #999999;
      text-align: right;
      float: left;
    }
  }
}

.xin-top-t {
  width: 100%;
  padding-top: 13px;
  overflow: hidden;
  li {
    height: 30px;
    width: 100%;
    float: left;
    overflow: hidden;
    p {
      float: left;
      color: #3e3e3e;
      height: 24px;
      line-height: 24px;
      span {
        /* display: inline-block; */
        float: left;
        height: 24px;
        line-height: 24px;
        margin-right: 10px;
      }
    }
  }
}
.xin-top-cent,
.xin-top-lei {
  width: 640px;
  border: 1px solid #d6dfe7;
  padding: 15px 10px;
  margin-top: 8px;
  text-align: left;
  .tit {
    height: 22px;
    font-weight: bold;
    color: #999999;
  }
  div {
    color: #ff5a00;
    line-height: 18px;
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfloat {
  zoom: 1;
}
.productnew-header-price {
  font: normal 12px/1.5 "arial", "Tahoma", "simsun", "宋体";
  width: 662px;
  border-top: 1px solid #ebebeb;
  margin-top: 10px;
  padding-bottom: 30px;
  background-color: #fbfbfb;
}
.productnew-header-pricea1 {
  float: left;
  text-align: right;
  margin-right: 15px;
  margin-top: 17px;
  color: #a6a6a6;
}
.productnew-header-pricea2 {
  float: left;
  width: 555px;
}
.productnew-header-pricea2-ul {
  height: 47px;
  overflow: hidden;
  font-size: 12px;
  li {
    width: 103px;
    height: 39px;
    border: 1px solid #e5e5e5;
    float: left;
    margin-right: 5px;
    margin-top: 5px;
    color: #666;
    cursor: pointer;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    zoom: 1;
  }
  .choose {
    width: 101px;
    height: 37px;
    border: 2px solid #20b6e8;
  }
  span {
    float: left;
  }
}
#z_price span {
  padding-left: 15px;
  height: 100%;
  line-height: 40px;
}

.productnew-header-sp1 {
  margin-top: 2px;
  margin-left: 8px;
  font-size: 12px;
}
.productnew-header-pricea,
.productnew-header-pricec {
  margin-top: 30px;
  margin-left: 10px;
}
.productnew-header-pricec1 {
  float: left;
  text-align: right;
  margin-right: 15px;
  margin-top: 17px;
  color: #a6a6a6;
}
.productnew-header-pricec2 {
  float: left;
  width: 555px;
}
</style>
