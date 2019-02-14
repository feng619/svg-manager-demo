import React, { Component } from 'react'
import { connect } from 'react-redux'

import { testFulAction, testRejAction } from '../../redux/action'
import { getAnime } from './utils'
import { ANIME_MS } from './utils/setting'
import { SVG_ELEMENT_DATA } from './components/SvgElement/data'
import Title from './components/Title'
import Shape from './components/Shape'
import ActionInner from './components/Shape/components/ActionInner'
import ComponentInner from './components/Shape/components/ComponentInner'
import ServerInner from './components/Shape/components/ServerInner'
import StoreInner from './components/Shape/components/StoreInner'
import SvgElement from './components/SvgElement'

import './style.scss'
import './components/Shape/components/ReducerInner/style.scss'

class FulfilledBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      /**
       * init -> req -> req0 -> req1 -> req2
       *      -> ful -> ful0 -> ful1 -> ful2 -> ful_end
       *  (or -> rej -> rej0 -> rej1 -> rej2 -> rej_end)
       */
      phase: 'init',
      /**
       * ful or rej
       */
      actionType: '',
      anime: getAnime()
    }
  }

  anime (phase, newStateOfIsAnimating = {}, newStateOfFulRej = {}, ms = 0, fn = null) {
    setTimeout(() => {
      this.setState({
        phase,
        anime: getAnime(newStateOfIsAnimating, newStateOfFulRej)
      }, fn)
    }, ms)
  }

  handleRequest (actionType = 'ful') {
    const { testFulAction, testRejAction } = this.props
    let action = testFulAction

    if (actionType === 'rej') action = testRejAction

    this.setState({ actionType })
    this.anime('init', {}, {}, 100)
    this.anime('req', { l2: true }, {}, ANIME_MS)
    this.anime('req0', { r0: true, l0: true }, {}, ANIME_MS * 2, action)
    this.anime('req1', { r1: true }, {}, ANIME_MS * 3)
    this.anime('req2', { r2: true }, {}, ANIME_MS * 4, this.handleResponse)
  }

  handleResponse () {
    const { testData } = this.props

    if (testData.data) {
      if (testData.data.status === 200) {
        this.anime('ful', { l1: true }, {}, ANIME_MS)
        this.anime('ful0', { r0: true }, {}, ANIME_MS * 2)
        this.anime('ful1', { r1: true }, {}, ANIME_MS * 3)
        this.anime('ful2', { r2: true }, {}, ANIME_MS * 4)
        this.anime('ful_end', {}, {}, ANIME_MS * 5)
      } else {
        // error handling
        this.anime('rej', { l1: true }, { l0: 'rej', l1: 'rej' }, ANIME_MS)
        this.anime('rej0', { r0: true }, { l0: 'rej' }, ANIME_MS * 2)
        this.anime('rej1', { r1: true }, { l0: 'rej' }, ANIME_MS * 3)
        this.anime('rej2', { r2: true }, { l0: 'rej' }, ANIME_MS * 4)
        this.anime('rej_end', {}, { l0: 'rej' }, ANIME_MS * 5)
      }
    }
  }

  render () {
    const { phase, actionType, anime } = this.state

    return (
      <div className='wrapper'>
        <div className='fulfilled-box'>
          <Title />
          <Shape title='server' phase={phase} actionType={actionType} blink={false} Component={ServerInner} />
          <div className='client'>
            <Shape title='component' phase={phase} blink request={this.handleRequest.bind(this)} Component={ComponentInner} />
            <Shape title='action' phase={phase} blink Component={ActionInner} />
            <Shape title='reducer' phase={phase} blink />
            <Shape title='store' phase={phase} blink Component={StoreInner} />
          </div>
          {
            SVG_ELEMENT_DATA.map(({ className, svgName, needAnime }) => (
              <SvgElement
                key={svgName}
                className={className}
                svgName={svgName}
                needAnime={needAnime}
                anime={anime} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default connect(({ testData }) => ({ testData }), { testFulAction, testRejAction })(FulfilledBox)
