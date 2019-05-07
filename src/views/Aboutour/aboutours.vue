<template>
  <div>
    <el-card>
      <el-row>
        <label class="headestyle">
          <span class="headstylein">|</span>关于我们
        </label>
      </el-row>
      <el-row>
        <el-card>
          <h1>{{aboutData.activityCaption}}</h1>
          <h2>{{aboutData.supervipCaption}}</h2>
          <p>{{aboutData.activityContent}}</p>
          <h2>{{aboutData.signCaption}}</h2>
          <p>{{aboutData.signContent}}</p>
          <h2>{{aboutData.rankCaption}}</h2>
          <p>{{aboutData.rankContent}}</p>
          <h2>{{aboutData.pointtextCaption}}</h2>
          <p>{{aboutData.pointtextContent}}</p>
          <h2>{{aboutData.phototutorialCaption}}</h2>
          <p>{{aboutData.phototutorialContent}}</p>
          <h2>{{aboutData.paymentCaption}}</h2>
          <p>{{aboutData.paymentContent}}</p>
          <h2>{{aboutData.freshmanCaption}}</h2>
          <p>{{aboutData.otherContent}}</p>
          <p>{{aboutData.forgotContent}}</p>
        </el-card>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { queryOurs } from "../../api/http";
export default {
  data() {
    return {
      aboutData: {}
    };
  },
  mounted() {
    this.getFormData();
  },
  methods: {
    // 获取信息
    getFormData() {
      queryOurs().then(res => {
        if (res.status === 200) {
          this.aboutData = res.data;
          console.log(this.aboutData);
        }
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
h1 {
  font-size: 22px;
  color: red;
}
h2 {
  font-size: 18px;
  color: #333;
  margin-top: 5px;
}
p {
  font-size: 14px;
  color: #3c8cff;
  padding: 5px 20px;
  text-indent: 28px;
}
.el-card {
  margin-top: 20px;
}
</style>
