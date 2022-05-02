// write js code here corresponding to index.html
// You should add submit event on the form

    document.querySelector("#masaiForm").addEventListener("submit", mplSubmit)
     var mplArr=JSON.parse(localStorage.getItem("schedule")) || [];
   
     function mplSubmit(){
         event.preventDefault();

         var mplObj={
             mplNumber:document.querySelector("#matchNum").value,
             mplTeam1:masaiForm.teamA.value,
             mplTeam2:masaiForm.teamB.value,
             mplDate:masaiForm.date.value,
             mplPlace:masaiForm.venue.value,
         };

         mplArr.push(mplObj);
         console.log(mplArr)
         localStorage.setItem("schedule",JSON.stringify(mplArr));
         window.location.href="matches.html";
     }