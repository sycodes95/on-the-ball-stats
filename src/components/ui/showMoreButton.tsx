type ShowMoreButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};


function ShowMoreButton ({onClick} : ShowMoreButtonProps) {
  return (
    <button className="w-full h-8 text-xl border rounded-lg shadow-slate-300 text-slate-400 border-slate-300 font-display hover:bg-gray-300 hover:bg-opacity-70" onClick={onClick}>
        SHOW MORE
    </button>
  )
}

export default ShowMoreButton;