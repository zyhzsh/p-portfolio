import React from 'react'
import * as Section from '../../Config/SectionIds.js';
import useStyles from './styles';
const Banner = () => {
  const classes = useStyles();
  return (
    <section id={Section.BANNER}>Banner</section>
  )
}

export default Banner