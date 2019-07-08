<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" placeholder="姓名" v-model="FormData.name" />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          placeholder="性别"
          v-model="FormData.gender"
        />
      </div>
      <div class="form-group">
        <label for="fath">能力</label>
        <input type="text" class="form-control" id="fath" placeholder="能力" v-model="FormData.fath" />
      </div>
      <div class="form-group">
        <label for="hobby">爱好</label>
        <input
          type="text"
          class="form-control"
          id="hobby"
          placeholder="爱好"
          v-model="FormData.hobby"
        />
      </div>
      <div class="form-group">
        <label for="rule">职业</label>
        <input type="text" class="form-control" id="rule" placeholder="职业" v-model="FormData.rule" />
      </div>
      <button type="submit" @click.prevent="edit()" class="btn btn-success">修改</button>
    </form>
  </div>
</template>
<script>
import axios from "../../assets/axios.js";
export default {
  props: ["id"],
  data() {
    return {
      FormData: {
        name: "",
        gender: "",
        fath: "",
        hobby: "",
        rule: ""
      }
    };
  },
  mounted() {
    this.geted();
  },
  methods: {
    geted() {
      this.axios.get(`heros/${this.id}`).then(res => {
        const { data, status } = res;
        if (status === 200) {
          // 获取成功
          this.FormData = data;
        } else {
          // 获取失败
          alert("获取数据失败");
        }
      });
    },
    edit() {
      this.axios
      .put(`heros/${this.id}`,this.FormData)
      .then(res=>{
        const status = res.status
        if(status===200){
          this.$router.push('/list')
        }else{
          alert('修改失败')
        }
      })
    }
  }
};
</script>