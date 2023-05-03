
var baza1 = ["ხანდახან", "საყიდლებზე წასვლა","ფაბრიკა","მუზეუმი","school","banki","ჩამოსვლა","დარეკვა","გაკეთება","მოსმენა","წელი","ზოგი","ახლოს"];
var baza2 = ["ocasionally", "go shopping","factory","museum","სკოლა","ბანკი","arrive","call","make","hear","year","some","near"];
var answers = Math.floor(Math.random()*13);
var summ = baza1[answers];
document.write(summ);
 function shekitxva(){
    var x = document.getElementById("messige").value;
    let l = 0;
    if( x == baza2[answers]){
        rezultati.innerHTML = "სწორია ";
        rezultati.style.color="green";
        setTimeout(function(){
            window.location.reload();
         }, 1000);
        return;
         
    }
    if( x != summ){
        rezultati2.innerHTML = "პასუხი არასწორია სცადეთ კიდევ ერთხელ";
        rezultati2.style.color="red";
        setTimeout(function(){
            window.location.reload();
         }, 1000);
        
    }
}



