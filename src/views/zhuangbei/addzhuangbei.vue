<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加装备</h2>
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
      <button type="submit" @click.prevent="add" class="btn btn-success">添加</button>
    </form>
  </div>
</template>
<script>
import axios from "../../assets/axios.js";
export default {
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
  methods: {
    add() {
      this.axios
      .post("heros", this.FormData)
      .then(res => {
        const status = res.status;
        if (status === 201) {
          this.$router.push('/list')
        }else{
          alert('添加失败')
        }
      });
    }
  }
};
</script>