const Days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
const Type = ["AlleDagen", "WerkDagen","Weekenden","AlleDagenReversed", "WerkDagenReversed", "WeekendReversed"];

function DaysOfTheWeek(type)
{
   if(type == "AlleDagen"){ document.getElementById("AlleDagen").innerHTML = Days; }
   else if(type == "WerkDagen"){document.getElementById("WerkDagen").innerHTML = Days.slice(0,5); }
   else if (type == "Weekenden"){document.getElementById("Weekenden").innerHTML = Days.slice(5,7); }
   else if(type == "AlleDagenReversed"){document.getElementById("AlleDagenReversed").innerHTML = Days.reverse(); }
   else if (type == "WerkDagenReversed"){document.getElementById("WerkDagenReversed").innerHTML = Days.slice(2,7); }
   else if (type == "WeekendReversed"){document.getElementById("WeekendReversed").innerHTML = Days.slice(0,2); }
}
Type.forEach(element => {
   DaysOfTheWeek(element)
});