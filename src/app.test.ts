import { describe, expect, it } from "@jest/globals";
import { app } from "./app";

describe("app", () => {
	it("should work", async () => {
		expect.hasAssertions();

		await expect(app()).resolves.toBeUndefined();
	});
});
