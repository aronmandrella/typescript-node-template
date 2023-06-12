async function delay(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export async function app() {
	console.log("Hello");

	await delay(100);

	console.log("World");
}
