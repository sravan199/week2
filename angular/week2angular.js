;
var Student = /** @class */ (function () {
    function Student(options) {
        for (var i = 0; i < options.length; i++) {
            this.year = options[i].year;
            console.log(options[i].firstName + " " + options[i].lastName + "  " + options[i].id +
                "          " + options[i].section + "          " + this.issenior());
        }
    }
    Student.prototype.issenior = function () {
        if (this.year >= 2)
            return ("senior.");
        else
            return ("junior.");
    };
    return Student;
}());
console.log(" Name              Id         section         senior/junior");
var stdd = [{ firstName: 'sravan', lastName: 'guduru', id: 2210415417, section: 2, year: 2 },
    { firstName: 'Rahul', lastName: 'lagitty', id: 2210415411, section: 2, year: 1 },
    { firstName: 'sricaran', lastName: 'Gana', id: 2210415430, section: 1, year: 2 }];
var stdobj = new Student(stdd);
stdobj.issenior();
