//********
export var apwbBridge = (type, params, cfn = function () {}) => {
  let wbB = window.WebViewJavascriptBridge
  // alert(wbB)
  if (!wbB) {
    setTimeout(() => {
      wbB = window.WebViewJavascriptBridge
      // alert(wbB)
      wbB && wbB.callHandler(type, params, cfn)
    }, 0)
  } else {
    wbB.callHandler(type, params, cfn)
  }
}

//********设置手机状态栏字体的颜色native，以及背景色css
export var setStatusBarStyle = (target) => {
  var ua = navigator.userAgent
  let version = null
  if (ua.indexOf('ndroid') > 0) {
    let reg = /android [\d._]+/gi
    let info = ua.match(reg)
    version = (info + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.') // 得到版本号x.x.x
    version = parseInt(version.split('.')[0]) // 得到版本号第一位
  }
  var style = ''
  if (version < 6 && ua.indexOf('ndroid') > 0) {
    // 黑色背景，白色字体
    style = 1
    target.className = target.className + ' black'
  } else {
    // 白色背景,黑色字体
    style = 2
  }
  apwbBridge('setStatusBarStyle', { style: style }, (res) => {})
}

//********直接修改状态栏字体颜色, f=白色 b=黑色
export var setSBcolor = (style) => {
  apwbBridge('setStatusBarStyle', { style: style === 'f' ? 1 : 2 }, (res) => {})
}


//********
export var setDemo = () => {
  console.log(99996666)
}
