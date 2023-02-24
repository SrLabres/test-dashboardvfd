export function Indicator(props) {
    const {name, value} = props
    return(
        <div>
            <h1>{name}</h1>
            <p>{value}</p>
        </div>
    )
}