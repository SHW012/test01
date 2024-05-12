// MyButton.js

function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    
    console.log('Rendering MyButton'); // 버튼이 렌더링될 때 로그 출력

    return (
        <button onClick={() => setIsClicked(true)}>
            {isClicked ? 'Clicked!' : 'Click here!'}
        </button>
    );
}
