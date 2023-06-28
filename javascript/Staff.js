import staffs from '../json/staffs.json' assert {type: 'json'};
class Staff {
    static staffs;
    constructor() {
        this.staffs = staffs;
    }
}
export default Staff;