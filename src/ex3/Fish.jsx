const Fish = (props) =>
{
    let body = ''
    for (let i = 0; i < props.size; i++) body += "="
    
    return (
    <main>
    <p>{"><" + body + "°>"}</p>
    <button>{"-"}</button>
    <button>{"+"}</button>
    </main>
    )
}

export default Fish;
