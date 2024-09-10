export default function ConditionalComponent() {
    const display = false;
    if (display) {
        <div>
            <h3>This is a conditional Component</h3>
        </div>;
    } else {
        return (
            <div>
                <h3>Code Everyday</h3>
            </div>
        )
    }

}