// 버튼을 10번 클릭하면 "완료되었습니다."라는 메시지를 콜백 함수를 이용해서 분리

/*
$(document).ready(function(){
 checkCount();
 });

 function checkCount(){
   var count= 0;
   $('#btnStart"').click(function(){
     count++;
     if(count>=10) alert("완료되었습니다.");
   })
 }
*/

$(document).ready(function(){
  checkCount(showMessage);
});

function showMessage(){
  alert("완료되었습니다.");
}

function checkCount(callback){
  var count=0;
  $('#btnStart').click(function(){
    count++;
    if(count>=10) callback();
  })
}