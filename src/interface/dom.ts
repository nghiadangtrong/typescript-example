/**
 * TODO: Mix Dom
 */

const inputName = <HTMLInputElement>document.getElementById('input-name')!; 
inputName.value = 'vui long nhap ten';

const inputPassowrd = document.getElementById('input-password')! as HTMLInputElement;
inputPassowrd.value = 'vui long nhap password'

const inputUser = document.getElementById('input-user');
if(inputUser) {
    (inputUser as HTMLInputElement).value = 'input user';
}

