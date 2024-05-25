export function Price({value}) {
  return (
    <>
      <div>
        <span className="valueTest">{value}</span>
      </div>
    </>
  )
}

export function DeleteButton({index, itemInDelete, onDelete}) {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <>
      <button className="delete material-symbols-outlined" onClick={handleDelete}>delete</button>
    </>
  )
}