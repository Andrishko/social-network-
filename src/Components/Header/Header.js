import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <a className={classes.header_logo} href="#">
                    <img src="/assets/Logo.svg" alt="logo"/>
                </a>

                <nav className={classes.navbar}>
                    <ul className={classes.navbar_items}>
                        <li className={classes.navbar_item}>
                            <a href="/feed">
                                <img src="/assets/feed.svg" alt="feed"/>
                                <p>FEED</p>
                            </a>
                        </li>
                        <li className={classes.navbar_item}>
                            <img src="/assets/network.svg" alt="network"/>
                            <p>NETWORK</p>
                        </li>
                        <li className={classes.navbar_item}>
                            <img src="/assets/jobs.svg" alt="jobs"/>
                            <p>JOBS</p>
                        </li>
                        <li className={classes.navbar_item}>
                            <a href="/chat">
                            <img src="/assets/chat.svg" alt="chat"/>
                            <p>CHAT</p>
                            </a>
                        </li>
                        <li className={classes.navbar_item}>
                            <img src="/assets/notices.svg" alt="notices"/>
                            <p>NOTICES</p>
                        </li>
                    </ul>
                </nav>

                <div className={classes.header_search}>
                    <img src="/assets/search.svg" alt=""/>
                    <textarea placeholder="Search">
                    </textarea>
                </div>
                <div className={classes.profile}>
                    <img className={classes.profile_logo} src="/assets/profilefoto.jpg" alt="avatar"/>
                    <p>
                        A.PETROVSKYI <span>YOU </span>
                        367 views today <span>+32</span>
                    </p>
                </div>
                <div className={classes.option}>
                    <img src="/assets/optionDots.svg" alt="dots"/>
                    <button>OTHER</button>
                </div>
            </div>
        </header>

    );
}

export default Header