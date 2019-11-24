import React from 'react'
import { Header } from '../../components/Header'
import { MoviesGallery } from '../../components/MoviesGallery'
import { MoviesTable } from '../../components/MoviesTable'
import { Panel } from '../../components/Panel'

import './styles.scss'

export const Home = () => {
  return (
    <div className="app-core">
      <Header />
      <section className="app-core__content">
        <Panel title="Movies view">
          <MoviesGallery />
        </Panel>
        <Panel title="Add movie">
          <MoviesTable />
        </Panel>
      </section>
    </div>
  )
}
