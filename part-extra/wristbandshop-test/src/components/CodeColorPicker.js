const CodeColorPicker = ({selectedOption, setSelectedOption}) => {
    return (
        <div className="flex flex-row items-center justify-center mb-6">
            <label className="ml-3 text-sm text-gray-600">
                <input type="radio" value="Black" checked={selectedOption === 'Black'} 
                onChange={() => setSelectedOption('Black')}
                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                Black
            </label>
            <label className="ml-3 text-sm text-gray-600">
                <input type="radio" value="White" checked={selectedOption === 'White'} 
                onChange={() => setSelectedOption('White')}
                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                White
            </label>
        </div>
    )
}

export default CodeColorPicker