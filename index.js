function birthday() {
   gender = document.form.selectedIndex
    month = document.form.month.selectedIndex;
    day = document.form.day.selectedIndex;
    year = document.form.year.value;
    var date = month + " " + day + ", " + year;
    var then = new Date(date);
    var theday = then.getDay()+1;
    var date=then.getDate();
    var year=then.getYear();
    if (year<100) year="19" + then.getYear();
    else year=then.getYear();
    var akan = new Array;
    akan[1]="Kwasi";
    akan[2]="Kwadwo";
    akan[3]="Kwabena";
    akan[4]="Kwaku";
    akan[5]="Yaw";
    akan[6]="Kofi";
    akan[7]="Kwame";
    if (day != date) alert("Sorry! You have entered an invalid date!");
    else {
    dayborn = akan[theday];
    date = dayborn + ", " + month + " " + date ;
    alert("Your Akan name is " +  date);
       }
    }
