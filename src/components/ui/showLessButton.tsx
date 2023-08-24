type ShowLessButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};


function ShowLessButton ({onClick} : ShowLessButtonProps) {
  return (
    <button className="w-full h-8 text-xl border rounded-lg shadow-slate-300 text-stone-400 border-stone-300 font-display hover:bg-stone-300 hover:bg-opacity-80" onClick={onClick}>
        SHOW LESS
    </button>
  )
}

export default ShowLessButton;