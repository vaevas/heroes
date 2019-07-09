<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">装备列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
     <router-link to="/zhuangbei/addzhuangbei" class="btn btn-success">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>能力</th>
            <th>爱好</th>
            <th>管理</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item,index) in list">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>{{item.fath}}</td>
            <td>{{item.hobby}}</td>
            <td>{{item.rule}}</td>
            <td>
              <a href="#/add">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:;" @click="del(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "../../assets/axios";
export default {
  name: "right",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getcontent();
  },
  methods: {
    getcontent() {
      this.axios.get("heros").then(res => {
        const { status, data } = res;

        if (status == 200) {
          this.list = data;
        }
      })
    },
       del(i) {
      if (confirm("确定删除吗?")) {
        this.axios.delete("heros/" + i).then(res => {
          if (res.status == 200) {
            this.getcontent();
          }
        });
      }
    },
  }
};
</script>

