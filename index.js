const statusEl = document.getElementById("status");
const usersEl = document.getElementById("users");
const btnHeader = document.getElementById("btn-header");
const btnNoHeader = document.getElementById("btn-no-header");

btnHeader.addEventListener("click", () => fetchUsers(true));

btnNoHeader.addEventListener("click", () => fetchUsers(false));

async function fetchUsers(includeHeader) {
  statusEl.textContent = "Loading...";
  usersEl.textContent = "";

  try {
    const options = { method: "GET" };
    if (includeHeader) {
      options.headers = { "x-api-key": "reqres-free-v1" };
    }
    const response = await fetch(
      "https://reqres.in/api/users?delay=1",
      options
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();

    if (!data || data.data.length === 0) {
      throw new Error("No users found");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const fulNames = data.data.map((user) => `${user.name}`);

    fulNames.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      usersEl.appendChild(li);
    });
    console.log("Done!");
    console.log(data);
    statusEl.textContent = "";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "";
    usersEl.textContent = "No users";
  }
}
