
/**
 * Tìm hiểu về  this và this nâng cao ~ this improvement 
 * 
 * @start This
 */

class DepartmentByThis {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    /**
     * Chuyền This vào function 
     * 
     * @param this { Department } Đây là một tham số đặc biệt
     */
    describe(this: DepartmentByThis) {
        console.log('This name: ', this.name)
    }
}

const accounting = new DepartmentByThis("Accounting");
accounting.describe()

// Tận dụng lại biến 
const accountingCopy = { name: 'Accouting copy', describe: accounting.describe }
accountingCopy.describe();

 /**
  * @end This
  */
