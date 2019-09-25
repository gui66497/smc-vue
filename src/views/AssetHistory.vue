<!--机历信息-->
<template>
  <div class="assetHistory">

    <el-table
            :data="tableData"
            stripe
            style="width: 100%">
      <el-table-column
              prop="ip"
              label="IP"
              width="125">
      </el-table-column>
      <el-table-column
              prop="macAddress"
              label="Mac地址"
              width="146">
      </el-table-column>
      <el-table-column
              prop="detail"
              label="内容">
      </el-table-column>
      <el-table-column
              prop="createTime"
              label="创建时间"
              width="150">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
  import {assetHistory} from '@/api/AllServices'

  export default {
    name: 'assetHistory',
    props: {
      assetId: String
    },
    created() {
      this.requestData()
    },
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      requestData () {
        console.log("父组件传来的id：", this.assetId);
        if (!this.assetId) return;
        assetHistory(this.assetId).then(e => {
          let data = e.data
          if (data.data && Array.isArray(data.data)) {
            this.tableData = data.data
          }
        });
      },
      handleEdit() {

      },
      handleDelete() {

      }
    },
    mounted() {
    }
  }
</script>
<style>

</style>
