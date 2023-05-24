export const formatDate = (dateString) => {
    const dateParts = dateString.split(' ');

    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[3];

    const date = new Date(`${month} ${day}, ${year}`);

    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    return formattedDate;
}