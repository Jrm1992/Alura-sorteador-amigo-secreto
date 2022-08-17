import React from "react"

import * as Style from './style'

const Card: React.FC = ({ children }) => {
    return (
        <Style.Card className="card">
            {children}
        </Style.Card>
    )
}

export default Card