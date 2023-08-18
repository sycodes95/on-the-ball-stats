type ShowLessButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};


function ShowLessButton ({onClick} : ShowLessButtonProps) {
  return (
    <button className="w-full h-8 text-xl border rounded-lg shadow-slate-300 text-slate-400 border-slate-300 font-display hover:bg-gray-300 hover:bg-opacity-70" onClick={onClick}>
        SHOW LESS
    </button>
  )
}

export default ShowLessButton;