// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import ToDos from './components/todos'
import State from './qcomps/state'
import StuckForm from './qcomps/stuckForm'
import ShoppingCart from './qcomps/shoppingCart'
import UpdObjectsForm from './qcomps/updObjectsForm'
import ArtistsRemoveArr from './qcomps/artistsRemoveArr'
import ArrObj from './qcomps/arrObj'
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>State</h2>
      <State />
      <h2>StuckForm</h2>
      <StuckForm />
      <h2>ShoppingCart</h2>
      <ShoppingCart />
      <h2>UpdObjectsForm</h2>
      <UpdObjectsForm />
      <h2>ArtistsRemoveArr</h2>
      <ArtistsRemoveArr />
      <h2>ArrObj</h2>
      <ArrObj />
    </div>
  )
}
