/**
 * Created by hutao on 2017/11/15.
 */
export default{
  getThirtyDays
}
function getThirtyDays(){
  //返回三十天的日期数组
  var startDate = new Date();
  var endDate = new Date();
  endDate.setDate(startDate.getDate() + 30);
  var dataArr = [];
  var weeks = ['日', '一', '二', '三', '四', '五', '六'];
  while((endDate.getTime() - startDate.getTime()) >= 0) {
    var month = (startDate.getMonth() + 1).toString().length == 1 ? "0" + (startDate.getMonth() + 1).toString() : (startDate.getMonth() + 1);
    var day = startDate.getDate().toString().length == 1 ? "0" + startDate.getDate() : startDate.getDate();
    var week = weeks[startDate.getDay()];
    // dataArr.push(month + "." + day + '周' + week);
    dataArr.push({
      "week" : week,
      "date" : month + "." + day
    })
    startDate.setDate(startDate.getDate() + 1);
  }
  console.log(dataArr);
  return dataArr;
}
