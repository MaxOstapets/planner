export const removeNote = async (id) => {
    const res = await fetch(`http://localhost:3000/notes/delete/${id}`, { method: "DELETE" })
    return res.json()
} 