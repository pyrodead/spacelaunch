import axios from 'axios';

export const getLaunches = () => {
    axios.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed').then(response => response).catch(err => console.log(err));
};

export const getMoreLaunches = (offset) => {
    return axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=detailed&offset=${offset}`);
};

export const createDateAsUTC = (date) => {
    const monthNames = ["Jan.", "Frb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    const dateToConvert = new Date(date);
    const hours = dateToConvert.getUTCSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const ampm = (hours >= 12) ? "p.m." : "a.m.";

    return `${monthNames[dateToConvert.getUTCMonth()]} ${dateToConvert.getUTCDate()}, ${dateToConvert.getUTCFullYear()}, ${hours}:${dateToConvert.getUTCMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} ${ampm}`;
}


export const getNumberOfSlides = (isMobileMedium, isDesktop) => {
    if (isMobileMedium && isDesktop) {
        return 3;
    } else if (isMobileMedium) {
        return 2;
    }

    return 1;
}