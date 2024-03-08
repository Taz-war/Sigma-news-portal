export function getCurrentDate(): string {
    const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const currentDate: Date = new Date();
    const day: number = currentDate.getDay();
    const month: number = currentDate.getMonth();
    const date: number = currentDate.getDate();
    const year: number = currentDate.getFullYear();

    const currentDay: string = days[day];
    const currentMonth: string = months[month];

    return ` ${currentDay}, ${currentMonth} ${date}, ${year}.`;
}

// console.log(getCurrentDate());
