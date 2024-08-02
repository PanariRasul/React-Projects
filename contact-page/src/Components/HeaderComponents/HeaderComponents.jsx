import styles from "./HeaderComponents.module.css";

const HeaderComponents = () => {
    console.log(styles)

    return (
        <div className={`${styles.header_components} container`}>
            
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
    
        </div>
    )
}

export default HeaderComponents;