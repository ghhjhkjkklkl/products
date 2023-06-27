export default function (string) {
  return string
    .split(" ")
    .reduce(
      (acc, str) => (acc += str[0].toUpperCase() + str.slice(1) + " "),
      ""
    );
}
