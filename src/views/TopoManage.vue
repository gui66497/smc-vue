<!--设施运维-拓扑管理-->
<template>
  <!--<div class="home" onload="initA()">
    i am BB
  </div>-->
  <div class="ht-graph" id="canvas">

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>




</template>

<script>

  import {init} from '@/components/topo/topo';

  export default {
    name: 'topoManage',
    props: {

    },
    data() {
      return {
        ready: false,
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
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    },
    methods: {
      showCC: function () {
        alert(1)

      }
    },
    mounted() {
      const data=[
        {
          name:'192.168.1.1',
          type:'总机',
          group:'北京'
        },{
          name:'192.168.1.2',
          type:'安全监管',
          group:'北京'
        },{
          name:'192.168.1.3',
          type:'防火墙',
          group:'北京'
        }, {
          name: '192.168.1.4',
          type: '安全评估',
          group: '北京'
        },{
          name:'192.168.1.5',
          type:'防火墙',
          group:'北京'
        },{
          name:'192.168.1.6',
          type:'入侵检测',
          group:'北京'
        },{
          name:'192.168.1.7',
          type:'子网',
          group:'北京'
        },{
          name:'192.168.1.8',
          type:'子网',
          group:'北京'
        }
        ,{
          name:'192.168.1.9',
          type:'子网',
          group:'北京'
        }
        ,{
          name:'192.168.1.10',
          type:'子网',
          group:'北京'
        },{
          name:'192.168.1.11',
          type:'子网',
          group:'北京'
        },{
          name:'192.168.1.12',
          type:'子网',
          group:'北京'
        }
      ];
      const linkData = [{
        target: "192.168.1.2",
        source: "192.168.1.7"
      },{
        target: "192.168.1.2",
        source: "192.168.1.8"
      },{
        target: "192.168.1.2",
        source: "192.168.1.9"
      },{
        target: "192.168.1.2",
        source: "192.168.1.10"
      },{
        target: "192.168.1.2",
        source: "192.168.1.11"
      },{
        target: "192.168.1.2",
        source: "192.168.1.12"
      }];
      init(data, linkData, false);
    }
  }
</script>
<style>
  .ht-graph {
    /*position: relative;*/
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    background-color: #243b66;
  }
  .main {
    margin: 0px;
    padding: 0px;
    /*position: absolute;*/
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .ht-widget-contextmenu{
    z-index: 999
  }

  .topo_main {
    margin: 0px;
    padding: 0px;
    position: absolute;
    /*top: 0px;*/
    /*bottom: 0px;*/
    left: 0px;
    right: 0px;
    height: 80%;
    width: 100%;
  }

  .topo_main >canvas {
    position: relative !important;
  }

  #canvas .panel-body {
    padding: 0;
  }

  .ht-widget-panel.outer-panel {
    top: inherit !important;
  }
</style>
