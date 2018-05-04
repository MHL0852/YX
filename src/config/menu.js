let menuList = [
  // {
  //   "key": "storageMgmt",
  //   "value": "00",
  //   "name": "仓储管理",
  //   "icon": "icon-cangchu",
  //   "clickable": false,
  //   "child": [
  //     {
  //       "key": "documentTypeMgmt",
  //       "name": "单据类型",
  //       "icon": "icon-shouhuo",
  //       "value": "0000",
  //     },
  //     {
  //       "key": "batchedMgmt",
  //       "name": "批次管理",
  //       "icon": "icon-shouhuo",
  //       "value": "0000",
  //     },
  //     {
  //       "key": "basicData",
  //       "name": "基础数据",
  //       "icon": "icon-shouhuo",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "inventoryLocation",
  //           "name": "库位管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "inventoryArea",
  //           "name": "库区管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "inventoryTypes",
  //           "name": "库位承载类型管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "inventoryMgmt",
  //           "name": "仓库管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "inventoryStateMgmt",
  //           "name": "库存状态管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "safetyInventory",
  //           "name": "库内安全库存管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "cargoOwner",
  //           "name": "货主管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "consigneeMgmt",
  //           "name": "收货人管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //
  //       ]
  //     },
  //       {
  //       "key": "platformMgmt",
  //       "name": "月台管理",
  //       "icon": "icon-shouhuo",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "platformDetail",
  //           "name": "月台管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "serviceVisualization",
  //           "name": "月台可视化",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "platformAppointment",
  //           "name": "月台预约",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key": "takeStockMgmt",
  //       "name": "盘点管理",
  //       "icon": "icon-shouhuo",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "inventoryVerification",
  //           "name": "库存盘点",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "adjustProfitLoss",
  //           "name": "盈亏调整",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key": "ASNMgmt",
  //       "name": "ASN管理",
  //       "icon": "icon-shouhuo",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "receivingScheduling",
  //           "name": "收货计划管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "ASNMgmt",
  //           "name": "ASN管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "receivingRecord",
  //           "name": "收货记录查询",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "storagedJobTicket",
  //           "name": "上架作业单管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key":"pickMgmt",
  //       "name":"拣货管理",
  //       "icon":"icon-jianhuo",
  //       "value":"",
  //       "child": [
  //         {
  //           "key": "pickBills",
  //           "name": "拣货单管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "orderPickingBills",
  //           "name": "拣货作业单管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "wavesMgmt",
  //           "name": "波次管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key":"shiftMgmt",
  //       "name":"移位管理",
  //       "icon":"icon-zhuanyi",
  //       "value":""
  //     },
  //     {
  //       "key":"packMgmt",
  //       "name":"包装管理",
  //       "icon":"icon-zhuanyi",
  //       "value":""
  //     },
  //     {
  //       "key":"repertoryMgmt",
  //       "name":"库存管理",
  //       "icon":"icon-kucun",
  //       "value":"",
  //       "child": [
  //         {
  //           "key": "queryInventory",
  //           "name": "库存查询",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "queryLog",
  //           "name": "库存日志",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "pickBack",
  //           "name": "退拣管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "storesRejected",
  //           "name": "取消收货管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "repertoryMgmt",
  //           "name": "库存管理",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "repertoryVisualization",
  //           "name": "库存可视化",
  //           "icon": "icon-shouhuo",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //   ]
  // },
 /* {
    "key": "documentTypeMgmt",
    "name": "单据类型",
    "icon": "icon-shouhuo",
    "value": "00",
    "child":[
      {
        "key": "documentTypeMgmt",
        "name": "单据类型",
        "icon": "icon-shouhuo",
        "value": "0000",
      }
    ]
  },
  {
    "key": "batchedMgmt",
    "name": "批次管理",
    "icon": "icon-shouhuo",
    "value": "00",
    "child":[
      {
        "key": "batchedMgmt",
        "name": "批次管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "basicData",
    "name": "基础数据",
    "icon": "icon-shouhuo",
    "value": "00",
    "child": [
      {
        "key": "inventoryLocation",
        "name": "库位管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "inventoryArea",
        "name": "库区管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "inventoryTypes",
        "name": "库位承载类型管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "inventoryMgmt",
        "name": "仓库管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "inventoryStateMgmt",
        "name": "库存状态管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "safetyInventory",
        "name": "库内安全库存管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "cargoOwner",
        "name": "货主管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "consigneeMgmt",
        "name": "收货人管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },

    ]
  },
  {
    "key": "platformMgmt",
    "name": "月台管理",
    "icon": "icon-shouhuo",
    "value": "00",
    "child": [
      {
        "key": "platformDetail",
        "name": "月台管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "serviceVisualization",
        "name": "月台可视化",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "platformAppointment",
        "name": "月台预约",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
    ]
  },*/
  {
    "key": "takeStockMgmt",
    "name": "盘点管理",
    "icon": "icon-shouhuo",
    "value": "00",
    "child": [
      {
        "key": "inventoryVerification",
        "name": "库存盘点",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "adjustProfitLoss",
        "name": "盈亏调整",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
    ]
  },
  {
    "key": "ReceiveMgmt",
    "name": "收货管理",
    "icon": "icon-shouhuo",
    "value": "00",
    "child": [
      {
        "key": "ReceiveMgmt",
        "name": "收货管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      /*{
        "key": "receivingScheduling",
        "name": "收货计划管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },

      {
        "key": "receivingRecord",
        "name": "收货记录查询",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "storagedJobTicket",
        "name": "上架作业单管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },*/
    ]
  },
  {
    "key": "pickMgmt",
    "name": "拣货管理",
    "icon": "icon-jianhuo",
    "value": "00",
    "child": [
      {
        "key": "pickBills",
        "name": "拣货单管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "orderPickingBills",
        "name": "拣货作业单管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "wavesMgmt",
        "name": "波次管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
    ]
  },
  {
    "key": "shiftMgmt",
    "name": "移位管理",
    "icon": "icon-zhuanyi",
    "value": "00",
    "child":[
      {
        "key": "index",
        "name": "移位管理",
        "icon": "icon-yunshupeisong",
        "value": "",
      }
    ]
  },
  // {
  //   "key": "packMgmt",
  //   "name": "包装管理",
  //   "icon": "icon-zhuanyi",
  //   "value": "00",
  //   "child":[
  //     {
  //       "key": "packMgmt",
  //       "name": "包装管理",
  //       "icon": "icon-yunshupeisong",
  //       "value": "0000",
  //     }
  //   ]
  // },
  {
    "key": "repertoryMgmt",
    "name": "库存管理",
    "icon": "icon-kucun",
    "value": "00",
    "child": [
      {
        "key": "queryInventory",
        "name": "库存查询",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "queryLog",
        "name": "库存日志",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "pickBack",
        "name": "退拣管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "storesRejected",
        "name": "取消收货管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "repertoryMgmt",
        "name": "库存管理",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
      {
        "key": "repertoryVisualization",
        "name": "库存可视化",
        "icon": "icon-shouhuo",
        "value": "0000",
      },
    ]
  },
  // {
  //   "key": "logisticsMgmt",
  //   "value": "00",
  //   "name": "物流管理",
  //   "icon": "icon-wuliu",
  //   "clickable": false,
  //   "child": [
  //     {
  //       "key": "orderMgmt",
  //       "name": "运输工具管理",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "clickable": false,
  //       "child": [
  //         {
  //           "key": "vehicleInfo",
  //           "name": "车辆信息",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "vehicleInstructions",
  //           "name": "车辆使用其他信息",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key": "orderMgmt",
  //       "name": "订单处理",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "clickable": false,
  //       "child": [
  //         {
  //           "key": "orderMgmt",
  //           "name": "订单管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "orderAcknowledgementMgmt",
  //           "name": "订单回单影像管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "orderLocation",
  //           "name": "订单位置日志",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key": "orderMonitor",
  //       "name": "订单监控",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "clickable": false,
  //       "child": [
  //         {
  //           "key": "orderMonitor",
  //           "name": "订单监控",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "abnormalOrders",
  //           "name": "订单异常日志管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key": "selectWarehouse",
  //       "name": "挑仓管理",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "districtManagement",
  //           "name": "区域管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "wareServeDistrict",
  //           "name": "仓库服务区域管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "automaticSelectWare",
  //           "name": "自动挑仓",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key":"serviceProduct",
  //       "name":"服务产品",
  //       "icon":"icon-yunshupeisong",
  //       "value":""
  //     },
  //     {
  //       "key": "transportModes",
  //       "name": "运输执行方案",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "transportModes",
  //           "name": "执行方案",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "transportModesMgmt",
  //           "name": "执行方案匹配策略管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key":"transportMonitor",
  //       "name":"运输监控方案",
  //       "icon":"icon-yunshupeisong",
  //       "value":""
  //     },
  //     {
  //       "key": "timeWindowMgmt",
  //       "name": "时间窗管理",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "holidayMgmt",
  //           "name": "节假日管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "timeWindow",
  //           "name": "时间窗管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "DateMgmt",
  //           "name": "日期管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key":"transportControl",
  //       "name":"物流控制塔",
  //       "icon":"icon-yunshupeisong",
  //       "value":""
  //     },
  //     {
  //       "key":"mainWayMgmt",
  //       "name":"主路线管理",
  //       "icon":"icon-yunshupeisong",
  //       "value":""
  //     },
  //     {
  //       "key": "timelinessMgmt",
  //       "name": "时效管理",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "clientTimeliness",
  //           "name": "客户时效管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "providerTimeliness",
  //           "name": "供应商时效管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key": "transportationDispatching",
  //       "name": "运输调度",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "dispatchMgmt",
  //           "name": "调度单管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "dispatchAcknowledgementMgmt",
  //           "name": "调度单回单影像管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "dispatchLocation",
  //           "name": "调度单位置日志",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key":"accidentCompensation",
  //       "name":"事故理赔",
  //       "icon":"icon-yunshupeisong",
  //       "value":""
  //     },
  //     {
  //       "key": "carrierQuotient",
  //       "name": "承运商份额及奖惩",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "rewardsAndPunishment",
  //           "name": "承运商奖惩记录",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "quotientLog",
  //           "name": "承运商份额日志",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "quotientMgmt",
  //           "name": "承运商份额管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //     {
  //       "key": "paymentManagement",
  //       "name": "计费管理",
  //       "icon": "icon-dingdan",
  //       "value": "0000",
  //       "child": [
  //         {
  //           "key": "paymentType",
  //           "name": "计费类型管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "receivableMgmt",
  //           "name": "应收费用管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "accruedChargeMgmt",
  //           "name": "应付费用管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "receiptBillMgmt",
  //           "name": "应收账单管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //         {
  //           "key": "billsMgmt",
  //           "name": "应付账单管理",
  //           "icon": "icon-wuliu",
  //           "value": "0000",
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   "key": "transportMachineMgmt",
  //   "name": "运输工具管理",
  //   "icon": "icon-dingdan",
  //   "value": "00",
  //   "clickable": false,
  //   "child": [
  //     {
  //       "key": "vehicleInfo",
  //       "name": "车辆信息",
  //       "icon": "icon-wuliu",
  //       "value": "0000",
  //     },
  //     {
  //       "key": "vehicleInstructions",
  //       "name": "车辆使用其他信息",
  //       "icon": "icon-wuliu",
  //       "value": "0000",
  //     },
  //   ]
  // },
  {
    "key": "orderFormDispose",
    "name": "订单处理",
    "icon": "icon-dingdan",
    "value": "00",
    "clickable": false,
    "child": [
      {
        "key": "orderFormMgmt",
        "name": "订单管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "orderAcknowledgementMgmt",
        "name": "订单回单影像管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "orderLocation",
        "name": "订单位置日志",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
/*  {
    "key": "orderMonitor",
    "name": "订单监控",
    "icon": "icon-dingdan",
    "value": "00",
    "clickable": false,
    "child": [
      {
        "key": "orderMonitor",
        "name": "订单监控",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "abnormalOrders",
        "name": "订单异常日志管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
  {
    "key": "selectWarehouse",
    "name": "挑仓管理",
    "icon": "icon-dingdan",
    "value": "00",
    "child": [
      {
        "key": "districtManagement",
        "name": "区域管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "wareServeDistrict",
        "name": "仓库服务区域管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "automaticSelectWare",
        "name": "自动挑仓",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
  {
    "key": "serviceProduct",
    "name": "服务产品",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "serviceProduct",
        "name": "服务产品",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "transportModes",
    "name": "运输执行方案",
    "icon": "icon-dingdan",
    "value": "00",
    "child": [
      {
        "key": "transportModes",
        "name": "执行方案",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "transportModesMgmt",
        "name": "执行方案匹配策略管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
  {
    "key": "transportMonitor",
    "name": "运输监控方案",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "transportMonitor",
        "name": "运输监控方案",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "timeWindowMgmt",
    "name": "时间窗管理",
    "icon": "icon-dingdan",
    "value": "00",
    "child": [
      {
        "key": "holidayMgmt",
        "name": "节假日管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "timeWindow",
        "name": "时间窗管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "DateMgmt",
        "name": "日期管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
  {
    "key": "transportControl",
    "name": "物流控制塔",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "transportControl",
        "name": "物流控制塔",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "mainWayMgmt",
    "name": "主路线管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "mainWayMgmt",
        "name": "主路线管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "timelinessMgmt",
    "name": "时效管理",
    "icon": "icon-dingdan",
    "value": "00",
    "child": [
      {
        "key": "clientTimeliness",
        "name": "客户时效管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "providerTimeliness",
        "name": "供应商时效管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },*/
  {
    "key": "transportationDispatching",
    "name": "运输调度",
    "icon": "icon-dingdan",
    "value": "00",
    "child": [
      {
        "key": "dispatchMgmt",
        "name": "调度单管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "dispatchAcknowledgementMgmt",
        "name": "调度单回单影像管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "dispatchLocation",
        "name": "调度单位置日志",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
 /* {
    "key": "accidentCompensation",
    "name": "事故理赔",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "accidentCompensation",
        "name": "事故理赔",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "carrierQuotient",
    "name": "承运商份额及奖惩",
    "icon": "icon-dingdan",
    "value": "00",
    "child": [
      {
        "key": "rewardsAndPunishment",
        "name": "承运商奖惩记录",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "quotientLog",
        "name": "承运商份额日志",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "quotientMgmt",
        "name": "承运商份额管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
  {
    "key": "paymentManagement",
    "name": "计费管理",
    "icon": "icon-dingdan",
    "value": "00",
    "child": [
      {
        "key": "paymentType",
        "name": "计费类型管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "receivableMgmt",
        "name": "应收费用管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "accruedChargeMgmt",
        "name": "应付费用管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "receiptBillMgmt",
        "name": "应收账单管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "billsMgmt",
        "name": "应付账单管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
  {
    "key": "billMgmt",
    "name": "账单管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "billMgmt",
        "name": "账单管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "commodityMgmt",
    "name": "商品管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "commodityMgmt",
        "name": "商品管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "clientMgmt",
    "name": "客户管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "clientMgmt",
        "name": "客户管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "cargoOwnerMgmt",
    "name": "货主管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "cargoOwnerMgmt",
        "name": "货主管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "providerMgmt",
    "name": "供应商管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "providerMgmt",
        "name": "供应商管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "commonCarrierMgmt",
    "name": "承运商管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "commonCarrierMgmt",
        "name": "承运商管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "orderFormMgmt",
    "name": "订单管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "orderFormMgmt",
        "name": "订单管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "monitorMgmt",
    "name": "订单监控",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child": [
      {
        "key": "monitorMgmt",
        "name": "订单监控",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "monitorLog",
        "name": "订单日志",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },
  {
    "key": "modelMgmt",
    "name": "模型管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "modelMgmt",
        "name": "模型管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "organizationalMaintenance",
    "name": "组织维护",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "organizationalMaintenance",
        "name": "组织维护",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      }
    ]
  },
  {
    "key": "competenceMgmt",
    "name": "权限管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {"key": "competenceMgmt",
        "name": "权限管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",}
    ]
  },
  {
    "key": "ruleMgmt",
    "name": "规则管理",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child":[
      {
        "key": "ruleMgmt",
        "name": "规则管理",
        "icon": "icon-yunshupeisong",
        "value": "0000",
      },
    ]
  },
  {
    "key": "locationInfo",
    "name": "地理信息",
    "icon": "icon-yunshupeisong",
    "value": "00",
    "child": [
      {
        "key": "provinceMgmt",
        "name": "省份管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "cityMgmt",
        "name": "城市管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "countyMgmt",
        "name": "区县管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
      {
        "key": "carryingPlaceMgmt",
        "name": "运输地管理",
        "icon": "icon-wuliu",
        "value": "0000",
      },
    ]
  },*/
];

module.exports = menuList;
