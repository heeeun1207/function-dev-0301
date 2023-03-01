
// 첫번째방법 : 스타일지정하고 , 한번더 함수로 묶는다.
let root = document.getElementById('root');
function rootBox(rootwith, rootHeight, rootpoistion, rootbackgroundcolor) {
root.style.width = rootwith;
root.style.height = rootHeight;
root.style.position = rootpoistion;
root.style.backgroundColor =rootbackgroundcolor;
}
rootBox("430px", "932px", "absolute", "#1E1E1E");


// 두번째방법 : 스타일을 지정 각각 해주기. 
// let root = document.getElementById('root');
// root.style.width="430px";
// root.style.height= "932px ";
// root.style.position="absolute";
// root.style.backgroundColor = "#1E1E1E";  // 색쓸때 # 잊지마.


//root의 자식인 div 4구역을 만들자 
for(let i = 0; i<4; i++) {
let makeDiv =document.createElement('div');
// makeDiv.textContent= i + "번째 root의 자식";//구분목적
root.appendChild(makeDiv);



// 세번째방법: div의 스타일을 cssText 로 묶어서 한번에 지정한다 .   
if(i===0) {  
makeDiv.style.cssText =
"width:147px; height:29px; font-size: 24px; position:absolute; left:141px; top:301px "
makeDiv.textContent =
"Lorem Ipsum"
} 
else if(i === 1){ // bar style 지정시, border는나와서 1px로 줌. 
makeDiv.style.cssText =
"border:1px solid white; width:199px; position:absolute; left: 115px; top:340px; " 
}
else if (i=== 2){   // 본문부분 
makeDiv.style.cssText =
"width=295px; height:186px; position:absolute; left:67px; top:364px; right:68px; font-size:12px; text-align:justify"
makeDiv.textContent =
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
else{  // 동그라미 4번째 div 
makeDiv.style.cssText =
"width:82px; height:82px; background-color:white; border-radius: 41px; margin-top:673px;margin-left:174px "
}
}