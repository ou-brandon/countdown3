export const createImageLink = (value) => {
    const imageLink = 'http://openweathermap.org/img/wn/'
    const imageEnd = '@2x.png'
    return imageLink + value + imageEnd;
}

export const kToF = (temp) => {
    return (((9.0/5.0) * (parseFloat(temp) - 273.15)) + 32).toFixed(1);
}

export const toUpper = (phrase) => {
    return phrase.split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
}

export const removeYear = (dateString) => {
    const len = dateString.split(' ').length;
    return dateString.split(' ').slice(0, len-1).join(' ');
}

export const removeSec = (timeString) => {
    const AMPM = timeString.split(' ')[1];
    const len = timeString.split(':').length;
    return timeString.split(':').slice(0, len-1).join(':') + ' ' + AMPM;
}