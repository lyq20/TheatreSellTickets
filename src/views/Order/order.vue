<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="6">
          <label class="headestyle">
            <span class="headstylein">|</span>订单列表
          </label>
        </el-col>
      </el-row>
      <el-row class="ordermain">
        <el-col v-for="(item) in orderList" :key="item.id">
          <el-card class="orderlist_wrap">
            <div class="fl">
              演出名称:
              <span>{{ item.name }}</span>
            </div>
            <div>
              播放时长：
              <span>{{ item.address_detail}}</span>
            </div>
            <div>
              开始时间：
              <span>{{ item.phone_bk}}</span>
            </div>
            <div>
              座位类型:
              <span>{{ item.tag}}</span>
            </div>
            <el-button type="primary" size="small" @click="cancleOrder(item.id)">取消订单</el-button>
          </el-card>
          <el-card v-if="orderList.length === 0">暂无订单数据</el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { queryOrderList, deletOrder } from "../../api/http";
export default {
  name: "OrderList",
  data() {
    return {
      orderList: {}
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      queryOrderList().then(res => {
        console.log(res);
        this.orderList = res.data;
      });
    },
    cancleOrder(id) {
      if (id) {
        deletOrder(id).then(res => {
          if (res.data.status === 1) {
            this.$message({
              message: "取消订单成功",
              type: "success"
            });
            this.getOrderList();
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.headestyle {
  font-size: 16px;
  line-height: 22px;
  color: #333;
  // text-align: left;
  font-weight: 900;
  span {
    font-size: 18px;
    line-height: 20px;
    color: #3c8cff;
    margin-right: 8px;
  }
}
.el-row {
  text-align: left;
}
.ordermain {
  .el-card {
    margin: 10px 0 10px;
  }
}
.orderlist_wrap {
  font-size: 16px;
  font-family: "宋体";
  span {
    color: orange;
  }
  div {
    width: 43%;
    float: left;
    padding: 5px 0;
    height: 30px;
    line-height: 30px;
  }
}
.el-button {
  margin-top: 10px;
}
</style>
