function birthday() {
    month = document.form.month.selectedIndex;
    month = document.form.month.options[month].value;
    day = document.form.day.selectedIndex;
    day = document.form.day.options[day].value;
    year = document.form.year.value;
    var date = month + " " + day + ", " + year;
    var then = new Date(date);
    var theday = then.getDay()+1;
    var date=then.getDate();
    var year=then.getYear();
    if (year<100) year="19" + then.getYear();
    else year=then.getYear();
    var weekday = new Array(6);
    weekday[1]="Kwasi";
    weekday[2]="Kwadwo";
    weekday[3]="Kwabena";
    weekday[4]="Kwaku";
    weekday[5]="Yaw";
    weekday[6]="Kofi";
    weekday[7]="Kwame";
    if (day != date) alert("Sorry!  That appears to be an invalid date!");
    else {
    dayborn = weekday[theday];
    date = dayborn + ", " + month + " " + date ;
    alert("Your Akan name is " +  date);
       }
    }
