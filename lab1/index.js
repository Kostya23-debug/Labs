function NewYear() {
    const now = new Date();  //текущая дата и время
    const nextYear = now.getFullYear() + 1;  //след год
    const newYear = new Date(nextYear, 0, 1); //1 Января след года
    const msPerDay = 24 * 60 * 60 * 1000;  //количество миллисекунд в сутках
    const msPerHour = 60 * 60 * 1000;  //количество миллисекунд в часах
    const timeLeft = newYear - now;
    const daysLeft = Math.floor(timeLeft / msPerDay); //количество дней
    const hoursLeft = Math.floor((timeLeft % msPerDay) / msPerHour); //количество часов

    console.log(`До Нового года осталось ${daysLeft} дней и ${hoursLeft} часов.`);
}

NewYear();