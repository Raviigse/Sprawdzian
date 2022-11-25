function obliczanie(){
    let liczba1=document.getElementById("LICZBA1").value;
    LICZBAbinarna="";
    wynik="";
    while(liczba1>0){
        reszta=liczba1%2
        wynik=wynik+reszta
        liczba1=Math.floor(liczba1/2)
        
    }
    document.getElementById("wynik").value=wynik;



}
