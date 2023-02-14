import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import bag from "../images/bag.svg";
import free_one from "../images/free_one.png";
import free_two from "../images/free_two.png";
import free_three from "../images/free_three.png";
import free_four from "../images/free_four.png";
import servis_one from "../images/servis_one.png";
import servis_two from "../images/servis_two.png";
import servis_three from "../images/servis_three.png";
import banner_one from "../images/banner_one.png";
import banner_two from "../images/banner_two.png";
import banner_three from "../images/banner_three.png";
import cardimg_one from "../images/cardimg_one.png";
import cardimg_two from "../images/cardimg_two.png";
import cardimg_three from "../images/cardimg_three.png";
import cardimg_four from "../images/cardimg_four.png";
import rek_one from "../images/rek_one.png";
import rek_two from "../images/rek_two.png";
import rek_three from "../images/rek_three.png";
import rek_four from "../images/rek_four.png";
import rek_five from "../images/rek_five.png";
import rek_sex from "../images/rek_sex.png";

function Users() {
	const { t } = useTranslation();
	const [listApi, setlistApi] = useState([]);
	const [errorApi, seterrorApi] = useState(false);
	const [filterAll, setfilterAll] = useState(false);
	const [filterNew, setfilterNew] = useState(false);
	const [filterOnsale, setfilterOnsale] = useState(false);
	const [filterProduct, setfilterProduct] = useState(false);
	const { addItem } = useCart();

	useEffect(() => {
		axios
			.get(`https://examp-86fb5-default-rtdb.firebaseio.com/project.json`)
			.then(({ data }) => {
				var newApi = Object.keys(data).map((item) => {
					return {
						...data[item],
						id: item,
					};
				});
				setlistApi(newApi);
			})
			.catch((err) => {
				console.log(err);
				seterrorApi(true);
			});
	}, []);

	function OnfilterFunc_new() {
		setfilterNew(true);
		setfilterOnsale(false);
		setfilterProduct(false);
		setfilterAll(true);
	}

	function OnfilterFunc_onsale() {
		setfilterOnsale(true);
		setfilterProduct(false);
		setfilterNew(false);
		setfilterAll(true);
	}

	function OnfilterFunc_product() {
		setfilterProduct(true);
		setfilterOnsale(false);
		setfilterNew(false);
		setfilterAll(true);
	}

	function OnfilterFunc_All() {
		setfilterProduct(false);
		setfilterOnsale(false);
		setfilterNew(false);
		setfilterAll(false);
	}

	if (filterNew) {
		var filterApi = listApi.filter((item) => item.category.match("new"));
	} else if (filterOnsale) {
		filterApi = listApi.filter((item) => item.category.match("onsale"));
	} else if (filterProduct) {
		filterApi = listApi.filter((item) => item.category.match("product"));
	} else {
		filterApi = listApi;
	}
	const newcategry = listApi.filter((item) => item.category.match("new"));

	return (
		<>
			<Header />
			<main className='main'>
				<section className='main_section'>
					<div className='main_section_container'>
						<div className='main_section_container_text'>
							<h2>{t("h2")}</h2>
							<h1 className='main_section_container_text-h'>{t("h")}</h1>
							<button className='hero-btn'>{t("btn")}</button>
						</div>
					</div>
				</section>

				<section className='servis'>
					<ul className='servis_text'>
						<li>
							<img src={free_one} alt='' />
							<div>
								<h3>Free Shipping</h3>
								<p>On all orders over $75.00</p>
							</div>
						</li>
						<li>
							<img src={free_two} alt='' />
							<div>
								<h3>Free Returns</h3>
								<p>Returns are free within 9 days</p>
							</div>
						</li>
						<li>
							<img src={free_three} alt='' />
							<div>
								<h3>100% Payment Secure</h3>
								<p>Your payment are safe with us.</p>
							</div>
						</li>
						<li>
							<img src={free_four} alt='' />
							<div>
								<h3>Support 24/7</h3>
								<p>Contact us 24 hours a day</p>
							</div>
						</li>
					</ul>
					<div className='servis_box'>
						<img src={servis_one} alt='' />
						<img src={servis_two} alt='' />
						<img src={servis_three} alt='' />
					</div>
				</section>

				<section className='products'>
					<div className='product-types'>
						<h2 className='product-section-heading'>{t("our")}</h2>
						{filterAll && (
							<i className='warning-text' onClick={OnfilterFunc_All}>
								Click on the entry to display all products
							</i>
						)}
						<form className='api_filter'>
							<label onClick={OnfilterFunc_new}>
								<input type='radio' name='ApiFilter' className='radio' />
								<b className='product-type-link'>{t("newproducts")}</b>
							</label>
							<label onClick={OnfilterFunc_onsale}>
								<input type='radio' name='ApiFilter' className='radio' />
								<b className='product-type-link'>{t("onsale")}</b>
							</label>
							<label onClick={OnfilterFunc_product}>
								<input type='radio' name='ApiFilter' className='radio' />
								<b className='product-type-link'>{t("upcomingproducts")}</b>
							</label>
						</form>
					</div>
					<ul className='products-list'>
						{errorApi && (
							<h2 className='errorApi'>
								Sorry, there are currently no products!
							</h2>
						)}
						{!filterApi.length && (
							<h2 className='errorApi'>
								Sorry, there are currently no products!
							</h2>
						)}

						{filterApi.map((item, index) => (
							<li className='products-card' key={index}>
								<img src={item.author} alt='img' className='card_img' />
								<div className='product-infos'>
									<h3 className='product-card-title'>{item.title}</h3>
									<p className='star_box'>
										<span>&#9733;</span>
										<span>&#9733;</span>
										<span>&#9733;</span>
										<span>&#9733;</span>
										<span>&#9733;</span>
									</p>
									<div className='product-cost'>
										<strong>{item.cost}$</strong>
										<button
											onClick={() => {
												addItem({ ...item, price: item.cost });
											}}
											className='product-card-btn'
										>
											<img src={bag} alt='ok' />
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
					<div className='servis_box'>
						<img src={banner_one} alt='' />
						<img src={banner_two} alt='' />
						<img src={banner_three} alt='' />
					</div>
				</section>

				<section className='products'>
					<div className='product-start'>
						<h2 className='product-section-heading'>
							{t("newarrivalproducts")}
						</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Dignissimos, repellat.
						</p>
					</div>
					<ul className='products-list'>
						{errorApi && (
							<h2 className='errorApi'>
								Sorry, there are currently no products
							</h2>
						)}
						{!newcategry.length && (
							<h2 className='errorApi'>
								Sorry, there are currently no products
							</h2>
						)}
						{newcategry.map((item, index) => (
							<li className='products-card ' key={index}>
								<img src={item.author} alt='img' className='card_img' />
								<div className='product-infos'>
									<h3>{item.title}</h3>
									<p className='star_box'>
										<span>&#9733;</span>
										<span>&#9733;</span>
										<span>&#9733;</span>
										<span>&#9733;</span>
										<span>&#9733;</span>
									</p>
									<div className='product-cost'>
										<strong>{item.cost}$</strong>
										<button className='product-card-btn'>
											<img src={bag} alt='ok' />
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</section>

				<section className='products'>
					<div className='product-start'>
						<h2 className='product-section-heading'>
							{t("fromourlatestblogs")}
						</h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<ul className='products-list'>
						<li className='products-card'>
							<img src={cardimg_one} alt='' />
							<div className='product-infos'>
								<b>Fashion</b>
								<h3>This is fourth Post For Blog</h3>
								<p>Posted by HasTech 12TH Nov 2023</p>
							</div>
						</li>
						<li className='products-card'>
							<img src={cardimg_two} alt='' />
							<div className='product-infos'>
								<b>Fashion</b>
								<h3>This is fourth Post For Blog</h3>
								<p>Posted by HasTech 12TH Nov 2023</p>
							</div>
						</li>
						<li className='products-card'>
							<img src={cardimg_three} alt='' />
							<div className='product-infos'>
								<b>Fashion</b>
								<h3>This is fourth Post For Blog</h3>
								<p>Posted by HasTech 12TH Nov 2023</p>
							</div>
						</li>
						<li className='products-card'>
							<img src={cardimg_four} alt='' />
							<div className='product-infos'>
								<b>Fashion</b>
								<h3>This is fourth Post For Blog</h3>
								<p>Posted by HasTech 12TH Nov 2023</p>
							</div>
						</li>
					</ul>
				</section>

				<section className='rek_section'>
					<img src={rek_one} alt='' />
					<img src={rek_two} alt='' />
					<img src={rek_three} alt='' />
					<img src={rek_four} alt='' />
					<img src={rek_five} alt='' />
					<img src={rek_sex} alt='' />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Users;
