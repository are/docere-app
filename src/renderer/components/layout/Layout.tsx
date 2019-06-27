import React, { ReactNode, FunctionComponent } from 'react'

import styles from './layout.css'

interface LayoutProps {
    children: ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return <div className={styles.layout_container}>{children}</div>
}
