const names = ['Tyrion', 'Jon'];

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names [1];
    return (
        <div>
            <p>{chosenName}</p>
            <p>That is a Dragon!</p>
        </div>
    );
}

export default Post;