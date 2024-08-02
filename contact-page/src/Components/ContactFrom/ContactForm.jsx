import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { RiMailSendLine } from "react-icons/ri";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return (
        <section className={`${styles.hero_section} `}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />}
                    />
                    <Button
                        text="VIA CALL"
                        icon={<MdCall fontSize="24px" />}
                    />
                </div>
                <Button
                isOutline={true}
                text ="VIA EMAIL FORM"
                icon={<TfiEmail fontSize="24px"/>}
                />
                <form action="onSubmit">
                    <div className={styles.formcontroler}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Your Full Name" />
                    </div>
                    <div className={styles.formcontroler}>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" placeholder="Enter Your E-mail"/>
                    </div>
                    <div className={styles.formcontroler}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" id="" rows="5" placeholder="Write Something.....!"></textarea>
                    </div>
                    <div className={styles.submit_btn} >
                    <Button 
                    text="SUBMIT BUTTON"
                    icon={<RiMailSendLine fontSize="24px" />}
                    />
                    </div>
                </form>
            </div>
            <div className={styles.hero_image}><img src="/images/Service 24_7-pana.svg" alt="Hero Image" /></div>
        </section>
    )
}

export default ContactForm;


//export