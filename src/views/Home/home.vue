<template>
  <div>
    <div class="banner">
      <el-carousel :interval="4000" height="550px">
        <el-carousel-item v-for="item in swiperList" :key="item.id">
          <!-- <h3>{{ item }}</h3> -->
          <img :src="item.url" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="floor">
      <img src="http://www.chncpa.org/sywh/sybnx/201901/P020190312682862245444.jpg" alt>
    </div>
    <el-row>
      <el-col :span="6" v-for="item in shoppingList" :key="item.id">
        <el-card>
          <div class="zone yc first">
            <div>
              <p @click="jampDetail(item)">
                <img width="261" height="310" :src="item.image_path">
              </p>
            </div>
            <div style="height:39px;overflow:hidden;" class="title">
              <p>{{ item.name }}</p>
            </div>
            <div class="gary9">{{ item.time }}</div>
            <div class="play">
              <div class="fl">戏剧场</div>
              <div class="rating fr">评分：{{ item.rating}}</div>
            </div>
            <div class="price fl">
              <div class="fl">
                ￥
                <em id="pricexq197834">{{ item.description}}</em>起
              </div>
            </div>
            <div>
              <div class="sbtn btn fr mr5">
                <el-button @click="jampDetail(item)" type="text" size="mini">订票</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { getSwiper, getShopList } from "../../api/http";
export default {
  name: "Home",
  data() {
    return {
      swiperList: [],
      shoppingList: []
    };
  },
  mounted() {
    this.getSwiperList();
    getShopList({
      latitude: 31.22299,
      longitude: 121.36025,
      kw: ""
    }).then(res => {
      console.log(res.data);
      this.shoppingList = res.data;
    });
  },
  methods: {
    jampDetail(item) {
      this.$router.push({
        name: "Detail",
        params: {
          img: item.image_path,
          name: item.name,
          time: item.distance
        }
      });
    },
    getSwiperList() {
      getSwiper({ limit: 20, offset: 0 }).then(res => {
        console.log(res.data);
        this.swiperList = res.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 90%;
  margin: 0 auto;
  /* height: 320px; */
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.floor {
  width: 100%;
  margin: 20px auto 20px;
  img {
    width: 100%;
  }
}
.el-card {
  margin: 5px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.play {
  width: 160px;
  height: 28px;
  line-height: 28px;
  font-size: 16px;
  margin: 0 auto;
  padding: 0 30px;
  .rating {
    margin-left: 6px;
    color: orange;
  }
}
.title {
  padding-top: 5px;
  p {
    font-size: 20px;
    color: #000;
  }
}
.gary9 {
  color: #999;
  font-size: 14px;
}
.price {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  margin-left: 20px;
  em {
    color: orange;
    font-size: 22px;
    font-weight: 900;
  }
}
.sbtn {
  width: 80px;
  height: 30px;
  margin-top: 5px;
  background: orange;
  border-radius: 3px;
  font-size: 14px;
  .el-button {
    color: #fff;
    font-size: 14px;
  }
}
</style>

