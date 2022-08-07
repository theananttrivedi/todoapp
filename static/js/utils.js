function formatDate(dateString) {
  if (dateString === "" || dateString === null || dateString === undefined)
    return "";
  const date = new Date(dateString);
  if (String(date.valueOf()) === NaN) return "";
  return (
    date.getDate() + " " + date.toLocaleString("default", { month: "long" })
  );
}
