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
