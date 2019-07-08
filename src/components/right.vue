<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>性别</th>
            <th>能力</th>
            <th>爱好</th>
            <th>管理</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item) in list">
            <td>{{item.id}}</td>
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
import axios from "../assets/axios.js";
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
    del(i) {
      if (confirm("确定删除吗?")) {
        axios
          .delete(
            "https://www.easy-mock.com/mock/5d0cba0313563a7b47ce871c/itcast_wyz/heros/" +i)
          .then(res => {
            if (res.status == 200) {
             this.getcontent();
            }
          });
      }
    },
    getcontent() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5d0cba0313563a7b47ce871c/itcast_wyz/heros"
        )
        .then(res => {
          const { status, data } = res;

          if (status == 200) {
            this.list = data.data.heros;
          }
        });
    }
  }
};
</script>

