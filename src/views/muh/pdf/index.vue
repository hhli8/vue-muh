<template>
  <div>
    <p style="text-align: center;padding: 20px 0;font-size: 40px;">this is html && pdf</p>
    <div>
      <!-- https://blog.csdn.net/weixin_39539270/article/details/81388115?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task  -->
      <button @click="merge">合成</button>
    </div>
    <div>
      http://www.51purse.com/pdf/web/b.pdf
    </div>
    <div id="capture" style="padding: 10px; background: #f5da55">
      <h4 style="color: #000; ">Hello world!</h4>
      <div>
        啊实打实大asdasd
        <div class="title">kklaskldksas ?</div>
        <div class="contnte">阿斯达阿斯达啊孙菲菲阿斯达<br />asdadasdasdasd<br />asdasdassa<br /><br /><br /><br /><br />999</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
export default {
  methods: {
    merge () {
//    html2canvas(document.querySelector("#capture")).then(canvas => {
//      // document.body.appendChild(canvas)
//      let doc = new jsPDF()
//      doc.text('您输入的300与正确值相差0~10%', 10, 10) //文本
//      doc.text('Hello world!', 10, 20)
//      doc.text('Hello world!', 10, 30)
//      doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 10, 40, 200 , 100)
//
//      // doc.addFont('Dengb.ttf', 'NotoSansCJKjp', 'normal')
//      // doc.setFont('NotoSansCJKjp')
//      doc.text(15, 250, '您输入的300与正确值相差0~10%')
//      let paragraph = '您输入的300与正确值相差0~10%您输入的300与正确值相差0~10%您输入的300与正确值相差0~10%'
//      let lines = doc.splitTextToSize(paragraph, 150)
//      doc.text(15, 300, lines)
//      doc.save('a4.pdf')
//    })
      /* html2canvas(document.body, {
        onrendered: (canvas) => {
          var contentWidth = canvas.width
          var contentHeight = canvas.height
          var pageHeight = contentWidth / 592.28 * 841.89
          var leftHeight = contentHeight
          var position = 0
          var imgWidth = 595.28
          var imgHeight = 592.28/contentWidth * contentHeight
          var pageData = canvas.toDataURL('image/jpeg', 1.0)
          var pdf = new jsPDF('', 'pt', 'a4')
          if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight )
          } else {
            while(leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight;
              position -= 841.89;
              //避免添加空白页
              if(leftHeight > 0) {
                  pdf.addPage();
              }
            }
          }
          pdf.save('content.pdf')
        }
      }) */
     
      
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        var contentWidth = canvas.width
        var contentHeight = canvas.height
        var pageHeight = contentWidth / 592.28 * 841.89
        var leftHeight = contentHeight
        var position = 0
        var imgWidth = 595.28
        var imgHeight = 592.28/contentWidth * contentHeight
        var pageData = canvas.toDataURL('image/jpeg', 1.0)
        var pdf = new jsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight )
        } else {
          while(leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if(leftHeight > 0) {
                pdf.addPage();
            }
          }
        }
        // pdf.save('content.pdf')
        var datauri = pdf.output('dataurlstring')
        var base64 = datauri.substring(28)
        console.log(base64)
      })
      //
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.title {
  font-size: 20px;
  color: red;
}
.contnte {
  font-size: 28px;
  color: yellow;
}
</style>
