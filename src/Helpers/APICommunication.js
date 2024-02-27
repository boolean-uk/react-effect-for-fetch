export async function getArt() {
	try {
		const response = await fetch("https://boolean-api-server.fly.dev/art");
		if (!response.ok) {
			throw new Error("Failed to fetch art");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getUsers() {
	try {
		const response = await fetch(
			"https://boolean-api-server.fly.dev/andreSturesson/contact"
		);
		if (!response.ok) {
			throw new Error("Failed to fetch users");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getRandomAdvise() {
	try {
		const randomNumber = Math.floor(Math.random() * 220);
		const url = `https://api.adviceslip.com/advice?random=${randomNumber}`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Failed to fetch advice");
		}
		const data = await response.json();
		console.log("Data: ", data);
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getFavouriteAdvice(id) {
	try {
		const response = await fetch(`https://api.adviceslip.com/advice/{slip_id}`);
		if (!response.ok) {
			throw new Error("Failed to fetch favourite advice");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}
