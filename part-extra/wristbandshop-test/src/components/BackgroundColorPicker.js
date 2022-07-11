const BackgroundColorPicker = ({colorSelected, setColorSelected}) => {
    const colors = ['#000000', '#d1e7f0', '#9C27B0', '#FFEB3B', '#afbbc9', '#4CAF50', '#2d3748', '#f56565']

    return (
        <div className="right-0 mt-2 w-52 rounded-md shadow-lg m-auto mb-4">
            <div className="rounded-md bg-white shadow-xs px-4 py-3">
                <div className="flex flex-wrap -mx-2">
                    {colors.map((color, index) => {
                        return (
                        <div key={index} className="px-2">
                            { colorSelected === color ? 
                            <button type="button" className="w-8 h-8 inline-flex rounded-full cursor-pointer border-4 border-white ring ring-violet-300" 
                            style={{background: `${color}`}} 
                            onClick={(e) => setColorSelected(color)}>
                            </button>
                            :
                            <button type="button" className="w-8 h-8 inline-flex rounded-full cursor-pointer border-2 border-white focus:ring focus:ring-violet-300" 
                            style={{background: `${color}`}} 
                            onClick={(e) => setColorSelected(color)}>
                            </button>}
                        </div>)
                    })
                }                    
                </div>
            </div>
        </div>
    )
}

export default BackgroundColorPicker