import "./Contact.css"

function Contact () {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <p>Feel free to react out for collaboration or just a friendly hello 👋</p>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <a href="https://wa.me/6282298023399?text=Hello%20Nico,%20I%20saw%20your%20portfolio" target="_blank">
                <button type="button">Chat via WhatsApp</button>
                </a>
            </form>
        </section>
    )
}

export default Contact