// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import ToDos from './components/todos'
import Recipes from './qcomps/recipes'
import GalleryProps from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'
import List from './qcomps/list_keys_id'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Recipes</h2>
      <Recipes />
      <h2>GalleryProps</h2>
      <GalleryProps />
      <h2>PackingList</h2>
      <PackingList />
      <h2>List</h2>
      <List />
    </div>
  )
}
