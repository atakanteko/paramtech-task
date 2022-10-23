export function transformDate({ day, year } = { day: "", year: "" }) {
    return year !== "" ? `${day}/${year}` : day;
}

export function transformCardNumber(number = "") {
    return number
        .replace(/ /g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
}

export function transformCvv(cvv = "") {
    return cvv.replace(/\d/g, "*");
}