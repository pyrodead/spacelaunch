import axios from 'axios';

export const getUpcomingLaunches = () => {
    return axios.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed');
};

export const getMoreLaunches = (offset) => {
    return axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=detailed&offset=${offset}`);
};

export const getRecentEvents = () => {
    return axios.get('https://spacelaunchnow.me/api/3.3.0/event/upcoming/');
};

export const createDateAsUTC = (date) => {
    const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    const dateToConvert = new Date(date);
    const hours = dateToConvert.getUTCSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const ampm = (hours >= 12) ? "p.m." : "a.m.";

    return `${monthNames[dateToConvert.getUTCMonth()]} ${dateToConvert.getUTCDate()}, ${dateToConvert.getUTCFullYear()}, ${hours}:${dateToConvert.getUTCMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} ${ampm}`;
};