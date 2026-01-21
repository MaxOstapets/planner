export const create = async (title, level, description, listTitle, list) => {
  const res = await fetch("http://localhost:3000/notes/new", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title,
      level,
      description,
      listTitle,
      list,
    }),
  })

  if (!res.ok) throw new Error("Create error")
  return res.json()
}
