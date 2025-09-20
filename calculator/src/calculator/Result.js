function Result({ value }) {
  if (value !== null)
    return <div classsName="Result"> Výsledok je: {value}</div>;
  return null;
}
export default Result;
