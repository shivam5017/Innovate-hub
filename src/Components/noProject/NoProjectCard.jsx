

const NoProjectCard=()=>{
    return (
        <div className="flex flex-col items-center justify-center h-64 rounded-lg border-2 border-gray-300  text-center p-4">
          <h2 className="text-xl font-bold font-primary text-text">No Projects Available</h2>
          <p className="text-md  font-paragraph text-lightText"> There are currently no projects to display.</p>
        </div>
    )
}

export default NoProjectCard;