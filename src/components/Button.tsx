 type ButtonProps = {
    title : string,
    id : number
 }

function Button({title, id} : ButtonProps) {
  return (
    <button className={`${
        id === 1 ? 'text-orange' :
        id === 2 ? 'text-cyan' : 
        id === 3 ? 'text-darkCyan' : 
        ''
    }  text-base font-medium px-8 rounded-full py-3 border-2 bg-lightGray self-start hover:border-lightGray hover:bg-transparent hover:text-lightGray   `}>
        {title}
    </button>
  )
}

export default Button