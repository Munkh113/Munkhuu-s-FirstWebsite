import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Нэр</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Имэйл</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Бичих зүйлээ бичнэ үү</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Явуулах" className="special" /></li>
                        <li><input type="reset" value="Арилгах" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Миний имэйл</h3>
                        <a href="#">mathmonhoo@yahoo.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Утас</h3>
                        <span>(+976) 99607331</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Хаяг</h3>
                        <span>Монгол улс, Улаанбаатар<br />
                        Хан-Уул дүүрэг, 16-р хороо<br />
                        Буянт-Ухаа 1</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
