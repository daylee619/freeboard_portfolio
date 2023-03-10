import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// interface IPrevState {
//   count: number;
// }
export default function ClassConuterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("그려지고 나서 실행!");
  }, []);

  useEffect(() => {
    console.log("변경되고 나서 실행!");
  });

  useEffect(() => {
    return () => {
      console.log("사라질 때 실행");
    };
  }, []);

  // 1. 하나로 합치기 가능
  // useEffect(() => {
  //   console.log("그려지고 나서 실행");
  //   return () => {
  //     console.log("사라질 때 실행");
  //   };
  // }, []);

  // 2. useEffect의 잘못된 사용 예제(1. 추가 렌더링, 2. 무한루프)
  // useEffect 안에서 setState를 사용하면 두번 rendering 되기 때문에 지양하는게 좋음
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  const onClickCountUp = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}

// // 부모
// class AAA {
//   power = 50;
//   attack() {}
// }

// // 자식
// class BBB extends AAA {
//   run() {}
// }

// const mybbb = new BBB();
