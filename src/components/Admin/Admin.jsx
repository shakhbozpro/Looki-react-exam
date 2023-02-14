import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import style from ".././login.module.css";

function Admin() {
	const titleRef = useRef();
	const authorRef = useRef();
	const categoryRef = useRef();
	const costRef = useRef();
	const numberRef = useRef();

	const navigate = useNavigate();
	const [inputErr, setInputErr] = useState(false);
	const [inputErr2, setInputErr2] = useState(false);
	const [inputErr3, setInputErr3] = useState(false);
	const [inputErr4, setInputErr4] = useState(false);

	useEffect(() => {
		const getLocal = JSON.parse(localStorage.getItem("user"));
		console.log(getLocal);
		if (!getLocal) {
			navigate("/login");
		}
	}, []);

	function AddFormAPI(evt) {
		evt.preventDefault();

		let data = {
			title: titleRef.current.value.trim(),
			author: authorRef.current.value.trim(),
			category: categoryRef.current.value.trim(),
			cost: costRef.current.value.trim(),
			number: numberRef.current.value.trim(),
		};

		if (!data.title) {
			setInputErr(true);
			return;
		} else if (!data.author) {
			setInputErr2(true);
			return;
		} else if (!data.cost) {
			setInputErr3(true);
			return;
		} else if (!data.number) {
			setInputErr4(true);
			return;
		}

		const push = {
			title: titleRef.current.value,
			author: authorRef.current.value,
			category: categoryRef.current.value,
			cost: costRef.current.value,
			number: numberRef.current.value,
		};

		axios
			.post(
				`https://examp-86fb5-default-rtdb.firebaseio.com/project.json`,
				push,
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				navigate("/");
			});
	}

	function InputFunc() {
		setInputErr(false);
		setInputErr2(false);
		setInputErr3(false);
		setInputErr4(false);
	}

	return (
		<>
			<div className={style.login_main}>
				<form onSubmit={AddFormAPI} className={style.login_form}>
					<input
						onChange={InputFunc}
						ref={titleRef}
						className={inputErr && style.inputError}
						type='text'
						placeholder='Product title'
					/>
					<input
						onChange={InputFunc}
						ref={authorRef}
						className={inputErr2 && style.inputError}
						type='text'
						placeholder='Image (url)'
					/>
					<select ref={categoryRef}>
						<option value='new'>New Products</option>
						<option value='onsale'>Onsale</option>
						<option value='product'>Upcoming Products</option>
					</select>
					<input
						onChange={InputFunc}
						ref={costRef}
						className={inputErr3 && style.inputError}
						type='number'
						placeholder='Product price'
					/>
					<input
						onChange={InputFunc}
						ref={numberRef}
						className={inputErr4 && style.inputError}
						type='number'
						placeholder='Rate'
						max='5'
					/>
					{inputErr && <span>No products entered!</span>}
					<button type='submit' className='modal_edit'>
						Add
					</button>
					<Link to='/' className='close_admin-page'>
						Close
					</Link>
				</form>
			</div>
		</>
	);
}

export default Admin;
