

const ClockDisplay = ({date, title, timezone, offset}) => {
    const offsetHr = offset/60;
    console.log(offsetHr)
    return (
        <div>
            <h1>{title}</h1>
            <h3>{date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</h3>
            <p>{timezone}{ offsetHr > 0 ? `+${Math.abs(offsetHr)}`  : `-${Math.abs(offsetHr)}`}</p>
        </div>
    );
};

export default ClockDisplay;