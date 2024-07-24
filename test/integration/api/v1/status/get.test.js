test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.denpendencies.databesa.version).toEqual("16.0");
  expect(responseBody.denpendencies.databesa.max_connections).toEqual(100);
  expect(responseBody.denpendencies.databesa.opened_connections).toEqual(1);
});
