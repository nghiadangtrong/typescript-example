

//  "strictNullChecks": true,         Yêu cầu kiểm tra null trước khi handle 
function upercaseFirstLetter(str: string | null): string {
    if (str === null) {
        return "";
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

