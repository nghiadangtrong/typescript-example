/**
 * Singletons
 *      - Đây là một Design Pattern
 *      - Áp dụng khi muốn tạo một instance duy nhất
 */
class AccountingDerartent extends Department {
    private static instance : AccountingDerartent;

    // Private không cho khởi tạo bằng instance bằng new 
    private constructor(protected name: string) {
        super();
    }

    describe(value: string) { 
        console.log(value)
    }

    // connec instance
    static getInstance() {
        if(AccountingDerartent.instance) {
            return this.instance;
        }
        this.instance = new AccountingDerartent('singletons');
        return this.instance;
    }
}

const accountingInstance = AccountingDerartent.getInstance();

console.log("Accountin Instance", accountingInstance.describe('123232'))