// 여러 개의 기능이 들어있는 중첩 함수를 기능별로 나눠 만들기

$(document).ready(function(){
  // 탭메뉴 코드가 동작할 수 있도록 tabMenu() 함수 호출
  tabMenu('#tabMenu1');
  tabMenu('#tabMenu2');
});

function tabMenu(selector){
  var $tabMenu=null;
  var $menuItems=null;
  // 선택 한 탭메뉴를 저장할 변수
  var $selectMenuItem=null;

  // 요소 초기화, tabMenu() 함수 내부에서 사용할 공통 데이터는
  // 모두 이곳에 작성
  function init(selector){
    $tabMenu=$(selector);
    $menuItems=$tabMenu.find("li");
  }

  // 이벤트 등록은 모두 이곳에서 작성
  function initEvent(){
    // 메뉴 항목에 클릭 이벤트 등록
    $menuItems.click(function(){
      setSelectItem($(this));
    });

  }

  // 선택 메뉴 아이템 만들기
  function setSelectItem($item){
    // 기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기
    if($selectMenuItem) $selectMenuItem.removeClass("select");

    // 클릭한 메뉴 항목을 신규 선택 메뉴 항목으로 저장
    $selectMenuItem=$item;
    // 선택 상태로 만들기
    $selectMenuItem.addClass("select");
  }

  init(selector);
  initEvent();
}