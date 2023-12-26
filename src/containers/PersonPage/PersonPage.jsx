import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";

import { getPeopleImage } from "@services/getPeopleData";
import UiLoading from "@ui/UiLoading";

import styles from "./PersonPage.module.css";

/* Оптимизируем загрузку */
const PersonFilms = React.lazy(() =>
	import("@components/PersonPage/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
	const [personInfo, setPersonInfo] = useState(null);
	const [personName, setPersonName] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);
	const [personFilms, setPersonFilms] = useState(null);

	const { id } = useParams();
	useEffect(() => {
		/* Т.е getApiResource асинхронная, для удобства можно использовать асинхронную IEF */
		(async () => {
			const response = await getApiResource(`${API_PERSON}/${id}`);

			if (response) {
				setPersonInfo([
					{ title: "Height", data: response.height },
					{ title: "Mass", data: response.mass },
					{ title: "Hair Color", data: response.hair_color },
					{ title: "Skin Color", data: response.skin_color },
					{ title: "Eye Color", data: response.eye_color },
					{ title: "Birth Year", data: response.birth_year },
					{ title: "Gender", data: response.gender },
				]);
				setPersonName(response.name);
				setPersonPhoto(getPeopleImage(id));

				response.films.length && setPersonFilms(response.films);

				setErrorApi(false);
			} else {
				setErrorApi(true);
			}
		})();
	}, [id]);

	return (
		<>
			<PersonLinkBack />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>
					<PersonPhoto personPhoto={personPhoto} personName={personName} />
					{personInfo && <PersonInfo personInfo={personInfo} />}
					{personFilms && (
						// fallback - что будем рендерить до загрузки personFilms
						<Suspense fallback={<UiLoading />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
				</div>
			</div>
		</>
	);
};

PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
