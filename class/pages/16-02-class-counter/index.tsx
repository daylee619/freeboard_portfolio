import { Component } from "react";
export default class ClassConuterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
      </>
    );
  }
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
