import * as PIXI from 'pixi.js'
import { Suspense, useEffect, useState } from 'react'
import { createPixiApp } from "../../utils/pixiUtil"

type TopHeroProps = {}

const TopHero: React.FC<TopHeroProps> = ({}) => {
  const onLoad = (element: HTMLDivElement) => {
    if (typeof element === 'undefined') return;
    const app = createPixiApp(element);

    const topHero = PIXI.Sprite.from("./assets/topHero.png")
    topHero.x = 0
    topHero.y = 0
    topHero.width = app.screen.width
    topHero.height = app.screen.height
  
    app.stage.addChild(topHero)
  }

  useEffect(() => {
    const loader = new PIXI.Loader()
    loader.add("topHero", "./assets/topHero.png")
  }, [])

  return (
    <Suspense fallback={<div>TODO: Loading</div>}>
      <div ref={onLoad} />
    </Suspense>
  )
}

export default TopHero;
