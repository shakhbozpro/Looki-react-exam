import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../images/logosvg.svg";
import f_logo from "../images/facebook.svg";
import t_logo from "../images/twitter.svg";
import y_logo from "../images/youtube.svg";
import i_logo from "../images/instagram.svg";
import tel from "../images/telicon.png";
import search from "../images/search.svg";
import shuffle from "../images/shuffle.svg";
import shape from "../images/favourite.svg";
import bag from "../images/bag.svg";

function Header() {
	const { t, i18n } = useTranslation();

	let localStorageArray = JSON.parse(localStorage.getItem("react-use-cart"));

	function TranslationFunc(e) {
		i18n.changeLanguage(e.target.value);
	}
	return (
		<>
			<header className='head'>
				<div className='head_container'>
					<nav className='head_container_nav'>
						<ul className='head_container_nav-link'>
							<li>
								<a href='http://www.facebook.com' target='blank'>
									<img src={f_logo} alt='facebook_logo' />
								</a>
							</li>
							<li>
								<a href='http://twitter.com' target='blank'>
									<img src={t_logo} alt='twitter_logo' />
								</a>
							</li>
							<li>
								<a href='http://www.youtube.com' target='blank'>
									<img src={y_logo} alt='youtube_logo' />
								</a>
							</li>
							<li>
								<a href='http://www.instagram.com' target='blank'>
									<img src={i_logo} alt='instagram_logo' />
								</a>
							</li>
						</ul>
						<a className='tel_link' href='tel:+998938765047'>
							{" "}
							<img src={tel} alt='tel' /> (+998)938765047
						</a>
					</nav>
					<ul className='head_container_link'>
						<li>
							<Link className='header-settings-link' to='/'>
								{t("setting")}
							</Link>
						</li>
						<li>
							<Link className='header-settings-link' to='/'>
								USD $
							</Link>
						</li>
						<li>
							<select className='header-lang-select' onChange={TranslationFunc}>
								<option value='en'>English</option>
								<option value='uz'>Uzbek</option>
							</select>
						</li>
						<li>
							<Link className='header-login-link' to={"/login"}>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</header>
			<header className='header'>
				<div className='header_container'>
					<Link to='/'>
						<img src={logo} alt='' />
					</Link>
					<nav>
						<ul className='header-nav'>
							<li>
								<Link to='/' className='header-nav-link'>
									{t("home")}
								</Link>
							</li>
							<li>
								<Link className='header-nav-link'>{t("shop")}</Link>
							</li>
							<li>
								<Link className='header-nav-link'>{t("pages")}</Link>
							</li>
							<li>
								<Link className='header-nav-link'>{t("blog")}</Link>
							</li>
							<li>
								<Link className='header-nav-link'>{t("contact")}</Link>
							</li>
						</ul>
					</nav>
					<div className='header_container_btns'>
						<Link className='header_container_btns-btn'>
							<img src={search} alt='search' />
						</Link>
						<Link className='header_container_btns-btn'>
							<img src={shuffle} alt='shuffle' />
						</Link>
						<Link className='header_container_btns-btn'>
							<img src={shape} alt='shape' />
						</Link>
						<Link
							className='header_container_btns-btn header-bag-btn'
							to={"/card"}
						>
							<img src={bag} alt='bag' />
							<span className='header-card-badge'>
								{localStorageArray.totalItems}
							</span>
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
