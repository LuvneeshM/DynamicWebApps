var name = "Luvneesh";
console.log(name);

function foo(arg1) {
	return (arg1 + 2) - 5;
}

console.log("Foo of 9 is " + foo(9));

for (var i = 0; i < 10; i++) {
	console.log (i+1);
}

function ageMe(b_year){
	var fut_year = 2099;
	var age_1 = fut_year - b_year;
	var age_2 = fut_year - b_year + 1;
	console.log ("I will be either " + age_1 + " or " + age_2 + " in " + b_year);

}