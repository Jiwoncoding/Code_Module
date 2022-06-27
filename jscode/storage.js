var storage = localStorage;
storage.setItem('fruit1','사과');
storage.fruit2 = '귤';
storage['fruit3'] = '포도';
console.log(storage.getItem('fruit1')); // 사과
console.log(storage.fruit2); // 귤
console.log(storage['fruit3']); // 포도

// Local Storage vs Session Storage
// Local Storage : 오리진 단위로 데이터를 관리, 브라우저를 닫더라도 데이터는 유지된다.
// Session Storage : 현재 세션에서만 유지되는 데이터를 관리

// 기존 데이터 삭제하기 다음 세줄의 코드는 모두 같다. 
storage.removeItem('fruit1');
delete storage.fruit1;
delete storage['fruit1'];

// 무조건적으로 모든 데이터를 삭제하고자 한다면 clear 메소드 사용
storage.clear();

// 스토리지로부터 모든 데이터 추출하기
var storage = localStorage;
for(var i=0, len=storage.length; i<len; i++){
  var k=storage.key(i);
  var v=storage[k];
  console.log(k+':'+v);
}

// 스토리지에 객체 보관/취득하기
var storage = localStorage;
var apple = {name:'사과', price:150, made:'아오모리'};
// 객체를 복원할 수 있는 문자열로 변환하는 것은 JSON.stringify 메소드의 역할
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name); // 사과
