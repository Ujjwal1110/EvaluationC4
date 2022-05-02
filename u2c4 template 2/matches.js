// write js code here corresponding to matches.html

var mplArr=JSON.parse(localStorage.getItem("schedule"));

displayData(mplArr);
function handleFilter(){
    var selected=document.getElementById("#filterVenue").value;
    var filteredList= mplArr.filter(function(elem){
        return elem.mplPlace == selected;
    })
    displayData(filteredList);
}


var emptyArr=JSON.parse(localStorage.getItem("favourites")) || []; 

function displayData(data){
    document.querySelector("tbody").innerHTML=""
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
    td6.innerText="Favourites";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click", function(){
    favouritesFunction(elem);
    });
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
});
}

function favouritesFunction(elem){
    emptyArr.push(elem)
    console.log(emptyArr)
    localStorage.setItem("favourites",JSON.stringify(emptyArr))
}
