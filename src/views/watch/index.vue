<template>
  <div>
    {{ totalNum }}
    <table>
      <thead>
        <tr>
          <th @click="checkAll(isChecked)">
            <input type="checkbox" v-model="isChecked" />
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>小计</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in shopList" :key="item.name">
          <td><input type="checkbox" v-model="item.isChecked" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.num }}</td>
          <td>{{ item.num * item.price }}</td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      shopList: [
        { name: "车", num: 1, price: 5000, isChecked: false },
        { name: "火车", num: 2, price: 5000, isChecked: false },
        { name: "飞机", num: 3, price: 5000, isChecked: false },
        { name: "火箭", num: 4, price: 5000, isChecked: false },
      ],
    };
  },
  computed: {
    //   总数量
    totalNum() {
      let arr = this.shopList.filter((v) => {v.num >1;return v.num})
      console.log(arr);
    },
  },
  methods: {
    //   删除
    del(index) {
      this.shopList.splice(index, 1);
    },

    // 全选
    checkAll(isChecked) {
      this.shopList.forEach((v) => {
        v.isChecked = !isChecked;
      });
    },
    //反选
  },
};
</script>


<style lang="scss" scoped>
</style>