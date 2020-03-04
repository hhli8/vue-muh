export default [
  // 三级
  {
    name: '浙江省',
    code: 1001,
    children: [
      { name: '杭州市', code: 10011, children: [
        { name: '上城区', code: 100111 },
        { name: '下城区', code: 100112 },
        { name: '滨江区', code: 100113 }
      ] },
      { name: '金华市', code: 10012, children: [
        { name: '婺城区', code: 100121 },
        { name: '义乌市', code: 100122 },
        { name: '金东区', code: 100123 }
      ] },
      { name: '宁波市', code: 10013, children: [
        { name: '海曙区', code: 100131 },
        { name: '江东区', code: 100132 },
        { name: '江北区', code: 100133 }
      ] }
    ]
  },
  // 四级
  {
    name: '江苏省',
    code: 1002,
    children: [
      { name: '南京市', code: 10021, children: [
        { name: '玄武区', code: 100211 },
        { name: '青龙区', code: 100212 },
        { name: '白虎区', code: 100213 }
      ] },
      { name: '盐城市', code: 10022, children: [
        { name: '亭湖区', code: 100221 },
        { name: '大丰市', code: 100222 },
        { name: '东台市', code: 100223, children: [
          { name: '新街镇', code: 1002231 },
          { name: '唐洋镇', code: 1002232 },
          { name: '梁垛镇', code: 1002233 },
          { name: '弶港镇', code: 1002234 },
          { name: '三仓镇', code: 1002235 },
          { name: '头灶镇', code: 1002236 },
          { name: '富安镇', code: 1002237 },
          { name: '南沈灶镇', code: 1002238 }
        ] },
        { name: '响水县', code: 100224 },
        { name: '射阳县', code: 100225 },
        { name: '阜宁县', code: 100226 },
        { name: '盐都区', code: 100227 },
        { name: '滨海县', code: 100228 }
      ] },
      { name: '苏州市', code: 10023, children: [
        { name: '姑苏区', code: 100231 },
        { name: '虎丘区', code: 100232 },
        { name: '吴中区', code: 100233 }
      ] }
    ]
  },
  // 二级
  {
    name: '上海市',
    code: 1003,
    children: [
      { name: '黄浦区1', code: 10031 },
      { name: '黄浦区2', code: 10032 },
      { name: '黄浦区3', code: 10033 },
      { name: '黄浦区4', code: 10034 },
      { name: '黄浦区5', code: 10035 },
      { name: '黄浦区6', code: 10036 },
      { name: '黄浦区7', code: 10037 },
      { name: '黄浦区8', code: 10038 }
    ]
  },
  // 一级
  {
    name: '台湾省',
    code: 1004
  },
  {
    name: '山西省',
    code: 1005
  },
  {
    name: '江西省',
    code: 1006,
    children: [
      { name: '黄浦区1', code: 10031 },
      { name: '黄浦区2', code: 10032 },
      { name: '黄浦区3', code: 10033 },
      { name: '黄浦区4', code: 10034 },
      { name: '黄浦区5', code: 10035 },
      { name: '黄浦区6', code: 10036 },
      { name: '黄浦区7', code: 10037 },
      { name: '黄浦区8', code: 10038 }
    ]
  },
  {
    name: '山西省',
    code: 1005
  },
  {
    name: '江西省',
    code: 1006
  },
  {
    name: '山西省',
    code: 1005
  },
  {
    name: '江西省',
    code: 1006
  },
  {
    name: '山西省',
    code: 1005
  },
  {
    name: '江西省',
    code: 1006
  }
]
