const ProgressBar = ({ language, percentage, level }) => {
    return (
      <div className="mb-2">
        <div className="flex justify-between">
          <h1 className="pt-2">
            {language}
          </h1>
          <h1 className="pt-2 ml-2 font-extralight">
            {level}
          </h1>
        </div>
        <div className="mt-2 ml-10 h-4 relative w-60 rounded-full overflow-hidden">
          <div className="w-full h-full bg-amber-300 absolute"></div>
          <div className="h-full bg-amber-500 absolute" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  