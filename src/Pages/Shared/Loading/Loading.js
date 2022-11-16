import React from 'react';

const Loading = () => {
    return (
        <div className='h-[50px] flex items-center justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
        </div>
    );
};

export default Loading;