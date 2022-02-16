/**
 * Progress bar for Ontario screening
 * 
 * Author: @jasonli0616
 */

import React from "react"

const ProgressBar = ({progress}) => (
    <div className="ontario-progress">
        <div className="ontario-progress-bar" style={{ width: `${progress}%` }}>
            {progress}%
        </div>
    </div>
)

export default ProgressBar