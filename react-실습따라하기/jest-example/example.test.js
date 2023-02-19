describe('expect test', () => {
  it('adds 1 + 2 to eqau 3', () => {
    expect(1 + 2).toBe(3);
  });

  it('adds 1 + 2 to eqau 3', () => {
    expect(3 * 3).toBe(3);
  });

  it('{age:39} same ref to {age:39}', () => {
    //객체는 참조형이기 때문에 서로 값은 같아도 참조하는 주소가 틀리기 때문에 test fail
    expect({ age: 39 }).toBe({ age: 39 });
  });

  it('{age:39} same value to {age:38}', () => {
    //값을 비교하기 위해 toEqual 을 사용한다
    expect({ age: 39 }).toEqual({ age: 39 });
  });

  it('.toHaveLength', () => {
    //문자열의 길이를 비교한다
    expect('hello').toHaveLength(5);
  });

  it('.toHaveProperty', () => {
    //age 라는 property 가 있는지 테스트
    expect({ age: 39 }).toHaveProperty('age');
  });

  it('.toHaveProperty', () => {
    //property 와 value 도 일치하는지 테스트
    expect({ age: 39 }).toHaveProperty('age', 0);
  });

  it('.toBeDefined', () => {
    //undefined 가 아닌지 확인
    expect({ age: 39 }.age).toBeDefined();
    expect({ age: 39 }.name).toBeDefined();
  });

  it('.toBeFalsy', () => {
    //false 인지 검사
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  //숫자 크기 비교
  it('.toBeGreaterThan', () => {
    //undefined 가 아닌지 확인
    expect(10).toBeGreaterThan(5);
  });

  it('.toBeGreaterThanOrEqual', () => {
    //undefined 가 아닌지 확인
    expect(10).toBeGreaterThanOrEqual(10);
  });

  it('.toBeInstanceOf', () => {
    //해당 class 의 instance 인지 검사
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
//npx jest --watchAll => test case 가 수정되면 자동으로 jest 가 시작된다

//async test with done callback(old 한 test)
//done 이 없으면 테스트가 되지 않는다
describe('use async test', () => {
  // it('setTimeout without done', () => {
  //   setTimeout(() => {
  //     expect(37).toBe(38);
  //   }, 1000);
  // });

  it('setTimeout with done', (done) => {
    setTimeout(() => {
      expect(37).toBe(37);
      done();
    }, 1000);
  });
});

//Promise test
describe('use async test with promise', () => {
  it('promise then', () => {
    function promise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }

    //첫번째 방법
    //return promise().then((resolve) => expect(resolve).toBe(37));

    //두번째 방법
    return expect(promise()).resolves.toBe(37);
  });

  // it('promise catch', () => {
  //   function promise() {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         reject(new Error('unexpected error'));
  //       }, 1000);
  //     });
  //   }
  //   //첫번째 방법
  //   //return promise().catch((e) => expect(e).toBeInstanceOf(Error));
  //   //두번째 방법
  //   return expect(promise()).rejects.toBeInstanceOf(Foo);
  // });
});

//가장 좋은 방법은 역시, async 를 사용하는 방법이다

describe('async function test', () => {
  it('use async-await', async () => {
    function promise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(40);
        });
      });
    }
    const data = await promise();
    return expect(data).toBe(40);
  });

  it('use async-await, catch', async () => {
    function promise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('unexpected error'));
        }, 1000);
      });
    }
    try {
      await promise();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
