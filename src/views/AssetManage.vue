<!--系统设置-资产管理-->
<template>
  <div class="home">
    <div class="assetMgt_left">
      <el-tree class="assetTree" :data="treeData" :props="assetTreeProps"
               :default-expand-all="true"
               :highlight-current="true"
               :expand-on-click-node="false" node-key="id"
               @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="assetMgt_right">
      <el-row class="btn-group">
        <el-button size="medium" @click="handleAdd">资产注册</el-button>
        <el-button size="medium">资产导入</el-button>
        <el-button size="medium">资产导出</el-button>
        <el-button size="medium">资产类型管理</el-button>
        <el-button size="medium" @click="batchDelete">资产注销</el-button>
        <el-button size="medium">配置向导</el-button>
      </el-row>

      <el-table
              :data="tableData"
              stripe
              style="width: 100%"
              @selection-change="handleSelectionChange">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
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
                    @click="handleDelete(scope.$index, scope.row)">注销</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="资产注册" width="35%" :visible.sync="dialogFormVisible">
      <el-form :model="assetForm" :rules="rules" ref="assetForm">
        <el-form-item label="资产名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="assetForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="ip地址" prop="manageIp" :label-width="formLabelWidth">
          <el-input v-model="assetForm.manageIp" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="资产类型" prop="type" :label-width="formLabelWidth">
          <!-- 调用树形下拉框组件 -->
          <SelectTree
                  :props="assetTypeProps"
                  :options="treeData"
                  :value="assetForm.type"
                  @getValue="getValue($event)"/>
        </el-form-item>
        <el-form-item label="所属单位" prop="organizeId" :label-width="formLabelWidth">
          <SelectTree
                  :props="organizeProps"
                  :options="organizeTreeData"
                  :value="assetForm.organizeId"
                  @getValue="getOrganizeValue($event)"/>
        </el-form-item>
        <!--<el-form-item label="管理网段" :label-width="formLabelWidth">
          <el-select v-model="assetForm.network" placeholder="请选择管理网段">
            <el-option label="192.168.1.1/192.168.1.255" value="192.168.1.1/192.168.1.255"></el-option>
            <el-option label="192.168.2.1/192.168.2.255" value="192.168.2.1/192.168.2.255"></el-option>
          </el-select>
        </el-form-item>-->
        <el-form-item label="所在地区" :label-width="formLabelWidth">
          <el-input v-model="assetForm.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="责任人" :label-width="formLabelWidth">
          <el-input v-model="assetForm.responsible" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="责任人电话" :label-width="formLabelWidth">
          <el-input v-model="assetForm.responsiblePhone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!--<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
        <el-button type="primary" @click="formSubmit('assetForm')">确 定</el-button>
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
  import {assetList, addAsset, deleteAsset, assetTypeList, organizeList} from '@/api/AllServices'
  import {construct} from '@aximario/json-tree';
  import assetHistory from '@/views/AssetHistory'
  import SelectTree from "@/components/TreeSelect.vue";

  let selectType;

  export default {
    name: 'assetManage',
    // 引入机历信息组件
    components: {assetHistory, SelectTree},
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

      // 组织机构
      organizeList().then(response => {
        console.log('response', response);
        let organizeList = response.data.data;
        // 扁平数据转换为结构化的
        this.organizeTreeData = construct(organizeList, {
          id: 'id',
          pid: 'pid',
          children: 'children'
        });

      });

    },
    data() {
      return {
        tableData: [],
        assetTreeProps: {
          label: 'nameCh'
        },

        // valueId: null,            // 初始ID（可选）
        assetTypeProps:{                // 配置项（必选）
          value: 'id',
          label: 'nameCh',
          children: 'children',
          // disabled:true
        },
        organizeProps:{                // 配置项（必选）
          value: 'id',
          label: 'name',
          children: 'children',
          // disabled:true
        },


        treeData: [],
        organizeTreeData: [],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        assetForm: {
          name: '测试资产A',
          manageIp: '1.1.1.1',
          type: '1.1',
          organizeId: '1.1',
          network: '192.168.1.1/255.255.255.0',
          location: '无锡',
          responsible: 'fgt',
          responsiblePhone: '110',
        },
        assetId:0,
        table: false,
        multipleSelection: [],
        rules: {
          name: [
            { required: true, message: '请输入资产名称', trigger: 'blur' }
          ],
          manageIp: [
            { required: true, message: '请输入IP地址', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择资产类型', trigger: 'blur' }
          ],
          organizeId: [
            { required: true, message: '请选择所属单位', trigger: 'blur' }
          ]

        }
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
      // 触发多选框
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 打开新增资产
      handleAdd() {
        this.assetForm = {};
        // this.assetForm.type = '1.1';
        console.log('assetForm', this.assetForm);
        this.dialogFormVisible = true;
      },
      // 打开编辑资产
      handleEdit(index, row) {
        this.assetForm = row;
        this.dialogFormVisible = true;
      },
      // 单个删除
      handleDelete(index, row) {
        this.$confirm('确认注销[' + row.name + "]?", '注销确认', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        }).then(() => {
                  deleteAsset(row.id).then(response => {
                    console.log('asd', response);
                    if (response.data.resultCode === "RESULT_SUCCESS") {
                      this.getAssetList();
                      this.$message({type: 'success', offset: 60, message: response.data.message});
                    } else {
                      this.$message({type: 'error', offset: 60, message: response.data.message});
                    }
                  });
        }).catch(() => {
          console.log('取消了删除');
        });
      },
      // 批量删除
      batchDelete() {
        let length = this.multipleSelection.length;
        if (length < 1) {
          this.$message({type: 'warning', offset: 60, message: '请先选中资产'});
        } else {
          this.$confirm('确认注销这' + length + '个资产吗', '注销确认', {
            distinguishCancelAndClose: true,
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            this.$message({
              type: 'info',
              message: '注销确认'
            });
          });
        }
      },
      // 机历信息
      assetHistory(index, row) {
        this.table = true;
        this.assetId = row.id
      },
      // 资产注册表单提交
      formSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('assetForm::', this.assetForm);
            addAsset(this.assetForm).then(e => {
              this.dialogFormVisible = false;
              this.$message({type: 'info', offset: 60, message: e.data.message});
              if (e.data.resultCode === "RESULT_SUCCESS") {
                this.getAssetList();
              }
            });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getValue(value){
        this.assetForm.type = value;
        // this.assetForm.typeName = value;
      },
      getOrganizeValue(value){
        this.assetForm.organizeId = value;
        // this.assetForm.organizeName = value;
      },
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

