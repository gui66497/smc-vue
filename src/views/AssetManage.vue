<!--系统设置-资产管理-->
<template>
  <div class="home">
    <div class="assetMgt_left">
      <el-tree class="assetTree" :data="treeData" :props="defaultProps"
               :default-expand-all="true"
               :highlight-current="true"
               :expand-on-click-node="false" node-key="id"
               @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="assetMgt_right">
      <el-row class="btn-group">
        <el-button size="medium" @click="dialogFormVisible = true">资产注册</el-button>
        <el-button size="medium">资产导入</el-button>
        <el-button size="medium">资产导出</el-button>
        <el-button size="medium">资产类型管理</el-button>
        <el-button size="medium">资产注销</el-button>
        <el-button size="medium">配置向导</el-button>
      </el-row>

      <el-table
              :data="tableData"
              stripe
              style="width: 100%">
        <el-table-column
                prop="name"
                label="资产名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="manageIp"
                label="IP地址"
                width="180">
        </el-table-column>
        <el-table-column
                prop="location"
                label="所在地区">
        </el-table-column>
        <el-table-column
                prop="typeName"
                label="资产类型">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                    size="mini"
                    @click="assetHistory(scope.$index, scope.row)">机历</el-button>
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

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-drawer
            title="机历信息"
            :visible.sync="table"
            direction="rtl"
            :destroy-on-close="true"
            size="50%">
      <assetHistory :assetId="assetId"></assetHistory>
    </el-drawer>
  </div>

</template>
<script>
  // @ is an alias to /src
  // import TopMenu from '@/components/TopMenu.vue'
  import {assetList, assetTypeList} from '@/api/AllServices'
  import {construct} from '@aximario/json-tree';
  import assetHistory from '@/views/AssetHistory'

  let selectType;

  export default {
    name: 'assetManage',
    // 引入机历信息组件
    components: {assetHistory},
    created() {

      this.getAssetList();

      assetTypeList(true).then(response => {
        let assetTypeList = response.data.data;
        // 手动构造全部资产 节点
        assetTypeList.push({
          id: "1",
          nameCh: "全部资产",
          pid: null
        });
        // 扁平数据转换为结构化的
        this.treeData = construct(assetTypeList, {
          id: 'id',
          pid: 'pid',
          children: 'children'
        });
      });
    },
    data() {
      return {
        tableData: [],
        defaultProps: {
          label: 'nameCh'
        },
        treeData: [],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        assetId:0,
        table: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
        selectType = data.id;
        this.getAssetList();
      },
      getAssetList() {
        let data = {
          "paging": {"pageNo": 1, "pageSize": 10}
        };
        if (selectType === '1') {
          data.type = null;
        } else if (selectType) {
          data.type = selectType;
        }
        assetList(data).then(response => {
          this.tableData = response.data.list;
          console.log('response', response);
        });
      },
      assetHistory(index, row) {
        console.log("index", index);
        console.log("row", row);
        this.table = true;
        this.assetId = row.id
      }
    },

  }
</script>
<style>
  .assetMgt_left {
    width: 18%;
    height: 100%;
    float: left;
    display: inline-block;
  }
  .assetMgt_right {
    width: 81%;
    height: 100%;
    float: right;
    display: inline-block;
  }
  .btn-group {
    margin: 10px;
    text-align: left;
  }
  .el-tree-node__content {
    height: 40px !important;
  }
</style>

