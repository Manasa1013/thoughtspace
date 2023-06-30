export function getDateText(createdAt) {
  let difference = new Date().getTime() - Date.parse(createdAt);
  let differenceForWeeks = (difference / (7 * 24 * 60 * 60 * 1000)) | 0;
  let differenceForDays = (difference / (24 * 60 * 60 * 1000)) | 0;
  let differenceForHours = (difference / (60 * 60 * 1000)) | 0;
  let differenceForMinutes = (difference / (60 * 1000)) | 0;
  let differenceForSeconds = (difference / 1000) | 0;
  if (differenceForWeeks > 0)
    return differenceForWeeks > 1 ? "few weeks ago" : " 1 week ago";
  else if (differenceForDays > 0 && differenceForDays < 7)
    return differenceForDays > 1 ? "few days ago" : "1 day ago";
  else if (differenceForHours > 0)
    return differenceForHours > 1 ? "few hours ago" : "1 hour ago";
  else if (differenceForMinutes > 0)
    return differenceForMinutes > 1 ? "few minutes ago" : "1 minute agp";
  else if (differenceForSeconds > 0)
    return differenceForSeconds > 1 ? "few seconds ago" : "1 second ago";
  else return "Just now";
}

export function getTrimmed(sentence, n) {
  let sentenceArr = sentence.split(" ");
  return sentenceArr.slice(0, n + 1).join(" ");
}
