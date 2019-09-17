<!--全网概览-拓扑视图-->
<template>
  <!--<div class="home" onload="initA()">
    i am BB
  </div>-->
  <div class="ht-graph" id="canvas">

  </div>
</template>

<script>

  import {init} from '@/components/topo/topo';

  export default {
    name: 'bb',
    props: {

    },
    data() {
      return {
        ready: false
      }
    },
    methods: {
      createGraph() {
        var dataModel = new ht.DataModel(),
                graphView = new ht.graph.GraphView(dataModel),
                view = graphView.getView();

        view.className = 'main';
        document.getElementById("ht-app").appendChild(view);
        //document.body.appendChild(view);
        window.addEventListener('resize', function (e) {
          graphView.invalidate();
        }, false);

        var source = new ht.Node();
        source.setName('source');
        source.setPosition(100, 70);
        dataModel.add(source);

        var target = new ht.Node();
        target.setName('target');
        target.setPosition(260, 70);
        dataModel.add(target);

        var edge = new ht.Edge();
        edge.setSource(source);
        edge.setTarget(target);
        dataModel.add(edge);

        edge = new ht.Edge(source, target);
        edge.toggle();
        dataModel.add(edge);

        edge = new ht.Edge(source, source);
        dataModel.add(edge);

        graphView.getLabel = function(data){
          if(data instanceof ht.Edge){
            if(data.isEdgeGroupAgent()){
              return data.getEdgeGroupSize() + ' become 1';
            }
          }
          return data.getName();
        };
      },
      getInstance() {
        return this.instance;
      }
    },
    mounted() {
      // this.createGraph()
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
      init(data, linkData, true);
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
</style>
