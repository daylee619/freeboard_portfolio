export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick 타입
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입
  type bbb = Omit<IProfile, "school">;
  // 3. Partial 타입 , 물음표가 붙여서 생성, 있어도 되고 없어도 되고
  type ccc = Partial<IProfile>;
  // 4. Required 타입 , 전부 필수적으로 필요함
  type ddd = Required<IProfile>;
  // 5. Record 타입
  type eee = "철수" | "영희" | "훈이"; //union type
  let child: eee;
  child = "철수";

  type fff = Record<eee, IProfile>; //record type
}

// type vs interface 차이: 선언병합

interface IProfile {
  candy: number;
}

let profile: Partial<IProfile> = {};
profile.candy = 10;
