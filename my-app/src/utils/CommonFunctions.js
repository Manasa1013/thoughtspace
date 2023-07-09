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
    return differenceForMinutes > 1 ? "few minutes ago" : "1 minute ago";
  else if (differenceForSeconds > 0)
    return differenceForSeconds > 1 ? "few seconds ago" : "1 second ago";
  else return "Just now";
}

export function getTrimmed(sentence, n) {
  let sentenceArr = sentence.split(" ");
  return sentenceArr.slice(0, n + 1).join(" ");
}

export function getActiveClassName(isActive, isPending) {
  return isPending
    ? "pending p-4 md:py-2 md:px-1 w-full md:w-auto"
    : isActive
    ? "font-bold text-slate-100 p-4 md:py-2 md:px-1 bg-teal-600/100 w-full md:w-auto md:bg-inherit md:text-teal-700"
    : "text-gray-700 p-4 md:py-2 md:px-1 w-full md:w-auto md:bg-inherit";
}

//validates the fields in forms
export function validateFields(
  regexPattern,
  fieldName,
  errorName,
  errorText,
  errorField,
  setErrorField
) {
  let errorFieldName = Object.keys(errorField).find(
    (item) => item === errorName
  );
  if (regexPattern.test(fieldName)) {
    // console.log("pattern matched", errorFieldName);
    setErrorField((prev) => {
      return { ...prev, [errorFieldName]: "" };
    });
  } else {
    // console.log("pattern not matched", errorFieldName);
    setErrorField((prev) => {
      // console.log(errorName, errorText, "printing at line 34");
      return { ...prev, [errorFieldName]: errorText };
    });
  }
}
