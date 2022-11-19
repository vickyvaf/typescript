"use strict";
// Enum
// Numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 100] = "FEB";
    Month[Month["MAR"] = 101] = "MAR";
    Month[Month["APR"] = 102] = "APR";
    Month[Month["MAY"] = 103] = "MAY";
})(Month || (Month = {}));
console.log(Month.MAY);
// String enums
var Day;
(function (Day) {
    Day["SUN"] = "sunday";
    Day["MON"] = "monday";
    Day["TUE"] = "tuesday";
    Day["WED"] = "wednesday";
})(Day || (Day = {}));
console.log(Day.SUN);
