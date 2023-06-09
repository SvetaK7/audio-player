const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const toMinEndSec = (duration) => {
    const minutes = formatTime(Math.floor(duration / 60));
    const seconds = formatTime(Math.floor(duration - minutes*60));
    return `${minutes}:${seconds}`
}