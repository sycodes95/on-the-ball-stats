type ShowMoreButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};


function ShowMoreButton ({onClick} : ShowMoreButtonProps) {
  return (
    <button className="w-full h-8 text-xl border rounded-lg shadow-slate-300 text-stone-400 border-stone-300 font-display hover:bg-stone-300 hover:bg-opacity-80" onClick={onClick}>
        SHOW MORE
    </button>
  )
}

export default ShowMoreButton;