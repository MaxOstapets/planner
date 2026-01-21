const URL = import.meta.env.NOTES_URL

export const getNotes = async () => {
  const res = await fetch(`http://localhost:3000/notes/all`)
  if (!res.ok) throw new Error("Fetch error")
  return res.json()
}