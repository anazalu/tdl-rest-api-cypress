const dateObject: Date = new Date(Date.now());

const year: number = dateObject.getFullYear();
const month: string = ('0' + (dateObject.getMonth() + 1)).slice(-2);
const day: string = ('0' + dateObject.getDate()).slice(-2);
const hours: string = ('0' + dateObject.getHours()).slice(-2);
const minutes: string = ('0' + dateObject.getMinutes()).slice(-2);
const seconds: string = ('0' + dateObject.getSeconds()).slice(-2);

const formattedDate: string = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

export default formattedDate;
