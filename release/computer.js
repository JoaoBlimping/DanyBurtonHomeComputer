var DBHC;
(function (DBHC) {
    var HardDrive = (function () {
        function HardDrive(size) {
            if (typeof (Storage) !== "undefined") {
                this.temp = JSON.parse(localStorage.getItem("hardDrive"));
                if (this.temp == undefined) {
                    this.temp = new Uint16Array(size);
                }
            }
            else {
                console.log("I'm afraid loading won't be possible in this browser");
            }
        }
        HardDrive.prototype.writeToDrive = function (data, position) {
            this.temp[position] = data;
        };
        HardDrive.prototype.readFromDrive = function () {
        };
        return HardDrive;
    }());
    DBHC.HardDrive = HardDrive;
})(DBHC || (DBHC = {}));
var DBHC;
(function (DBHC) {
    var Screen = (function () {
        function Screen() {
        }
        return Screen;
    }());
    DBHC.Screen = Screen;
})(DBHC || (DBHC = {}));
var DBHC;
(function (DBHC) {
    function main() {
    }
    DBHC.main = main;
})(DBHC || (DBHC = {}));
//# sourceMappingURL=computer.js.map