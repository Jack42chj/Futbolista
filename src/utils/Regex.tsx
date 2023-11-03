const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=`-])(?=.*[0-9]).{8,25}$/;
const nameRegex =  /^[가-힣]{2,4}$/;

//한글 이름 확인 정규식 성립시: true
export const checkName = (name: string) => {
    if(!nameRegex.test(name)) return false;
    return true;
}
//비밀번호 확인 정규식 성립시: true
export const checkPassword = (passwd: string) => {
    if(!passwordRegex.test(passwd)) return false;
    return true;
};