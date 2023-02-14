import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import dele from "./images/delete.svg";
import dele from "../images/delete.svg";
import { useCart } from "react-use-cart";

function Card() {
	const { t, i18n } = useTranslation();
	const { updateItemQuantity, removeItem } = useCart();
	function TranslationFunc(e) {
		i18n.changeLanguage(e.target.value);
	}

	let localStorageArray = JSON.parse(localStorage.getItem("react-use-cart"));

	const cartFromArr = localStorageArray.items;

	return (
		<>
			<Header />
			<main className='card_home'>
				<section className='card_home_cection'>
					<h2>Cart</h2>
					<div>
						<Link className='header_container_btns-btn' to={"/"}>
							Home
						</Link>{" "}
						&#62; <span>Card</span>
					</div>
				</section>
				<section className='card_box'>
					<div className='card_box_container'>
						<div className='card_box_container_h'>
							<h2>Your cart items</h2>
						</div>
						<table>
							<thead className='thead'>
								<tr>
									<th>Product Image</th>
									<th>Product Name</th>
									<th>Stock Status</th>
									<th>Qty</th>
									<th>Price</th>
									<th>Action</th>
									<th>Checkout</th>
								</tr>
							</thead>
							<tbody className='tbody'>
								{cartFromArr.map((item, index) => (
									<tr key={index}>
										<th>
											<img className='img_card' src={item.author} alt='' />
										</th>
										<th>{item.title}</th>
										<th>
											<button className='tdBtn_i'>In Stock</button>
										</th>
										<th>
											<div className='card-quantity'>
												<div className='product-quantity'>{item.quantity}</div>
												<div className='card-quantity-btns'>
													<button
														className='card-quantity-btn'
														onClick={() => {
															updateItemQuantity(item.id, item.quantity + 1);
														}}
													>
														<svg
															width='10'
															height='6'
															viewBox='0 0 10 6'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M5.4375 0.185791C5.26172 0.0100098 4.96875 0.0100098 4.79297 0.185791L0.984375 3.97485C0.808594 4.17017 0.808594 4.46313 0.984375 4.63892L1.43359 5.08813C1.60938 5.26392 1.90234 5.26392 2.09766 5.08813L5.125 2.08032L8.13281 5.08813C8.32812 5.26392 8.62109 5.26392 8.79688 5.08813L9.24609 4.63892C9.42188 4.46313 9.42188 4.17017 9.24609 3.97485L5.4375 0.185791Z'
																fill='#111111'
															/>
														</svg>
													</button>

													<button
														className='card-quantity-btn'
														onClick={() => {
															updateItemQuantity(item.id, item.quantity - 1);
														}}
													>
														<svg
															width='10'
															height='11'
															viewBox='0 0 10 11'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M4.79297 8.58813C4.96875 8.76392 5.26172 8.76392 5.4375 8.58813L9.24609 4.79907C9.42188 4.60376 9.42188 4.31079 9.24609 4.13501L8.79688 3.68579C8.62109 3.51001 8.32812 3.51001 8.13281 3.68579L5.125 6.6936L2.09766 3.68579C1.90234 3.51001 1.60938 3.51001 1.43359 3.68579L0.984375 4.13501C0.808594 4.31079 0.808594 4.60376 0.984375 4.79907L4.79297 8.58813Z'
																fill='#111111'
															/>
														</svg>
													</button>
												</div>
											</div>
										</th>
										<th>{item.cost}$</th>
										<th>
											<button
												onClick={() => {
													removeItem(item.id);
												}}
												className='tdBtn_d'
											>
												<img src={dele} alt='' />
											</button>
										</th>
										<th>
											<button className='tdBtn'>Add to cart</button>
										</th>
									</tr>
								))}
							</tbody>
						</table>

						<div className='calculation'>
							<div className='calculation-form-wrapper'>
								<h2 className='calculation-form-title'>Calculate Shipping</h2>
								<form
									style={{ marginBottom: "40px" }}
									className='calculation_form'
								>
									<select className='calculation_form-input'>
										<option hidden value=''>
											Select Country
										</option>
										<option value='usa'>Usa</option>
										<option value='ru'>Russia</option>
										<option value='uzb'>Uzbekiston</option>
									</select>

									<select className='calculation_form-input'>
										<option hidden value=''>
											Select State
										</option>
										<option value='newYork'>New-York</option>
										<option value='москва'>Москва</option>
										<option value='toshkent'>Toshkent</option>
									</select>

									<input className='calculation_form-input' type='file' />
									<button className='calculation_form-btn' type='submit'>
										Estimate
									</button>
								</form>

								<h3 className='calculation-coupon-title'>
									Discount Coupon Code
								</h3>
								<form className='calculation_form'>
									<input
										className='calculation_form-input'
										type='text'
										placeholder='coupon Code'
									/>
									<button className='calculation_form-btn' type='submit'>
										Apply code
									</button>
								</form>
							</div>

							<div className='calculation-end'>
								<div className='total-price-wrapper'>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											marginBottom: "8px",
										}}
									>
										<strong>Product</strong>
										<strong>Total</strong>
									</div>

									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											marginBottom: "18px",
										}}
									>
										<strong>Shipping</strong>
										<span style={{ color: "#565656" }}>Free Shipping</span>
									</div>

									<hr style={{ marginBottom: "18px" }} />

									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											marginBottom: "18px",
										}}
									>
										<strong>Total</strong>
										<strong style={{ color: "#5A5AC9" }}>
											${localStorageArray.cartTotal}
										</strong>
									</div>

									<hr style={{ marginBottom: "18px" }} />
								</div>

								<div>
									<button style={{ marginRight: "20px" }} className='price-btn'>
										Update cart
									</button>
									<button className='price-btn'>Checkout</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Card;
