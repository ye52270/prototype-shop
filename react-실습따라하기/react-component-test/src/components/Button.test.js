import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Button from './Button';

describe('Button Component (@testing-library/react', () => {
  it('컴포넌트가 정상적으로 생성된다.', () => {
    const { button } = render(<Button />);
    expect(button).not.toBe(null);
  });

  it('button 이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다.', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText('button');
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  it('버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸습니다" 라고 쓰여진다..', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText('button');
    // button click 을 알기위해 fireEvent 를 가지고 온다
    fireEvent.click(buttonElement);

    const p = getByText('버튼이 방금 눌렸습니다');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼을 클릭하기 전에는 p 태그 안에 "버튼이 눌리지 않았습니다" 라고 쓰여진다.', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText('button');

    const p = getByText('버튼이 눌리지 않았습니다');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼을 클릭하고 5초 뒤에는 p 태그 안에 "버튼이 눌리지 않았습니다" 라고 쓰여진다.', () => {
    jest.useFakeTimers();
    const { getByText } = render(<Button />);
    const buttonElement = getByText('button');

    //act 를 가져 온다
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    //5초 흐른다. jest faketimer

    const p = getByText('버튼이 눌리지 않았습니다');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼을 클릭하면 5초동안 버튼이 비활성화 된다', () => {
    jest.useFakeTimers();

    const { getByText } = render(<Button />);
    const buttonElement = getByText('button');
    fireEvent.click(buttonElement);
    //비활성화
    //expect(buttonElement.disabled).toBeTruthy();
    expect(buttonElement).toBeDisabled();
    //act 를 가져 온다
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    //5초 흐른다. jest faketimer
    //활성화
    //expect(buttonElement.disabled).toBeFalsy();
    expect(buttonElement).not.toBeDisabled;
  });
});

//jest 의 Custom matchers 를 사용하면 DOM 에서 테스트를 더 수월하게 할 수 있다
