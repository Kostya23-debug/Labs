import { DateTime } from "luxon";

function daysUntilNewYear() {
    const now = DateTime.now();
    const nextYear = DateTime.local(now.year + 1, 1, 1);
    const diff = nextYear.diff(now, 'days').days;
    console.log(`До нового года осталось ${Math.floor(diff)} дней.`);
}

daysUntilNewYear();