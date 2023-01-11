export default function aaa() {
  //   const aaa = [<div>철수</div>, <div>영희</div>, <div>훈이</div>];

  const aaa = ["철수", "영희", "훈이"].map((el) => <div>{el}</div>);
  return <>{aaa}</>;
}
