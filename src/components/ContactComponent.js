const ContactComponent = () => {
    return (
        <div>
            <h1> This is the Contact Page </h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"></input>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default ContactComponent;