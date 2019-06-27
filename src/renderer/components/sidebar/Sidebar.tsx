import React from 'react'

import styles from './sidebar.css'

interface Tree {
    label: string
    children?: Array<Tree>
}

export const Sidebar = ({}) => {
    return (
        <div className={styles.container}>
            <div className={styles.logotype}>Docere</div>
            <div className={styles.content}></div>
        </div>
    )
}
