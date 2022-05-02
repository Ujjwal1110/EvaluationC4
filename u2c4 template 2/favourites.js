// write js code here corresponding to favourites.html

var emptyArr=JSON.parse(localStorage.getItem("favourites"));
displayData(emptyArr);

function displayData(data){
data.forEach(function(elem){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
      td1.innerText=elem.mplNumber;
    var td2=document.createElement("td");
    td2.innerText=elem.mplTeam1;
    var td3=document.createElement("td");
    td3.innerText=elem.mplTeam2;
    var td4=document.createElement("td");
    td4.innerText=elem.mplDate;
    var td5=document.createElement("td");
    td5.innerText=elem.mplPlace;

    var td6=document.createElement("td")
    td6.innerText="Delete";
    td6.setAttribute("class","deleteText");
    td6.addEventListener("click", function(){
        deleteItem(elem, index);
    });
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
 });
}

function deleteItem(elem, index){
    emptyArr.splice(index, 1)
    localStorage.setItem("favourites", JSON.stringify(emptyArr));
    window.location.reload();
}