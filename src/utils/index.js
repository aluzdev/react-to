export const formatDateAndTimeAgo = (dateString) => {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - inputDate;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  // Calculate the difference in days, hours, and minutes
  const daysAgo = Math.floor(timeDifference / day);
  const hoursAgo = Math.floor((timeDifference % day) / hour);
  const minutesAgo = Math.floor((timeDifference % hour) / minute);

  // Format the date
  const month = inputDate.toLocaleString("en-US", { month: "short" });
  const dayOfMonth = inputDate.getDate();
  const formattedDate = `${month} ${dayOfMonth}`;

  // Create the output string
  let output = `${formattedDate} - `;

  if (daysAgo > 0) {
    output += `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  } else if (hoursAgo > 0) {
    output += `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  } else {
    output += `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  }

  return output;
};
