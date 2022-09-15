import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HomeScreen } from './home'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeScreen />
    </div>
  )
}

export default Home
