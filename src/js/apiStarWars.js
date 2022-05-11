const baseUrl = "https://www.swapi.tech/api/";

const people = {
	getById: async (id) => {
		// Buscar un personaje por el id y retornar el objeto con los datos
		try {
			const resp = await fetch(`${baseUrl}people/${id}`);
			if (resp.ok) {
				let res = await resp.json();
				return {
					img: `https://starwars-visualguide.com/assets/img/characters/${res.result.uid}.jpg`,
					...res.result.properties,
				};
			}
			console.error(resp.status, resp.statusText);
			return [];
		} catch (error) {
			console.error("Error en la api", error);
			return [];
		}
	},
	getQuery: async (page = 1, limit = 10) => {
		// Ejemplo de peticion https://www.swapi.tech/api/people?limit=20&page=2
		try {
			const resp = await fetch(
				`${baseUrl}people/?limit=${limit}&page=${page}`
			);
			if (resp.ok) {
				let res = await resp.json();
				res.results = res.results.map((person) => {
					return {
						img: `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`,
						...person,
					};
				});
				return res;
			}
			console.error(resp.status, resp.statusText);
			return [];
		} catch (error) {
			console.error("Error en la api", error);
			return [];
		}
	},
};

const planets = {
	getById: async (id) => {
		try {
			const resp = await fetch(`${baseUrl}planets/${id}`);
			if (resp.ok) {
				let res = await resp.json();
				return {
					img: `https://starwars-visualguide.com/assets/img/planets/${res.result.uid}.jpg`,
					...res.result.properties,
				};
			}
			console.error(resp.status, resp.statusText);
			return [];
		} catch (error) {
			console.error("Error en la api", error);
			return [];
		}
	},
	getQuery: async (page = 1, limit = 10) => {
		try {
			const resp = await fetch(
				`${baseUrl}planets/?limit=${limit}&page=${page}`
			);
			if (resp.ok) {
				let data = await resp.json();
				data.results = data.results.map((planet) => {
					return {
						img: `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`,
						...planet,
					};
				});
				return data;
			}
			console.error(resp.status, resp.statusText);
		} catch (error) {
			console.error(resp.status, resp.statusText);
			return [];
		}
	},
};
export { people, planets };
