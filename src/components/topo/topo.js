"use strict";

import supervisionImg from '@/components/topo/img/supervision.png'
import pcImg from '@/components/topo/img/PC.png'
import assessmentImg from '@/components/topo/img/assessment.png'
import detectionImg from '@/components/topo/img/detection.png'
import firewallImg from '@/components/topo/img/Firewall.png'
import subnetImg from '@/components/topo/img/Subnet.png'

/**
 * 初始化拓扑图表的方法参数
 * @param data 节点数据
 * @param linkData 连接数据
 * @param hideTool 是否隐藏数据栏
 */
export function init(data, linkData, hideTool) {

    //功能图标
    let items = [
        {
            label:'放大',
            action: function () {
                if (window.editLine) {
                    alertMsg('请先保存连接线');
                } else {
                    graphView.zoomIn(true);
                }
            }
        },
        {
            label:'缩小',
            action: function () {
                if (window.editLine) {
                    alertMsg('请先保存连接线');
                } else {
                    graphView.zoomOut(true);
                }
            }
        },
        {
            label: '添加节点',
            // groupId: 'interaction',
            action: function () {
                this.$emit('eee', 'form child');
                this.dialogFormVisible = true
                document.getElementById("edit_cancel").onclick = function () {
                    document.getElementById("edit_modal").style.display = "none";
                };
                document.getElementById("edit").onclick = function () {
                    var addModal = document.getElementById("edit_modal");
                    var inputs = addModal.getElementsByTagName("input");
                    var json = {};
                    var id = "";
                    for(var i=0;i<inputs.length;i++) {
                        if (inputs[i].name == "ip") {
                            id = inputs[i].value
                        }
                        json[inputs[i].name] = inputs[i].value;
                    }
                    json["next_floor"] = false;
                    if ((typeof id).toLowerCase() == 'string' && id != "") {
                        var node = new ht.Node();
                        node.setName(json.name);
                        node.setTag(json.name);
                        node.a("type",json.type);
                        if (json.type == "总机") {
                            node.setImage("img/PC.png");
                        } else if (json.type == "安全监管") {
                            node.setImage("img/supervision.png");
                        } else if (json.type == "安全评估") {
                            node.setImage("img/assessment.png");
                        } else if (json.type == "入侵检测") {
                            node.setImage("img/detection.png");
                        } else if (json.type == "防火墙") {
                            node.setImage("img/Firewall.png");
                        } else {
                            node.setImage("img/Subnet.png");
                        }

                        node.s({
                            'label.color': '#fff',
                        });
                        dataModel.add(node);
                        if (json.type == "子网") {
                            var prePosition = threeNet[threeNet.length - 1].getPosition();
                            node.setPosition(prePosition.x + 200,prePosition.y);
                        } else {
                            var prePosition = secPro[secPro.length - 1].getPosition();
                            node.setPosition(prePosition.x + 200,prePosition.y);
                            createEdge(node,secPro[secPro.length - 1]);
                        }
                        document.getElementById("edit_modal").style.display = "none";
                        alertMsg('添加成功')
                    }
                };
                document.getElementById("edit_modal").style.display = "block";
            }
        },
        {
            label: '编辑连线',
            type: 'toggle',
            selected: false,
            icon: 'edge',
            // groupId: 'interaction',
            action: function () {
                if (this.selected) {
                    this.label = '保存连线';
                    window.editLine = true;
                    graphView.setInteractors([
                        new ht.graph.DefaultInteractor(graphView),
                        new ht.graph.TouchInteractor(graphView, {
                            selectable: true
                        }),
                        new CreateEdgeInteractor(graphView)
                    ]);
                } else {
                    this.label = '编辑连线';
                    window.editLine = false;
                    graphView.setEditable(false);
//                            saveEdges();
                }

            }
        },
        {
            label: '删除元素',
            type: 'toggle',
            icon: 'node',
            action: function () {
                this.selected = false;
                if (window.editLine) {
                    alertMsg('请先保存连接线');
                } else if (dataModel.getSelectionModel().getLastData() == null) {
                    alertMsg("请先选中删除元素")
                } else {
                    var onlyId = dataModel.getSelectionModel().getLastData()._tag;
                    if (dataModel.getSelectionModel().getLastData() instanceof ht.Node == true) {
                        if (dataModel.getSelectionModel().getLastData() instanceof ht.Group == true) {
                            alertMsg('区域无法被删除');
                        } else {
                            dataModel.remove(selectionModel.getLastData());
                            alertMsg('删除成功');
                        }
                    } else if (dataModel.getSelectionModel().getLastData() instanceof ht.Edge == true) {
                        dataModel.remove(selectionModel.getLastData());
                        alertMsg('删除成功')
                    }

                }
            }
        },
        {
            label: '资产定位',
            type: 'toggle',
            icon: 'node',
            action: function () {
                this.selected = false;
                if (window.editLine) {
                    alertMsg('请先保存连接线');
                } else {
                    findElement();
                }
            }
        },
        {
            label: "隐藏文字",
            action: function (e) {
                var nodes = dataModel.getDatas().toArray();
                if (e.label == "隐藏文字") {
                    e.label = "显示文字";
                    e.toolTip = "显示资产的文字信息";
                    angular.forEach(nodes,function (n) {
                        n.s({
                            'label.font': '0px 微软雅黑'
                        });
                    })
                } else {
                    e.label = "隐藏文字";
                    e.toolTip = "隐藏资产的名称";
                    angular.forEach(nodes,function (n) {
                        n.s({
                            'label.font': ''
                        });
                    })
                }
            }
        }
    ];

    //创建工具栏
    toolbar = new ht.widget.Toolbar(items);
    //工具栏基本配置
    let toobarPanel = new ht.widget.Panel({
        title: "工具栏",
        exclusive: false,
        width: 620,
        contentHeight: 30,
        content: toolbar,
        resizeMode:"none",
        // titleIconSize: 16,
        restoreToolTip: "展开",
        narrowWhenCollapse: true,
        expanded: true
    });
    //ht所有数据节点需要存入dataModel
    let dataModel = new ht.DataModel();
    //创建图层
    let graphView = new ht.graph.GraphView(dataModel);
    let selectionModel = dataModel.getSelectionModel();
    //给图层一个样式名，可以在css文件里通过class名修改图层样式
    graphView.getView().className = 'topo_main';
    //将整个拓扑图初始化到正中心
    graphView.fitContent(true, 0, true);
    //引入ht中属性组件
    let treeView = new ht.widget.TreeView(dataModel);
    //将所有数据节点引入树形组件中
    treeView.isVisible = function (data) {
        // 连线在树上,不需要显示
        if (data instanceof ht.Edge) {
            return false;
        }
        return true;
    };
    //树形图底板样式的修改接口
    let treeViewPanel = new ht.widget.Panel({
        title: "区域设备管理",
        exclusive: false,
        width: 200,
        contentHeight: 250,
        titleColor: "yellow",
        content: treeView,
        titleIconSize: 16,
        restoreToolTip: "展开",
        narrowWhenCollapse: true,
        expanded: true
    });
    //工具面板创建
    let panelGroup = new ht.widget.PanelGroup({
        hGap: 10
    });
    //设置工具面板方向
    panelGroup.setLeftTopPanels(treeViewPanel, toobarPanel, 'h');

    document.getElementById("canvas").appendChild(graphView.getView());
    if (!hideTool) {
        document.getElementById("canvas").appendChild(toobarPanel.getView());
        document.getElementById("canvas").appendChild(treeViewPanel.getView());
    }
    window.addEventListener('resize', function (e) {
        graphView.invalidate();
    }, false);
    var secPro = [];
    var threeNet = [];

    for(var i=0;i<data.length;i++) {
        createNode(data[i].name,data[i].type)
    }
    //自动排列节点的方法
    autoLayout2(threeNet, secPro);

    function createGroup(name,img) {
        var group = new ht.Group();
        group.setName(name);
        group.setTag(name);
        group.setExpanded(true);
        group.setPosition(0,0);
        group.s({
            'select.width': 1,
            'group.type': 'roundRect',
//                'group.image':'img/beijing.svg',
            'group.image': img,
            'label.color': '#fff',
            'label.font': '25px Arial',
            'group.border.width': 0
        });
        dataModel.add(group);
        var nodeTop = new ht.Node();
        nodeTop.setName("");
        nodeTop.a("type","top");
        nodeTop.setImage("img/little.png");
        nodeTop.setPosition(0,-100);
        nodeTop.setParent(group);
        dataModel.add(nodeTop);
        var nodeBottom = new ht.Node();
        nodeBottom.setName("");
        nodeBottom.a("type","bottom");
        nodeBottom.setImage("img/little.png");
        nodeBottom.setPosition(0,100);
        nodeBottom.setParent(group);
        dataModel.add(nodeBottom);
        var nodeLeft = new ht.Node();
        nodeLeft.setName("");
        nodeLeft.a("type","left");
        nodeLeft.setImage("img/little.png");
        nodeLeft.setPosition(-100,0);
        nodeLeft.setParent(group);
        dataModel.add(nodeLeft);
        var nodeRight = new ht.Node();
        nodeRight.setName("");
        nodeRight.a("type","right");
        nodeRight.setImage("img/little.png");
        nodeRight.setPosition(100,0);
        nodeRight.setParent(group);
        dataModel.add(nodeRight);
        return group;
    }

    //创建节点的方法
    function  createNode(name,type) {
        var node = new ht.Node();
        node.setName(name);
        node.setTag(name);
        node.a("type",type);
        if (type == "总机") {
            node.setImage(pcImg);
        } else if (type == "安全监管") {
            node.setImage(supervisionImg);
        } else if (type == "安全评估") {
            node.setImage(assessmentImg);
        } else if (type == "入侵检测") {
            node.setImage(detectionImg);
        } else if (type == "防火墙") {
            node.setImage(firewallImg);
        } else {
            node.setImage(subnetImg);
        }

        node.s({
            'label.color': '#fff',
            'label.font': '20px 雅黑'
        });
        dataModel.add(node);
    }

    function autoLayout(group) {
        var nodes = group.getChildren().toArray();
        var Oposition = group.getPosition();
        var square = 0;
        var groupNode = [];
        //自动布局节点位置
        for (var i=0;i<nodes.length;i++) {
            if (nodes[i] instanceof ht.Node && nodes[i].getAttr("type") == "虚拟机") {
                groupNode.push(nodes[i]);
            }
        }
        for(var i=1;i<20;i++) {
            if (groupNode.length/(i*i) <= 1){
                square = i;
                break;
            }
        }
        //自动设置组背景的长宽
        for (var i=0;i<nodes.length;i++) {
            if (nodes[i] instanceof ht.Node && nodes[i].getAttr("type") == "top") {
                nodes[i].setPosition(Oposition.x, Oposition.y - (8*(square - 1)) - 80)
            }
            if (nodes[i] instanceof ht.Node && nodes[i].getAttr("type") == "bottom") {
                nodes[i].setPosition(Oposition.x, Oposition.y + (8*(square - 1)) + 80)
            }
            if (nodes[i] instanceof ht.Node && nodes[i].getAttr("type") == "left") {
                nodes[i].setPosition(Oposition.x - (80*(square - 1)) - 80, Oposition.y)
            }
            if (nodes[i] instanceof ht.Node && nodes[i].getAttr("type") == "right") {
                nodes[i].setPosition(Oposition.x + (80*(square - 1)) + 80, Oposition.y)
            }
        }

        for (var i=0;i<groupNode.length;i++) {
            if (i>0) {
                var y = parseInt(i/square);
                var prePosition = groupNode[i-1].getPosition();
                if (i%square == 0) {
                    prePosition = groupNode[i-square].getPosition();
                    groupNode[i].setPosition(prePosition.x - 80,prePosition.y - 48);
                } else {
                    groupNode[i].setPosition(prePosition.x + 80,prePosition.y - 48);
                }

            } else {
                groupNode[i].setPosition(Oposition.x ,Oposition.y + (80*(square - 1)));
            }
        }
    }

    function autoLayout2(threeNet, secPro) {
        var nodes = dataModel.getDatas().toArray();
        for (var i=0;i<nodes.length;i++) {
            if (nodes[i] instanceof ht.Node) {
                if (nodes[i].getAttr("type") == "总机") {
                    nodes[i].setPosition(0 ,0);//定位中心节点
                } else if (nodes[i].getAttr("type") == "子网") {
                    if (threeNet.length > 0) {
                        var prePosition = threeNet[threeNet.length - 1].getPosition(); //获取第三层级下创建节点前一个节点的坐标
                        nodes[i].setPosition(prePosition.x + 200,prePosition.y); //根据前一个节点的坐标计算新坐标位置
                    } else {
                        nodes[i].setPosition (-400, 400) //创建第三层级下第一个点的坐标
                    }
                    for (var j=0;j<linkData.length;j++) {
                        if (nodes[i]._tag == linkData[j].source) {
                            var tarNode =  dataModel.getDataByTag(linkData[j].target);
                            createEdge(nodes[i], tarNode);
                        }
                    }
                    threeNet.push(nodes[i])
                } else {
                    if (secPro.length > 0) {
                        var prePosition = secPro[secPro.length - 1].getPosition();//获取第二层级下创建节点前一个节点的坐标
                        nodes[i].setPosition(prePosition.x + 200,prePosition.y); //根据前一个节点的坐标计算新坐标位置
                        createEdge(nodes[i],secPro[secPro.length - 1]);
                    } else {
                        nodes[i].setPosition(-200, 200); //创建第二层级下第一个点的坐标
                        var firCtl = {};
                        for (var j=0;j<nodes.length;j++) {
                            if (nodes[j].getAttr("type") == "总机") {
                                firCtl = nodes[j];
                            }
                        }
                        createEdge(nodes[i],firCtl);
                    }
                    secPro.push(nodes[i])
                }
            }
        }
    }

    //通用弹出框
    function alertMsg(msg, callback, isError) {
        var dialog = new ht.widget.Dialog({
            title: '提示信息',
            closable: true,
            draggable: false,
            contentPadding: 10,
            content: "<span style='color: black'>" + msg + "</span>",
            buttonsAlign: 'center',
            width: 300,
            height: 100,
            buttons: [
                {
                    label: '确定', action: function () {
                        dialog.hide();
                        if (callback && callback instanceof Function) {
                            callback();
                        }
                    }
                }
            ]
        });
        dialog.show();
    }

    //打开节点定位方法的面板方法
    function findElement() {
        var dialog = new ht.widget.Dialog();
        dialog.setConfig({
            title: "输入框",
            closable: true,
            draggable: true,
            contentPadding: 10,
            content: "<label style='color: black'>请输入资产ID:</label><input style='color: black' id='res_position' />",
            buttons: [
                {
                    label: "OK",
                    buttonsAlign: "right",
                    action: function (item, e) {
                        dialog.hide();
                        var content = $.trim($("#res_position").val());
                        if (content == '') {
                            alertMsg("请输入资产id");
                            return
                        }

                        var element = content;
                        for (var i = 0; i < data.length; i++) {
                            if (content == data[i].ip) {
                                element = data[i].id;
                                break;
                            }
                        }
                        if (element != '') {
                            aimAtRes(content)
                        } else {
                            alertMsg("资产id输入不正确</span>");
                            return
                        }

                    }
                }
            ]
        });
        dialog.show();
    }

    //根据输入名称获取节点的方法
    function aimAtRes(id) {
        var node = dataModel.getDataByTag(id);
        if (!node) {
            for (var prop in topoMerge.areas) {
                if (topoMerge.areas[prop].datas[id] && dataModel.getDataByTag("merge_" + prop)) {
                    topoMerge.demergeArea(dataModel.getDataByTag("merge_" + prop));
                    break;
                }
            }
        }
        node = dataModel.getDataByTag(id);
        for (var i = 0; i < 3; i++) {
            graphView.setZoom(0.5, true);
            var p = node.getPosition();
            graphView.setZoom(0.8, true, {x: p.x, y: p.y});
        }
        dataModel.getSelectionModel().setSelection([node]);
    }

    //创建连线
    function createEdge(node1, node2) {
        var edge = new ht.Edge(node1, node2);
        edge.s({
            'edge.width': 2,
            'edge.type' : 'ortho'
        });
        dataModel.add(edge);
    }
}

