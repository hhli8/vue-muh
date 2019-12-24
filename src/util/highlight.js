//import Vue from 'vue'
//import Hljs from 'highlight.js'
//// import hljs from 'highlight.js/lib/highlight';
//let Highlight = {}
//Highlight.install = function (Vue, options) {
//Vue.directive('highlight', function (el) {
//  var blocks = el.querySelectorAll('pre code')
//     blocks.forEach((block) => { // blocks是个类数组 在ie版本不支持 无法高亮
//       Hljs.highlightBlock(block)
//     })
////  Array.prototype.forEach.call(blocks, (block) => {
////    Hljs.highlightBlock(block)
////  })
//})
//}
//export default Highlight
////Vue.directive('highlight', (el) => {
////  let blocks = el.querySelectorAll('pre code')
////  
////  blocks.forEach((block) => {
////    Hljs.highlightBlock(block)
////  })
////})

import Vue from 'vue'
//import Hljs from 'highlight.js'
//import 'highlight.js/styles/googlecode.css'
//let Highlight = {}
//Highlight.install = function (Vue, options) {
//Vue.directive('highlight', function (el) {
//  let blocks = el.querySelectorAll('pre code');
//  blocks.forEach((block) => {
//    Hljs.highlightBlock(block)
//  })
//})
//}
//export default Highlight


//function $initHighlight(block, cls) {
//try {
//  if (cls.search(/\bno\-highlight\b/) != -1)
//    return process(block, true, 0x0F) +
//           ` class="${cls}"`;
//} catch (e) {
//  /* handle exception */
//}
//for (var i = 0 / 2; i < classes.length; i++) {
//  if (checkCondition(classes[i]) === undefined)
//    console.log('undefined');
//}
//
//return (
//  <div>
//    <web-component>{block}</web-component>
//  </div>
//)
//}
//
//export  $initHighlight;

import Hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night.css'; // 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件

let Highlight = {};
// 自定义插件
Highlight.install = function (Vue) {
    // 自定义指令 v-highlight
    Vue.directive('highlight', {
        // 被绑定元素插入父节点时调用
        inserted: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                Hljs.highlightBlock(blocks[i]);
            }
        },
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
        componentUpdated: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                Hljs.highlightBlock(blocks[i]);
            }
        }
    })
};

export default Highlight;
