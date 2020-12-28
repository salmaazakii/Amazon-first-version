   // $("#langbtn").dropdown('toggle');
   function showMenu() {
    $("#langbtn").dropdown('show');
   
  }
  function hideMenu() {
    console.log("event")
    $("#langbtn").dropdown('hide');
  }
  function closeSideBar(){
  document.querySelector("#sideBar").style.display="none"
}
function showSide(){
document.querySelector("#sideBar").style.display="block"
}
// handle show more and less in side bar 
var list = document.querySelectorAll(".seeAll");
function initDisplayItem(obj){
console.log("event")
console.log(obj.getAttribute("data-value"))
switch(obj.getAttribute("data-value")){
case 0 :obj.style.display="none" ;

}
}
function toggleDisplayItem(obj){

console.log(list)
var firEleDisp = list[0].style.display; 
var secEleDisp = list[1].style.display; 
console.log(firEleDisp)
console.log(secEleDisp)
if(firEleDisp === "" || firEleDisp=== "none")list[0].style.display="block" ;
if(secEleDisp === "" || secEleDisp=== "none")list[1].style.display="block" ;

obj.style.display = "none";
}