<template>
  <div>
    <el-card>
      <el-row class="header-row">
        <el-col :span="6">
          <label class="headestyle">
            <span class="headstylein">|</span>列表页面
          </label>
        </el-col>
      </el-row>
      <el-row :span="25">
        <el-col :span="6" v-for="item in shoppingList" :key="item.id">
          <el-card>
            <div class="zone yc first">
              <div>
                <p @click="jampDetail(item)">
                  <img width="181" height="260" :src="item.image_path">
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
                  <em id="pricexq197834">{{ item.description }}</em>起
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
    </el-card>
  </div>
</template>
<script>
import { getShopList } from "../../api/http";
export default {
  name: "List",
  data() {
    return {
      shoppingList: {}
    };
  },
  mounted() {
    this.getListFun();
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
    getListFun() {
      getShopList({
        latitude: 31.22299,
        longitude: 121.36025,
        kw: ""
      }).then(res => {
        console.log(res.data);
        this.shoppingList = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.headestyle {
  font-size: 16px;
  line-height: 22px;
  color: #333;
  font-weight: 900;
  span {
    font-size: 18px;
    line-height: 20px;
    color: #3c8cff;
    margin-right: 8px;
  }
}
.header-row {
  text-align: left;
}
.el-card {
  padding: 10px;
  .el-card {
    margin: 10px;
    img {
      width: 100%;
    }
  }
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
  margin: 0 auto;
  padding: 0 10px;
  .rating {
    margin-left: 6px;
    color: orange;
  }
}
.title {
  padding-top: 5px;
  p {
    font-size: 18px;
    color: #000;
  }
}
.gary9 {
  color: #999;
}
.price {
  height: 40px;
  line-height: 40px;
  font-size: 16px;

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
  .el-button {
    color: #fff;
    font-size: 14px;
  }
}
</style>
