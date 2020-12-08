interface DongVatTrenCan {
    readonly type: string;
    outName?: string;
    move(s: string): void
}

interface LinhTruong extends DongVatTrenCan{
    smart: number;
    setSmart(smart: number) : void;
}

/**
 * - Đảm bảo class phải có thên thuộc tính hoặc phương thức
 */ 
class ConNguoi implements LinhTruong {
    type: string;
    smart: number;

    constructor(private name?: string) {
        this.type = 'no fly'
        this.smart = 10;
    }

    move(s: string) {
        console.log("Call method inherit on interface");
    }

    setSmart(smart: number) {
        this.smart = smart;
    }
} 

const noan2 = new ConNguoi('noan')
noan2.move('by foot');
noan2.type = '32131'


//////////////////////////////////////////////////////////////////////////////////
///                     Declare Interface | Type cho function
//////////////////////////////////////////////////////////////////////////////////

type addFc = (n1: number, n2: number) => number;
interface  ShowString {
    (s1: string): void
}

let add: addFc;
add = (n1: number, n2: number) => n1+n2;

let show: ShowString;
show = (s: string) => s;

// flexi
interface ErrorBounding {
    [prop: string]: string
}