import moment from "moment";

/**
 * Formats a date into a readable format or a relative format like "5 days ago".
 * @param date - The date to format, either as a string or a Date object.
 * @param isRelative - Whether to return a relative format (e.g., "5 days ago") instead of a full date.
 * @returns The formatted date string.
 */
export const formatDate = (date: string | Date, isRelative: boolean = false): string => {
  if (isRelative) {
    return moment(date).fromNow(); // Returns relative time (e.g., "2 hours ago")
  }
  return moment(date).format("MMMM D, YYYY"); // Returns formatted date (e.g., "September 27, 2024")
};
