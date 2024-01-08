import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import {
	getPeopleId,
	getPeopleImage,
	getPeoplePageId,
} from "@services/getPeopleData";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import UiInput from "@ui/UiInput";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
	const [inputSearchValue, setInputSearchValue] = useState("");
	const [people, setPeople] = useState([]);
	/* Запрос на API для поиска персонажа */
	const getResponse = async (params) => {
		const response = await getApiResource(API_SEARCH + params);
		if (response) {
			const peopleList = response.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getPeopleImage(id);

				return {
					id,
					name,
					img,
				};
			});
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	useEffect(() => {
		getResponse("");
	}, []);

	/* Отсроченный поиск в input */
	const debouncedGetResponse = useCallback(
		debounce((value) => getResponse(value), 300),
		[]
	);
	/* Просто value, т.к уже в компоненте Input будем получать target.value */
	const handleInputChange = (value) => {
		setInputSearchValue(value);
		debouncedGetResponse(value);
	};
	return (
		<>
			<h1 className="header__text">Search</h1>
			<UiInput
				value={inputSearchValue}
				handleInputChange={handleInputChange}
				placeholder="Input characters's name"
				classes={styles.input__search}
			/>
			<SearchPageInfo people={people} />
		</>
	);
};

SearchPage.propTypes = {
	setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
