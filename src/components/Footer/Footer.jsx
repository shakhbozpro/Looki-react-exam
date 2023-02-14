import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// images
import logo from "../images/logosvg.svg";
import link_insta from "../images/link_insta.svg";
import link_twit from "../images/link_twit.svg";
import link_face from "../images/link_face.svg";
import link_yout from "../images/link_yout.svg";
import footer from "../images/footer.png";

function Footer() {
	const { t } = useTranslation();

	return (
		<>
			<footer className='footer'>
				<div className='footer_head'>
					<ul className='footer_head_box'>
						<li className='footer_head_box_list'>
							<img src={logo} alt='' />
							<p>
								We are a team of professional designers and developers that
								create high quality wordpress plugins, Html, React Template.
							</p>
							<ul className='footer-logos-list'>
								<li>
									<a href='http://www.instagram.com' target='blank'>
										<img src={link_insta} alt='' />
									</a>
								</li>
								<li>
									<a href='http://www.youtube.com' target='blank'>
										<img src={link_yout} alt='' />
									</a>
								</li>
								<li>
									<a href='http://twitter.com' target='blank'>
										<img src={link_twit} alt='' />
									</a>
								</li>
								<li>
									<a href='http://www.facebook.com' target='blank'>
										<img src={link_face} alt='' />
									</a>
								</li>
							</ul>
						</li>
						<li className='footer_head_box_list'>
							<h3>Information</h3>
							<ul className='footer-links-list'>
								<li>
									<Link to='/' className='footer-link'>
										About Us
									</Link>
								</li>
								<li>
									<Link to='/' className='footer-link'>
										Payment
									</Link>
								</li>
								<li>
									<Link to='/' className='footer-link'>
										Contact Us
									</Link>
								</li>
								<li>
									<Link to='/' className='footer-link'>
										Stores
									</Link>
								</li>
							</ul>
						</li>
						<li className='footer_head_box_list'>
							<h3>SocialLinks</h3>
							<ul className='footer-links-list'>
								<li>
									<Link to='/' className='footer-link'>
										New Products
									</Link>
								</li>
								<li>
									<Link to='/' className='footer-link'>
										Best Sales
									</Link>
								</li>
								<li>
									<Link to='/' className='footer-link'>
										Login
									</Link>
								</li>
								<li>
									<Link to='/' className='footer-link'>
										My Account
									</Link>
								</li>
							</ul>
						</li>
						<li className='footer_head_box_list'>
							<h3>Newsletter</h3>
							<p>
								Subcribe to the TheFace mailing list to receive update on mnew
								arrivals, special offers and other discount information.
							</p>
							<form className='footer_form'>
								<input type='text' placeholder='Your email address' />
								<button type='sumit'>{t("signup")}</button>
							</form>
						</li>
					</ul>
				</div>
				<div className='footer_food'>
					<div className='footer_food_container'>
						<p>Copyright © HasThemes. All Rights Reserved</p>
						<img src={footer} alt='' />
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
